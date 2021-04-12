export type Todo = Readonly<{
  id: string
  text: string
  done: boolean
}>;

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
};