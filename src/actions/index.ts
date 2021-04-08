import { Todo } from '../types/todos';

export const SET_TODO = 'SET_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (todo: Todo) => (dispatch: Function) => dispatch({ type: SET_TODO, todo });

export const removeTodo = (index: number) => (dispatch: Function) => dispatch({ type: REMOVE_TODO, index });

export const toggleTodo = (index: number) => (dispatch: Function) => dispatch({ type: TOGGLE_TODO, index });
