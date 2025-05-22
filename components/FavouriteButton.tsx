import { useSearch } from "@/context/SearchContext";
import { Heart } from "lucide-react";

type FavouriteButton = {
  title: string;
  released: string;
};

const FavouriteButton = ({ title, released }: FavouriteButton) => {
  const { favourites, setFavourites } = useSearch();

  const handleClick = () => {
    const newFavourite = { title, released };
    setFavourites([...favourites, newFavourite]);
  };

  const isFavourited = favourites.some(
    (favo) => favo.title === title && favo.released === released
  );

  return (
    <>
      <button
        onClick={isFavourited ? undefined : handleClick}
        className="text-black p-1 rounded cursor-pointer top-0 left-0"
      >
        <Heart
          className={`transition-all duration-200 hover:-translate-y-1 active:translate-y-0 ${
            isFavourited ? "text-red-500" : ""
          }`}
        />
      </button>
    </>
  );
};

export default FavouriteButton;
