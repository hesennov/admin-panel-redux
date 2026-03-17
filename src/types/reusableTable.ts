export interface Column<T, K extends keyof T = keyof T> {
    label:string;
    key: K;
    render?: (value:T[K],row:T)=>React.ReactNode
}