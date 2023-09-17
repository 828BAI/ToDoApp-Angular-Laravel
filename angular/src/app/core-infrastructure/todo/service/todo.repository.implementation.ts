import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, firstValueFrom } from "rxjs";
import { API_Todo } from "src/app/shared/api.routes";
import { Todo } from "src/core/todos/todo.model";
import { ITodoRepository, TodoDTOCreate, TodoDTOUpdate } from "src/core/todos/todo.repository";

export class TodoRepositoryImpl implements ITodoRepository {
    constructor(private http: HttpClient) { }
    private todoState = new TodoState(this.http)

    getSubject(): any {
        return this.todoState.todosSubjectGetter$
    };

    getInitialLoadingSubject(): any {
        return this.todoState.initialIsLoadingSubjectGetter$
    };

    getErrorSubject(): any {
        return this.todoState.errorSubjectGetter$
    };


    async fetchAll(): Promise<void> {
        this.todoState.loadTodos()
    };

    // fetchOne(id: number): void {

    // };

    create(dto: TodoDTOCreate): Promise<void> {
        return this.todoState.create(dto)
    };

    update(id: number, dto: TodoDTOUpdate): Promise<void> {
        return this.todoState.update(id, dto)
    };

    remove(id: number): Promise<void> {
        return this.todoState.remove(id)
    };
}

class TodoState {
    private initialIsLoadingSubject = new BehaviorSubject<boolean>(true);

    get initialIsLoadingSubjectGetter$() {
        return this.initialIsLoadingSubject;
    }



    private errorSubject = new BehaviorSubject<string>('');

    get errorSubjectGetter$() {
        return this.errorSubject;
    }



    private todosSubject = new BehaviorSubject<Todo[]>([]);

    get todosSubjectGetter$() {
        return this.todosSubject;
    }



    constructor(private http: HttpClient) { }


    private baseUrl = API_Todo;
    loadTodos() {
        this.http
            .get<Todo[]>(`${this.baseUrl}`)
            .subscribe({
                next: (todos) => {
                    this.todosSubject.next(todos);
                    this.initialIsLoadingSubject.next(false)
                },
                error: (error) => {
                    this.errorSubject.next(error.error.message);
                    this.initialIsLoadingSubject.next(false)
                }
            });
    }






    async create(todo: TodoDTOCreate) {
        /* 
        .subscribe({
            next: (newTodo: any) => {
                this.addToLocalState(newTodo);
            },
            error: (error) => {
                this.errorSubject.next(error.error.message);
            }
        })
        */
        const res = await firstValueFrom(this.http.post(`${this.baseUrl}`, todo)) as Todo
        this.addToLocalState(res)
    }
    private addToLocalState(newTodo: Todo) {
        const currentTodos = this.todosSubject.value;
        this.todosSubject.next([...currentTodos, newTodo]);
    }


    async update(id: number, todo: Todo) {
        /* 
        .subscribe({
            next: (newTodo: any) => {
                this.updateLocalState(id, newTodo);
            },
            error: (error) => {
                this.errorSubject.next(error.error.message);
            }
        })
        */
        const res = await firstValueFrom(this.http.put(`${this.baseUrl}/${id}`, todo)) as Todo
        this.updateLocalState(id, res);
    }
    private updateLocalState(id: number, updatedTodo: Todo) {
        const currentTodos = this.todosSubject.value;
        const index = currentTodos.findIndex((t) => t.id === id);
        if (index !== -1) {
            currentTodos[index] = updatedTodo;
            this.todosSubject.next([...currentTodos]);
        }
    }


    async remove(id: number) {
        /* 
        .subscribe({
            next: () => {
                this.removeFromLocalState(id);
            },
            error: (error) => {
                this.errorSubject.next(error.error.message);
            }
        })
        */
        await firstValueFrom(this.http.delete(`${this.baseUrl}/${id}`))
        this.removeFromLocalState(id);
    }
    private removeFromLocalState(id: number) {
        const currentTodos = this.todosSubject.value;
        const updatedTodos = currentTodos.filter((t) => t.id !== id);
        this.todosSubject.next(updatedTodos);
    }


}