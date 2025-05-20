import axios from "axios";
import { useState, useEffect } from "react";

type Rating = {
  Source: string;
  Value: string;
};

type MovieDetailsType = {
  Title: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
};

const useMovieDetails = (imdbID: string | null) => {
  const [details, setDetails] = useState<MovieDetailsType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!imdbID) return;

    const fetchDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<MovieDetailsType>(
          `https://www.omdbapi.com/`,
          {
            params: {
              apikey: process.env.NEXT_PUBLIC_OMDB_API_KEY,
              i: imdbID,
              plot: "full",
            },
          }
        );

        if (response.data && response.data.Title) {
          setDetails(response.data);
        } else {
          setError("No movie details found.");
          setDetails(null);
        }
      } catch (err) {
        setError(err + "Failed to fetch movie details.");
        setDetails(null);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [imdbID]);
  return { details, loading, error };
};

export default useMovieDetails;
