"use client";
import MediaCard from "./MediaCard";
import useMovieSearch from "@/hooks/useMovieSearch";
import { useSearch } from "@/context/SearchContext";

const MediaGallery = () => {
  const { searchTerm } = useSearch();
  const { movies = [], loading, error } = useMovieSearch(searchTerm, 1);

  return (
    <section className="container m-auto">
      <div className="">
        <h2 className="text-2xl font-bold mb-4">
          🔥 What Everyone&apos;s Watching Right Now!
        </h2>
        {loading && <p className="text-center">Loading..</p>}
        {error && <p>{error}</p>}
        {!loading && movies.length === 0 && (
          <p className="text-center text-gray-500">No results found.</p>
        )}
        <div className="grid my-3 p-3 gap-3 justify-center place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie) => (
            <MediaCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              year={movie.Year}
              genre=""
              runtime=""
              imdbRating=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default MediaGallery;
