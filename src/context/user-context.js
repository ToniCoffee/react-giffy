import React from 'react';
import { useState, useEffect, getFavsService } from 'util/imports';

const UserContext = React.createContext({});

const UserContextProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt'));

  useEffect(() => {
    if(!jwt) return setFavs([]);
    getFavsService({jwt}).then(setFavs);
  }, [jwt]);

  return (
    <UserContext.Provider value={{ favs, jwt, setFavs, setJWT }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
