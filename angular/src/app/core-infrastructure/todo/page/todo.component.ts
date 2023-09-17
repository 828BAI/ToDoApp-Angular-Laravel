import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Todo } from 'src/core/todos/todo.model';
import { TodongService } from '../service/todong.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
    newTodo: Todo = {
        nazvanie: '',
        opisanie: '',
        status: false,
    }



    todos$;
    loading$;

    constructor(private todoService: TodongService) {
        this.todos$ = this.todoService.getSubject()
        this.loading$ = this.todoService.getInitialLoadingSubject()
    }

    ngOnInit(): void {
        this.todoService.fetchAll()
    }

    trackByFn(index: number, item: any) {
        return 'todos' + item.id
    }

}
