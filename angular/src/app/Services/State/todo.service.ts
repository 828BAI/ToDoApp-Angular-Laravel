import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_Todo } from 'src/app/Special/Vars';
import { tap } from 'rxjs/operators';
import { ITodo } from 'src/app/Special/Interfaces';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private isLoadingSubject = new BehaviorSubject<boolean>(true);

    get isLoading$(): Observable<boolean> {
        return this.isLoadingSubject.asObservable();
    }




    private baseUrl = API_Todo;
    private todosSubject = new BehaviorSubject<ITodo[]>([]);




    constructor(private http: HttpClient) {
        this.loadTodos();
    }



    private loadTodos() {
        this.http
            .get<ITodo[]>(`${this.baseUrl}`)
            .pipe(
                tap((todos) => {
                    this.todosSubject.next(todos);
                })
            )
            .subscribe({
                next: () => {
                    this.isLoadingSubject.next(false)
                }
            });
    }



    get todos$(): Observable<ITodo[]> {
        return this.todosSubject.asObservable();
    }

    create$(todo: ITodo)/* : Observable<ITodo> */ {
        return this.http.post(`${this.baseUrl}`, todo).pipe(
            tap((newTodo: any) => {
                this.addToLocalState(newTodo);
            })
        );
    }

    update$(id: number, todo: ITodo)/* : Observable<ITodo> */ {
        return this.http.put(`${this.baseUrl}/${id}`, todo).pipe(
            tap(() => {
                this.updateLocalState(id, todo);
            })
        );
    }

    delete$(id: number)/* : Observable<ITodo> */ {
        return this.http.delete(`${this.baseUrl}/${id}`).pipe(
            tap(() => {
                this.removeFromLocalState(id);
            })
        );
    }

    private addToLocalState(newTodo: ITodo) {
        const currentTodos = this.todosSubject.value;
        this.todosSubject.next([...currentTodos, newTodo]);
    }

    private updateLocalState(id: number, updatedTodo: ITodo) {
        const currentTodos = this.todosSubject.value;
        const index = currentTodos.findIndex((t) => t.id === id);
        if (index !== -1) {
            currentTodos[index] = updatedTodo;
            this.todosSubject.next([...currentTodos]);
        }
    }

    private removeFromLocalState(id: number) {
        const currentTodos = this.todosSubject.value;
        const updatedTodos = currentTodos.filter((t) => t.id !== id);
        this.todosSubject.next(updatedTodos);
    }
}
