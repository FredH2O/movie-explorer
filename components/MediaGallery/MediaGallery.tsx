"use client";
import MediaCard from "./MediaCard";
import { useState } from "react";
import MovieDetails from "./MovieDetails";
import useMovieDetails from "@/hooks/useMovieDetail";
import useMovieSearch from "@/hooks/useMovieSearch";
import { useSearch } from "@/context/SearchContext";

const MediaGallery = () => {
  const { searchTerm } = useSearch();
  const {
    movies = [],
    loading: searchLoading,
    error: searchError,
  } = useMovieSearch(searchTerm, 1);
  const {
    details,
    loading: detailsLoading,
    error: detailsError,
  } = useMovieDetails();
  const [movieDetails, setMovieDetails] = useState(false);

  const handleMovieDetails = () => {
    setMovieDetails(true);
  };

  return (
    <section className="container m-auto">
      <div className="">
        <h2 className="text-2xl font-bold mb-4">
          🔥 What Everyone&apos;s Watching Right Now!
        </h2>
        {searchLoading && <p className="text-center">Loading..</p>}
        {searchError && <p>{searchError}</p>}
        {!searchLoading && movies.length === 0 && (
          <p className="text-center text-gray-500">No results found.</p>
        )}
        {movieDetails && (
          <MovieDetails onClick={() => setMovieDetails(false)} />
        )}
        <div
          onClick={handleMovieDetails}
          className="grid my-3 p-3 gap-3 justify-center place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {movies.map((movie) => (
            <MediaCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              year={movie.Year}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default MediaGallery;
