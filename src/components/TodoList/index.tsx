import React, { useContext, ReactElement, useEffect } from 'react';
import { setTodos, fetchTodos, updateTodo, removeTodo } from '../../actions';
import { AppContext } from '../../store';
import { Todo, CompletedTodo } from '../../types/todos';
import './index.scss';

interface Props {
  todos: Todo[];
  loading: boolean,
  removeTodo: typeof removeTodo,
  updateTodo: typeof updateTodo,
  setTodos: typeof setTodos,
  fetchTodos: typeof fetchTodos
}

const TodoList = ({
  todos,
  loading,
  removeTodo,
  updateTodo,
  setTodos,
  fetchTodos
}: Props) => {
  useEffect(() => {
    if (!todos.length) fetchTodos();
  }, [todos, fetchTodos]);

  const commpleteAll = () => {
    const allTodosCompleted = todos.map((todo): CompletedTodo => ({
      ...todo,
      done: true
    }));
    setTodos<CompletedTodo[]>(allTodosCompleted);
  };

  const renderTodos = (): ReactElement => {
    if (!todos.length) return <div className="empty">
      {loading ? 'Loading...' : 'There are no todos anymore :)'}
    </div>

    return (
      <>
        <ul data-testid="qaTodoList">
          {todos.map((todo, i) => (
            <li key={i}>
              <label htmlFor={`todo-${i}`} data-testid="qaTodoLabel">
                <input
                  type="checkbox"
                  id={`todo-${i}`}
                  checked={todo.done}
                  aria-checked={todo.done}
                  onChange={() => updateTodo(todo, i)}
                />
                <span className="text">{todo.text}</span>
              </label>
              <button className="remove" onClick={() => removeTodo(todo.id)} title="Remove item">remove</button>
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

