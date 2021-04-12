import { SET_TODO, SET_TODOS, REMOVE_TODO, TOGGLE_TODO } from '../actions';
import { TodosAction, TodosContextState } from '../types/todos';

export const initialState: TodosContextState = {
  todos: []
};

export default (state: TodosContextState, action: TodosAction) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    
    case SET_TODOS:
      return {
        ...state,
        todos: [...action.todos]
      };
    
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item, i) => i !== action.index)
      };
    
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((item, i) => ({
          ...item,
          done: i === action.index ? !item.done : item.done
        }))
      };

    default:
      return state;
  }
};
