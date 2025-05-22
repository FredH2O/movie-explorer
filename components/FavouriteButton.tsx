import { useSearch } from "@/context/SearchContext";
import { Heart, HeartCrack } from "lucide-react";

type FavouriteButton = {
  title: string;
  released: string;
};

const FavouriteButton = ({ title, released }: FavouriteButton) => {
  const { favourites, setFavourites } = useSearch();

  const isFavourited = favourites.some(
    (favo) => favo.title === title && favo.released === released
  );

  const toggleFavourite = () => {
    if (isFavourited) {
      setFavourites(
        favourites.filter(
          (favo) => favo.title !== title || favo.released !== released
        )
      );
    } else {
      setFavourites([...favourites, { title, released }]);
    }
  };

  return (
    <div>
      <button
        onClick={toggleFavourite}
        className={`group flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium transition-transform duration-200 ${
          isFavourited
            ? "text-red-600 font-semibold bg-red-50 border border-red-200 cursor-pointer"
            : "text-gray-900 font-semibold hover:text-emerald-600 hover:bg-emerald-50 border border-transparent"
        } hover:-translate-y-0.5 active:translate-y-0`}
      >
        {isFavourited ? (
          <HeartCrack className="fill-gray-500 stroke-red-50" />
        ) : (
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavourited
                ? "fill-red-500 stroke-red-500"
                : "stroke-gray-400 hover:fill-red-500 group-hover:stroke-emerald-600"
            }`}
          />
        )}
        {isFavourited ? "Remove from Favourites" : "Add to Favourites"}
      </button>
    </div>
  );
};

export default FavouriteButton;
