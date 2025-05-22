"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

type favouriteProp = {
  title: string;
  released: string;
};

type SearchContextType = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  favourites: favouriteProp[];
  setFavourites: Dispatch<SetStateAction<favouriteProp[]>>;
  openFavourites: boolean;
  setOpenFavourites: Dispatch<SetStateAction<boolean>>;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [favourites, setFavourites] = useState<favouriteProp[]>([]);
  const [openFavourites, setOpenFavourites] = useState<boolean>(false);

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      try {
        setFavourites(JSON.parse(storedFavourites));
      } catch (err) {
        console.error("Error parsing favourites from local storage:", err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        inputValue,
        setInputValue,
        favourites,
        setFavourites,
        openFavourites,
        setOpenFavourites,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context)
    throw new Error("useSearch must be used within a SearchProvider");
  return context;
};
