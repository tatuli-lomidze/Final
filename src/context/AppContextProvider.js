import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { appReducer, initalState } from './appReducer';
import { signIn } from './appActionCreators';
import { isTokenValid } from '../utils/jwt';
import { FavoriteProvider } from './FavoriteContext';

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initalState);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token && isTokenValid(token)) {
      dispatch(signIn(token));
    }
  }, []);

  return (
    <appContext.Provider value={{ state, dispatch }}>
      <FavoriteProvider>
          {children}
      </FavoriteProvider>
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(appContext);
  if (context) {
    return context;
  }
  throw new Error('app context error');
};

export default AppContextProvider;