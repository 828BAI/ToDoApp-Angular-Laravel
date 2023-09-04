import { Component, OnInit, /* ChangeDetectionStrategy */ } from '@angular/core';
import { TodoService } from 'src/app/Services/State/todo.service';
import { Observable, map } from 'rxjs';
import { ITodo } from 'src/app/Special/Interfaces';

@Component({
    selector: 'app-page-main',
    templateUrl: './page-main.component.html',
    styleUrls: ['./page-main.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageMainComponent implements OnInit {
    newTodo: ITodo = {
        nazvanie: '',
        opisanie: '',
        status: false,
    }

    todos$!: Observable<ITodo[]>;

    serviceIsLoading = this.todoService.isLoading$

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
        // Assign the observable directly to the todos$ property
        this.todos$ = this.todoService.todos$;

    }

    trackByFn(index: number, item: any) {
        return item.id
    }


}
