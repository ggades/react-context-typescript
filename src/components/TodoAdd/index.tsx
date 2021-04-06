import React, { useContext, useState, FormEvent } from 'react';
import { TodosContext } from '../../context';

interface Props {
  addTodo: Function
}

const TodoAdd = ({ addTodo }: Props) => {
  const [newTodo, setNewTodo] = useState('');

  const submitNewTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo({ text: newTodo, done: false })
    setNewTodo('')
  };

  return (
    <>
      <h1>Todo add</h1>
      <form onSubmit={e => submitNewTodo(e)}>
        <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button type="submit">add todo</button>
      </form>
    </>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: Props) => (
  <TodoAdd
    {...useContext(TodosContext)}
    {...props}
  />
)
