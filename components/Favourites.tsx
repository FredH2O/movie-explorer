"use client";

import { useSearch } from "@/context/SearchContext";
import { X } from "lucide-react";

const Favourites = () => {
  const { favourites, setOpenFavourites } = useSearch();

  return (
    <div
      onClick={() => setOpenFavourites(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
    >
      <div className="relative bg-white text-black rounded-lg shadow-lg max-w-3xl w-full p-6 space-y-6 overflow-y-auto max-h-[90vh]">
        <button
          type="button"
          onClick={() => setOpenFavourites(false)}
          className="absolute top-3 right-3 text-red-600 hover:text-red-800 font-semibold cursor-pointer"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold border-b pb-2 pt-10">
          Your Favourites
        </h2>

        {favourites.length === 0 ? (
          <p className="text-gray-500 italic">No favourites saved yet.</p>
        ) : (
          <ul className="space-y-4">
            {favourites.map((favourite) => (
              <li
                key={favourite.title}
                className="flex flex-col md:flex-row md:justify-between md:items-center border-b pb-2"
              >
                <h3 className="text-xl font-semibold">{favourite.title}</h3>
                <p className="text-gray-600 italic">
                  Released: {favourite.released}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Favourites;
