import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext("");

export const useSearchContext = () => {
  return useContext(SearchContext);
};

const Provider = ({ children }) => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <SearchContext.Provider value={{ isSearch, setIsSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default Provider;
