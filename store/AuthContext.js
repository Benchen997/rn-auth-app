import { createContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const userIsAuthenticated = !!authToken;
  const authenticate = (token) => {
    setAuthToken(token);
  };
  const logout = () => {
    setAuthToken(null);
  };
  const value = {
    token: authToken,
    isAuthenticated: userIsAuthenticated,
    authenticate,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};