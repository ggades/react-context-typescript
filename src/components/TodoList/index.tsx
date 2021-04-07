import React, { useContext } from 'react';
import { TodosContext } from '../../context';
import { Todo } from '../../types/todos';
import './index.scss';

interface Props {
  todos: Todo[];
  removeTodo: Function,
  toggleTodo: Function
}

const TodoList = ({ todos, removeTodo, toggleTodo }: Props) => {
  return (
    <>
      <h1>Todos</h1>
      <div className="todos-list">
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>
              <label htmlFor={`todo-${i}`}>
                <input type="checkbox" id={`todo-${i}`} checked={todo.done} onChange={() => toggleTodo(i)}/>
                <span className="text">{todo.text}</span>
              </label>
              <button className="remove" onClick={() => removeTodo(i)} title="Remove item">remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="todos-raw">
        <div>Raw data:</div>
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

