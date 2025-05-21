"use client";
import MediaCard from "./MediaCard";
import { useState } from "react";
import MovieDetails from "./MovieDetails";
import useMovieDetails from "@/hooks/useMovieDetail";
import useMovieSearch from "@/hooks/useMovieSearch";
import { useSearch } from "@/context/SearchContext";
import ScrollDown from "../ScrollDown/ScrollIcon";
import Pagination from "../Pagination";

const MediaGallery = () => {
  const { searchTerm } = useSearch();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  const {
    movies = [],
    totalResults,
    loading: searchLoading,
    error: searchError,
  } = useMovieSearch(searchTerm, page);
  const totalPages = Math.min(10, Math.ceil(totalResults / 10));

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
      <div className="p-5">
        {searchTerm !== "" && movies.length >= 1 && (
          <>
            <ScrollDown />
            <h2 className="text-2xl font-bold py-10 mb-4 text-center px-3">
              Dive into the details of your favorite films 🎬🍿
            </h2>
          </>
        )}
        {searchTerm === "" && (
          <div className="flex justify-center items-center max-h-full h-[500px]">
            <p className="text-center text-gray-500">
              Start by typing a movie title above.
            </p>
          </div>
        )}
        {searchLoading && <p className="text-center">Loading..</p>}
        {searchError && <p>{searchError}</p>}
        {searchTerm !== "" && !searchLoading && movies.length === 0 && (
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

        {totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination
              currentPage={page}
              totalPages={totalPages > 100 ? 100 : totalPages}
              onPageChange={(newPage) => setPage(newPage)}
            />
          </div>
        )}
      </div>
    </section>
  );
};
export default MediaGallery;
