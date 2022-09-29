import { useState, useEffect } from "react";
import { getMovieByCast } from "../services/services";
import { useParams } from "react-router-dom";

export const useFetchMovieByCast = () => {
  const { movieId } = useParams();

  const [casts, setCasts] = useState<{ [key: string]: string }[]>([]);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovieByCast = async () => {
      setLoading(true);
      try {
        const data = await getMovieByCast(movieId);

        setCasts(data.cast);
      } catch (error) {
        setError(error);
        //   toast.error(`Not Found`);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieByCast();
  }, [movieId]);
  return { casts, loading, error };
};
