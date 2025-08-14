
import { createContext, useContext, useState } from 'react';

const RouterContext = createContext();

export const Router = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState('/');
  const [searchParams, setSearchParams] = useState({});

  const navigate = (path) => {
    const [route, queryString] = path.split('?');
    setCurrentRoute(route);
    
    if (queryString) {
      const params = {};
      queryString.split('&').forEach(param => {
        const [key, value] = param.split('=');
        params[key] = decodeURIComponent(value);
      });
      setSearchParams(params);
    } else {
      setSearchParams({});
    }
  };

  return (
    <RouterContext.Provider value={{ currentRoute, searchParams, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a Router');
  }
  return context;
};