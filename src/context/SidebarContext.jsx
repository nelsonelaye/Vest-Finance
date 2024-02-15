import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext("");

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};

const Provider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default Provider;
