import React, { createContext, useState, FC } from "react";
import { TodosContextState, Todo } from "../types/todos";

const contextDefaultValues: TodosContextState = {
  todos: [
    {
      text: 'Drink coffee',
      done: false
    },
    {
      text: 'Drink more coffee',
      done: false
    }
  ],
  addTodo: () => {},
  removeTodo: () => {}
};

export const TodosContext = createContext<TodosContextState>(
  contextDefaultValues
);

const TodosProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(contextDefaultValues.todos);

  const addTodo = (newTodo: Todo) => setTodos((todos) => [...todos, newTodo]);
  const removeTodo = (index: number) => setTodos((todos) => todos.filter((item, i) => i !== index));

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;