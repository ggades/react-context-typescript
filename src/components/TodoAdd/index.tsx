import React, { useContext, useState, FormEvent } from 'react';
import { Todo } from '../../types/todos';
import { AppContext } from '../../store';
import './index.scss';

interface Props {
  addTodo: Function
}

const TodoAdd = ({ addTodo }: Props) => {
  const [newTodo, setNewTodo] = useState('');

  const submitNewTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const todo: Todo = {
      id: Math.random().toString(36).substr(2, 9),
      text: newTodo,
      done: false
    }
    addTodo(todo)
    setNewTodo('')
  };

  return (
    <>
      <h1>Todo add</h1>
      <form onSubmit={e => submitNewTodo(e)} className="todo-add">
        <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button type="submit">add todo</button>
      </form>
    </>
  );
}

export default (props: Props) => (
  <TodoAdd
    {...useContext(AppContext)}
    {...props}
  />
)
