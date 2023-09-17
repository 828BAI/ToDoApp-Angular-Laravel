import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from 'src/core/todos/todo.model';
import { TodongService } from '../../service/todong.service';
import { BehaviorSubject } from 'rxjs';


@Component({
    selector: 'app-comp-card',
    templateUrl: './comp-card.component.html',
    styleUrls: ['./comp-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompCardComponent {
    @Input() todo!: Todo;
    @Input() isNew?: boolean;

    loading$ = new BehaviorSubject<boolean>(false)

    constructor(private todoService: TodongService) {
    }

    async create() {
        this.loading$.next(true)
        await this.todoService.create(this.todo)
        this.todo = {
            nazvanie: '',
            opisanie: '',
            status: false,
        }
        this.loading$.next(false)

    }

    async remove() {
        this.loading$.next(true)
        await this.todoService.remove(this.todo.id!)
        this.loading$.next(false)
    }

    async update() {
        this.loading$.next(true)
        await this.todoService.update(this.todo.id!, this.todo)
        this.loading$.next(false)
    }


}