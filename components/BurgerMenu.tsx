"use client";
import { useSearch } from "@/context/SearchContext";
import ThemeButton from "./ThemeButton";

type NavigationItem =
  | { title: string; onClick: () => void }
  | { title: string; href: string };

const BurgerMenu = () => {
  const { setOpenFavourites } = useSearch();

  const Navigation: NavigationItem[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Movies",
      href: "/movies",
    },
    {
      title: "Favourites",
      onClick: () => setOpenFavourites(true),
    },
  ];

  return (
    <div>
      <ul className="flex justify-center items-center gap-5">
        {Navigation.map((label) => (
          <li
            onClick={"onClick" in label ? label.onClick : undefined}
            className="p-1 hover:text-black rounded-sm transition-all duration-300 hover:bg-emerald-500"
            key={label.title}
          >
            <a href="#">{label.title}</a>
          </li>
        ))}
        <ThemeButton />
      </ul>
    </div>
  );
};

export default BurgerMenu;
