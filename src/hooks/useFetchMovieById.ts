import { useState, useEffect } from "react";
import { getMovieDetailsById } from "../services/services";
import { useParams } from "react-router-dom";

export const useFetchMoviesById = () => {
  const { movieId } = useParams();

  const [movies, setMovies] = useState<{ [key: string]: any }>([]);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMoviesById = async () => {
      setLoading(true);
      try {
        const data = await getMovieDetailsById(movieId);

        setMovies(data);
      } catch (error) {
        setError(error);
        //   error('Page is not found');
        //   toast.error(`Not Found`);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesById();
  }, [movieId]);
  return { movies, loading, error, movieId };
};
