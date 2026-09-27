export type Id = number | string;

export type ApiState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

export type Paginated<T> = {
    item: T[];
    page: number;
    total: number;
}

export interface BaseEntity {
    id: Id;
    createdAt?: string;
}