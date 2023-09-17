
export interface IGenericRepository<T, DTOCreate, DTOUpdate> {
    getSubject(): any;

    getInitialLoadingSubject(): any;

    getErrorSubject(): any;

    fetchAll(): Promise<void>;

    // fetchOne(id: number): void;

    create(dto: DTOCreate): Promise<void>;

    update(id: number, dto: DTOUpdate): Promise<void>;

    remove(id: number): Promise<void>;
}