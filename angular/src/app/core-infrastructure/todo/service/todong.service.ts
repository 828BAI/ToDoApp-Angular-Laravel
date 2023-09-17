import { Injectable } from '@angular/core';
import { TodoService } from 'src/core/todos/todo.service';
import { TodoRepositoryImpl } from './todo.repository.implementation';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TodongService extends TodoService {

    constructor(private http: HttpClient) {
        super(new TodoRepositoryImpl(http));
    }
}


