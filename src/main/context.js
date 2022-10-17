

import React, { useState, createContext } from "react";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [orderList, setOrderList] = useState([]);

  return (
    <AppContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        orderList,
        setOrderList,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
