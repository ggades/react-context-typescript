import { Todo, CompletedTodo } from '../types/todos';

export const SET_TODO = 'SET_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const COMPLETE_ALL_TODOS = 'COMPLETE_ALL_TODOS';

export const addTodo = (todo: Todo) => (dispatch: Function) => dispatch({ type: SET_TODO, todo });

export const removeTodo = (index: number) => (dispatch: Function) => dispatch({ type: REMOVE_TODO, index });

export const toggleTodo = (index: number) => (dispatch: Function) => dispatch({ type: TOGGLE_TODO, index });

export const completeAllTodos = (todos: CompletedTodo[]) => (dispatch: Function) => dispatch({ type: COMPLETE_ALL_TODOS, todos });
