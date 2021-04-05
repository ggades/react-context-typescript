export type Todo = Readonly<{
  text: string
  done: boolean
}>;

export type TodosContextState = {
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
  removeTodo: (index: number) => void;
};