
import { IGenericRepository } from "../generic.repository";
import { Todo } from "./todo.model";

export class TodoDTOCreate extends Todo { }

export class TodoDTOUpdate extends TodoDTOCreate { }



export interface ITodoRepository extends IGenericRepository<Todo, TodoDTOCreate, TodoDTOUpdate> { }