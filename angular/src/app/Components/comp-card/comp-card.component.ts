import { Component, Input, /* ChangeDetectionStrategy */ } from '@angular/core';
import { TodoService } from 'src/app/Services/State/todo.service';
import { ITodo } from 'src/app/Special/Interfaces';

@Component({
    selector: 'app-comp-card',
    templateUrl: './comp-card.component.html',
    styleUrls: ['./comp-card.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompCardComponent {
    @Input() todo!: ITodo; 
    @Input() isNew?: boolean;

    loading: boolean = false;
    errorMessage: string = '';

    constructor(private todoService: TodoService) { }

    create() {
        this.loading = true
        this.todoService.create$(this.todo).subscribe({
            next: () => {
                this.todo.nazvanie = ''
                this.todo.opisanie = ''
                this.todo.status = false
                this.loading = false
            },
            error: (error) => {
                this.loading = false
                this.errorMessage = error.error.message
            }
        })

    }

    delete() {
        this.loading = true
        this.todoService.delete$(this.todo.id!).subscribe({
            next: () => {
                this.loading = false
            },
            error: (error) => {
                this.loading = false
                this.errorMessage = error.error.message
            }
        })

    }

    update() {
        this.loading = true
        this.todoService.update$(this.todo.id!, this.todo).subscribe({
            next: () => {
                this.loading = false
            },
            error: (error) => {
                this.loading = false
                this.errorMessage = error.error.message
            }
        })

    }


}