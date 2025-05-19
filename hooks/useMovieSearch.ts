"use client";
import { useState, useEffect } from "react";
import axios from "axios";

type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type SearchResult = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type OMDbResponse = {
  Search?: Movie[];
  totalResults?: string;
  Response: "True" | "False";
  Error?: string;
};

const useMovieSearch = (searchTerm: string, page: number) => {
  const [movies, setMovies] = useState<Movie[]>();
  const [totalResults, setTotalResults] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchTerm) return;

    const fetchMovies = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get<OMDbResponse>(
          "https://www.omdbapi.com/",
          {
            params: {
              apikey: process.env.NEXT_PUBLIC_OMDB_API_KEY,
              s: searchTerm,
              page,
            },
          }
        );

        if (data.Response === "True") {
          setMovies(data.Search);
          setTotalResults(data.totalResults ? +data.totalResults : 0);
          setError(null);
        } else {
          setMovies([]);
          setTotalResults(0);
          setError(data.Error ?? "Unknown Error");
        }
      } catch (error) {
        setError(error + "Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm, page]);

  return { movies, totalResults, loading, error };
};

export default useMovieSearch;
