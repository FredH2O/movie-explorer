"use client";

import { useState } from "react";
import { useSearch } from "@/context/SearchContext";
import ThemeButton from "./ThemeButton";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeChanger";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type NavigationItem =
  | { title: string; onClick: () => void }
  | { title: string; href: string };

const BurgerMenu = () => {
  const { setOpenFavourites } = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const Navigation: NavigationItem[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Favourites",
      onClick: () => {
        setIsOpen(false); // Close menu on click
        setOpenFavourites(true);
      },
    },
  ];

  return (
    <nav>
      <div className="md:hidden flex justify-end items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 1000 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`fixed inset-0 z-50 transition-all duration-75 ease-in-out ${
              theme === "dark"
                ? "bg-slate-800 text-slate-100"
                : "bg-white text-slate-800"
            }  flex flex-col items-center justify-center space-y-8 text-xl font-semibold overflow-hidden`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5"
            >
              <X className="w-8 h-8" />
            </button>
            {Navigation.map((label) => (
              <div
                key={label.title}
                onClick={
                  "onClick" in label ? label.onClick : () => setIsOpen(false)
                }
                className="hover:text-emerald-600 transition-colors duration-300"
              >
                {"href" in label ? (
                  <Link href={label.href}>{label.title}</Link>
                ) : (
                  <button className="text-inherit">{label.title}</button>
                )}
              </div>
            ))}
            <ThemeButton />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center items-center gap-5">
        {Navigation.map((label) => (
          <li
            onClick={"onClick" in label ? label.onClick : undefined}
            className="p-1 hover:text-black rounded-sm transition-all duration-300 hover:bg-emerald-500"
            key={label.title}
          >
            {"href" in label ? (
              <Link href={label.href}>{label.title}</Link>
            ) : (
              <button className="text-inherit cursor-pointer">
                {label.title}
              </button>
            )}
          </li>
        ))}
        <ThemeButton />
      </ul>
    </nav>
  );
};

export default BurgerMenu;
