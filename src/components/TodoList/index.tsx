import React, { useContext } from 'react';
import { TodosContext } from '../../context';
import { Todo } from '../../types/todos';

interface Props {
  todos: Todo[];
  removeTodo: Function
}

const TodoList = ({ todos, removeTodo }: Props) => {
  return (
    <>
      <h1>Todo list</h1>
      <div>
        {todos.map((todo, i) => (
          <div key={i}>
            <div>{todo.text} | done: {todo.done.toString()} | <button onClick={() => removeTodo(i)}>remove</button></div>
          </div>
        ))}
      </div>
    </>
  )
}

export default (props: Props) => (
  <TodoList
    {...useContext(TodosContext)}
    {...props}
  />
);

