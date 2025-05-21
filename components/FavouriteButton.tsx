import { useSearch } from "@/context/SearchContext";

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

  return (
    <>
      <button
        onClick={handleClick}
        className="border text-black p-1 rounded bg-emerald-500 cursor-pointer hover:bg-emerald-600 top-0 left-0"
      >
        Bookmark
      </button>
    </>
  );
};

export default FavouriteButton;
