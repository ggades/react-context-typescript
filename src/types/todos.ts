type Override<T1, T2> = Omit<T1, keyof T2> & T2;

export type Todo = Readonly<{
  id: string
  text: string
  done: boolean
}>;

export type NewTodo = Override<Todo, {
  id?: string
}>

export type CompletedTodo = Todo & {
  readonly done: true;
};

export type TodosAction =
  | { type: 'SET_TODO'; todo: Todo }
  | { type: 'SET_TODOS'; todos: Todo[] }
  | { type: 'REMOVE_TODO'; id: string }
  | { type: 'TOGGLE_TODO'; index: number }

export type TodosContextState = {
  todos: Todo[];
  loading: boolean; 
};