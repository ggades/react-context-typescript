export type Todo = Readonly<{
  text: string
  done: boolean
}>;

export type CompletedTodo = Todo & {
  readonly done: true;
};

export type TodosAction =
  | { type: 'SET_TODO'; todo: Todo }
  | { type: 'REMOVE_TODO'; index: number }
  | { type: 'TOGGLE_TODO'; index: number }
  | { type: 'COMPLETE_ALL_TODOS'; todos: Todo[] }

export type TodosContextState = {
  todos: Todo[];
};