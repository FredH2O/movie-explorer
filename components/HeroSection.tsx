"use client";

import { useSearch } from "@/context/SearchContext";
import { FormEvent } from "react";
import { useTheme } from "@/context/ThemeChanger";

const HeroSection = () => {
  const { setSearchTerm, setInputValue, inputValue } = useSearch();
  const { theme } = useTheme();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <section
      className={`transition-all duration-500 ${
        theme === "dark"
          ? "bg-slate-900 text-slate-50"
          : "bg-slate-50 text-slate-900"
      }  py-16`}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Welcome to <span className="text-emerald-400">Movie Explorer</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Search titles, explore details, and uncover the stories behind every
          film and series.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-row justify-center py-10"
        >
          <input
            placeholder="Search for a movie..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            className="bg-white  outline-0 px-5 py-3 text-xl text-black max-w-md rounded-l-md w-[500px]"
          />
          <button
            type="submit"
            className="bg-emerald-500 transition-all duration-300 border px-5 py-2 cursor-pointer rounded-r-md hover:bg-emerald-700 hover:text-black"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
