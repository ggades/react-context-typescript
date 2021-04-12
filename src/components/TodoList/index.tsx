import React, { useContext, ReactElement, useEffect } from 'react';
import { AppContext } from '../../store';
import { Todo, CompletedTodo } from '../../types/todos';
import './index.scss';

interface Props {
  todos: Todo[];
  removeTodo: Function,
  toggleTodo: Function,
  completeAllTodos: Function,
  fetchTodos: Function
}

const TodoList = ({ todos, removeTodo, toggleTodo, completeAllTodos, fetchTodos }: Props) => {
  useEffect(() => {
    if (!todos.length) fetchTodos();
  }, []);

  const commpleteAll = () => {
    const allTodosCompleted = todos.map((todo: Todo): CompletedTodo => ({
      ...todo,
      done: true
    }));
    completeAllTodos(allTodosCompleted);
  };

  const renderTodos = (): ReactElement => {
    if (!todos.length) return <div className="empty">There are no todos anymore :)</div>

    return (
      <>
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
        <div
          onClick={commpleteAll}
          role="button"
          className="all-done"
          title="Mark all as completed">Mark all as completed
        </div>
      </>
    )
  }

  return (
    <>
      <h1>Todos</h1>
      <div className="todos-list">{renderTodos()}</div>
      <div className="todos-raw">
        <div>Raw data:</div>
        <pre>{JSON.stringify(todos, null, 1)}</pre>
      </div>
    </>
  )
}

export default (props: Props) => (
  <TodoList
    {...useContext(AppContext)}
    {...props}
  />
);

