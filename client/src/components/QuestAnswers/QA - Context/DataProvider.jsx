import React, { useContext } from 'react';

export const SearchData = React.createContext();

export function useQAData() {
  return useContext(SearchData);
}
