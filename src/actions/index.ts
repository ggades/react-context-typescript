import { Todo } from '../types/todos';
const API = process.env.REACT_APP_API;

export const SET_TODO = 'SET_TODO';
export const SET_TODOS = 'SET_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const setTodo = (todo: Todo) => (dispatch: Function) => dispatch({ type: SET_TODO, todo });

export const setTodos = <T>(todos: T) => (dispatch: Function) => dispatch({ type: SET_TODOS, todos });

export const toggleTodo = (index: number) => (dispatch: Function) => dispatch({ type: TOGGLE_TODO, index });

export const fetchTodos = () => async (dispatch: Function) => {
  const response = await fetch(`${API}/todos`).then(res => res.json());
  setTodos(response)(dispatch);
};

export const addTodo = (todo: Todo) => async (dispatch: Function) => {
  try {
    const response = await fetch(`${API}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo)
    }).then(res => res.json());

    setTodo(response)(dispatch);
  } catch (e) {
    console.error('Error while trying to create new todo', e);
  }
};

export const updateTodo = (todo: Todo, index: number) => async (dispatch: Function) => {
  const { id } = todo;
  try {
    dispatch({ type: TOGGLE_TODO, index });
    await fetch(`${API}/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo)
    });
  } catch (e) {
    console.error('Error while trying to update todo', e);
    dispatch({ type: TOGGLE_TODO, index });
  }
};

export const removeTodo = (id: string) => async (dispatch: Function) => {
  try { 
    const response = await fetch(`${API}/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json());
    
    if (response.message) dispatch({ type: REMOVE_TODO, id });
  } catch (e) {
    console.error('Error while trying to delete todo', e);
  }
};
