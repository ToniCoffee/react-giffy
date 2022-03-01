import React from 'react';
import { useState } from 'util/imports'; 

const GifsContext = React.createContext({});

const GifsContextProvider = ({children}) => {
  const [gifs, setGifs] = useState([]);

  return <GifsContext.Provider value={{gifs, setGifs}}>
    {children}
  </GifsContext.Provider>;
};

export {
  GifsContext,
  GifsContextProvider
};