export type Todo = Readonly<{
  text: string
  done: boolean
}>;

export type TodosAction =
  | { type: 'SET_TODO'; todo: Todo }
  | { type: 'REMOVE_TODO'; index: number }
  | { type: 'TOGGLE_TODO'; index: number }

export type TodosContextState = {
  todos: Todo[];
};

// export type TodosContextState = {
//   todos: Todo[];
//   addTodo: (newTodo: Todo) => void;
//   removeTodo: (index: number) => void;
//   toggleTodo: (index: number) => void;
// };