import { Todo, CompletedTodo } from '../types/todos';
const API = process.env.REACT_APP_API;

export const SET_TODO = 'SET_TODO';
export const SET_TODOS = 'SET_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const COMPLETE_ALL_TODOS = 'COMPLETE_ALL_TODOS';

export const addTodo = (todo: Todo) => (dispatch: Function) => dispatch({ type: SET_TODO, todo });

export const setTodos = (todos: Todo[]) => (dispatch: Function) => dispatch({ type: SET_TODOS, todos });

export const removeTodo = (index: number) => (dispatch: Function) => dispatch({ type: REMOVE_TODO, index });

export const toggleTodo = (index: number) => (dispatch: Function) => dispatch({ type: TOGGLE_TODO, index });

export const completeAllTodos = (todos: CompletedTodo[]) => (dispatch: Function) => dispatch({ type: COMPLETE_ALL_TODOS, todos });

// async function request<TResponse>(
//   url: string,
//   config: RequestInit = {}
// ): Promise<TResponse> {
//   return fetch(url, config)
//     .then((response) => response.json())
//     .then((data) => data as TResponse);
// }

export const fetchTodos = () => async (dispatch: Function) => {
  const response = await fetch(`${API}/todos`).then(res => res.json());
  setTodos(response)(dispatch);
};
