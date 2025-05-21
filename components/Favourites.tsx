"use client";

import { useSearch } from "@/context/SearchContext";

const Favorites = () => {
  const { favourites } = useSearch();

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      {favourites.map((favourite) => (
        <div className="flex flex-row gap-3" key={favourite.imdbID}>
          <h3 className="text-3xl">{favourite.title}</h3>
          <p className="italic">{favourite.released}</p>
          <p>{favourite.imdbID}</p>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
