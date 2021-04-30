import React, { useContext, useState, FormEvent } from 'react';
import { NewTodo } from '../../types/todos';
import { AppContext } from '../../store';
import './index.scss';

interface Props {
  addTodo: Function
}

const TodoAdd = ({ addTodo }: Props) => {
  const [newTodo, setNewTodo] = useState('');

  const submitNewTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(newTodo === '') return

    const todo: NewTodo = {
      text: newTodo,
      done: false
    }
    addTodo(todo)
    setNewTodo('')
  };

  return (
    <>
      <h1>Todo add</h1>
      <form onSubmit={e => submitNewTodo(e)} className="todo-add" data-testid="qaAddTodoForm">
        <input type="text" value={newTodo} data-testid="qaAddTodoInput" required onChange={e => setNewTodo(e.target.value)} />
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
