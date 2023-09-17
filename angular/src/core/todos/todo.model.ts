export class Todo {
    constructor(
        public nazvanie: string,
        public opisanie: string,
        public status: boolean,
        public created_at?: string,
        public id?: number,
    ) { }
}