import React, { useReducer, createContext, FC, Reducer } from 'react';
import * as appActions from '../actions';
import reducer, {
  initialState as reducerInitialState
} from '../reducers';
import { TodosContextState } from "../types/todos";

const useActions = (actions: object, dispatch: Function) =>
  Object.entries(actions)
    .filter(([, action]) => action.constructor === Function)
    .reduce(
      (acc, [index, action]) => ({
        ...acc,
        [index]: (...args: any) => action(...args)(dispatch)
      }),
      {}
    );

// TODO: better universal typechecking for initialState and actions
const CreateProviderValue = (reducer: Reducer<any, any>, initialState: object, actions: object) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const boundActions = useActions(actions, dispatch);

  return { ...boundActions, ...state };
};

export const AppContext = createContext<TodosContextState>(
  reducerInitialState
);

const StoreProvider: FC = ({ children }) => (
  <AppContext.Provider
    value={CreateProviderValue(
      reducer,
      reducerInitialState,
      appActions
    )}
  >
    {children}
  </AppContext.Provider>
);

export default StoreProvider;
