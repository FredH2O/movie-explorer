"use client";
import MediaCard from "./MediaCard";
import { useState } from "react";
import MovieDetails from "./MovieDetails";
import useMovieDetails from "@/hooks/useMovieDetail";
import useMovieSearch from "@/hooks/useMovieSearch";
import { useSearch } from "@/context/SearchContext";

const MediaGallery = () => {
  const { searchTerm } = useSearch();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const {
    movies = [],
    loading: searchLoading,
    error: searchError,
  } = useMovieSearch(searchTerm, 1);

  const {
    details,
    loading: detailsLoading,
    error: detailsError,
  } = useMovieDetails(selectedId);
  const [movieDetails, setMovieDetails] = useState(false);

  const handleMovieDetails = (imdbID: string) => {
    setSelectedId(imdbID);
    setMovieDetails(true);
  };

  const handleResetMovieDetails = () => {
    setMovieDetails(false);
    setSelectedId(null);
  };

  return (
    <section className="container m-auto">
      <div className="">
        <h2 className="text-2xl font-bold mb-4 text-center px-3">
          Dive into the details of your favorite films 🎬🍿
        </h2>
        {searchLoading && <p className="text-center">Loading..</p>}
        {searchError && <p>{searchError}</p>}
        {!searchLoading && movies.length === 0 && (
          <p className="text-center text-gray-500">No results found.</p>
        )}
        {detailsLoading && <p>Loading movie details..</p>}
        {detailsError && <p>Error trying to get details..</p>}
        {movieDetails && details && (
          <MovieDetails
            onClick={() => handleResetMovieDetails()}
            {...details}
          />
        )}
        <div className="grid my-3 p-3 gap-3 justify-center place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie) => (
            <MediaCard
              onClick={() => handleMovieDetails(movie.imdbID)}
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
