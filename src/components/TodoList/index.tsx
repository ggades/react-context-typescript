import React, { useContext } from 'react';
import { TodosContext } from '../../context';
import { Todo } from '../../types/todos';

interface Props {
  todos: Todo[];
  removeTodo: Function,
  toggleTodo: Function
}

const TodoList = ({ todos, removeTodo, toggleTodo }: Props) => {
  return (
    <>
      <h1>Todos</h1>
      <div>
        {todos.map((todo, i) => (
          <div key={i}>
            <div>
              <label htmlFor={`todo-${i}`}>
                <input type="checkbox" id={`todo-${i}`} checked={todo.done} onChange={() => toggleTodo(i)}/>
                <span>{todo.text} | </span>
              </label>
              <button onClick={() => removeTodo(i)}>remove</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <pre>{JSON.stringify(todos, null, 1)}</pre>
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

