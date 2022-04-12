import React, { createContext, useReducer } from 'react';
import { GlobalActionType, GlobalContextProps, GlobalAction, GlobalState, IPicture } from "./models";

const initialContext: GlobalState = {
  clickedImage: undefined as IPicture | undefined
};

const Context = createContext({} as GlobalContextProps);

const reducer = (state = initialContext, action: GlobalAction) => {
  switch (action.type) {
    case GlobalActionType.SET_OPEN_IMAGE:
      return { ...state, clickedImage: action.payload };
    default:
      throw new Error(`Unsupported action type: ${action}`);
  }
};

type GlobalContextProviderProps = {
  children: React.ReactNode
};

const ContextProvider: React.FunctionComponent<GlobalContextProviderProps> = ({ children }) => {
  const [context = initialContext, dispatch] = useReducer(reducer, initialContext);
  const value = { context, dispatch } as GlobalContextProps;
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const ContextConsumer = Context.Consumer;
export { Context, ContextProvider, ContextConsumer };
