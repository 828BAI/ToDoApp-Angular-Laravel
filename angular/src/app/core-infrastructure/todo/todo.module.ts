import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './page/todo.component';
import { FormsModule } from '@angular/forms';
import { CompCardComponent } from './components/comp-card/comp-card.component';


@NgModule({
    declarations: [
        TodoComponent,
        CompCardComponent,
    ],
    imports: [
        CommonModule,
        TodoRoutingModule,
        FormsModule

    ]
})
export class TodoModule { }
