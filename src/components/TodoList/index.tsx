import React, { useContext } from 'react';
import { TodosContext } from '../../context';

const TodoList = () => {
  const { todos, removeTodo } = useContext(TodosContext);

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

export default TodoList;
