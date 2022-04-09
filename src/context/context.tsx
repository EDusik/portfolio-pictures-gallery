import React, { createContext, useReducer } from 'react';

const initialContext: any = {
  pictureOpened: ''
};

const Context = createContext({} as any);

const reducer = (state = initialContext, action) => {
  const newState = { ...state };
  newState[action.name] = action.value;
  return newState;
};

type GlobalContextProviderProps = {
  children: React.ReactNode
};

const ContextProvider: React.FunctionComponent<GlobalContextProviderProps> = ({ children, initialState }) => {
  const [context = initialContext, dispatch] = useReducer(reducer, initialState);
  const value = { context, dispatch } as any;
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const ContextConsumer = Context.Consumer;
export { Context, ContextProvider, ContextConsumer };
