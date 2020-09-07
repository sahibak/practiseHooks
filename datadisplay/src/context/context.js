import React, { createContext, useState } from "react";

/**This is imported into functions where the context is used. */
export const DataContext = createContext();

// This context provider is passed to any component requiring the context
export function DataProvider({ children }) {
  const [data, setData] = useState({
    breweryData: [],
    page: 1,
    nameSearch: "",
    typeSearch: "",
  });

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
