import { SET_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions';
import { TodosAction, TodosContextState } from '../types/todos';

export const initialState: TodosContextState = {
  todos: [
    {
      text: 'Drink coffee ☕',
      done: false
    },
    {
      text: 'Drink more coffee ☕',
      done: false
    }
  ]
};

export default (state: TodosContextState, action: TodosAction) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo]
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
          text: item.text,
          done: i === action.index ? !item.done : item.done
        }))
      };

    default:
      return state;
  }
};
