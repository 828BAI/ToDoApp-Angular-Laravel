import { ITodoRepository, TodoDTOCreate, TodoDTOUpdate } from "./todo.repository";


export class TodoService {
    constructor(private readonly todoRepository: ITodoRepository) { }

    getSubject(): any {
        return this.todoRepository.getSubject()
    }

    getInitialLoadingSubject(): any {
        return this.todoRepository.getInitialLoadingSubject()
    };

    getErrorSubject(): any {
        return this.todoRepository.getErrorSubject()
    };

    fetchAll(): Promise<void> {
        return this.todoRepository.fetchAll()
    }

    create(dto: TodoDTOCreate): Promise<void> {
        return this.todoRepository.create(dto)
    }

    update(id: number, dto: TodoDTOUpdate): Promise<void> {
        return this.todoRepository.update(id, dto)

    }

    remove(id: number): Promise<void> {
        return this.todoRepository.remove(id)
    }
}