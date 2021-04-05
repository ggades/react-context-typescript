import React, { useContext, useState } from 'react';
import { TodosContext } from '../../context';

const TodoAdd = () => {
  const { addTodo } = useContext(TodosContext);
  const [newTodo, setNewTodo] = useState('');

  return (
    <>
      <h1>Todo add</h1>
      <form onSubmit={e => {
        e.preventDefault()
        addTodo({ text: newTodo, done: false })
        setNewTodo('')
      }}>
        <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button type="submit">add todo</button>
      </form>
    </>
  )
}

export default TodoAdd;
