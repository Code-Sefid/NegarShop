// Header Context
import { createContext, useState } from "react";

export const HeaderContext = createContext();

export const HeaderContextProvider = ({ children }) => {
  const [open, setOpen] = useState();

  return (
    <HeaderContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
