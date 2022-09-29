import { SearchForm } from "../../components/SearchForm/SearchForm";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovies } from "../../services/services";
import { SearchMovieList } from "../../components/SearchMovieList/SearchMovieList";
import { Loader } from "../../components/Loader/Loader";
import { WrapperMoviePage, TextNotInfo } from "./MoviePage.styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MoviesPage = () => {
  const [movies, setMovies] = useState<{ [key: string]: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query) {
      const fetchByQuery = async () => {
        setLoading(true);
        try {
          const data = await getSearchMovies(query);
          setMovies(data.results);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      fetchByQuery();
    }
  }, [query]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const searchName = event.target.elements.query.value;

    setSearchParams(searchName !== "" ? { query: searchName } : {});

    if (searchName === "") {
      toast.warning("Sorry, your field is empty. Enter search name");
      return;
    }
  };

  return (
    <WrapperMoviePage>
      <SearchForm onSubmitForm={handleSubmit} autoComplete="off" />

      {loading && <Loader />}

      {movies.length !== 0 ? (
        <SearchMovieList movies={movies} />
      ) : (
        <TextNotInfo>Your search list is currently empty.</TextNotInfo>
      )}
    </WrapperMoviePage>
  );
};
