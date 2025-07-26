import { createContext, useContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ dummyKey: "value" }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export function useGlobalContext() {
  return useContext(GlobalContext);
}
