import { Outlet, useLocation } from "react-router-dom";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Loader } from "../../components/Loader/Loader";
import { useFetchMoviesById } from "../../hooks/useFetchMovieById";
import { ButtonBackTo } from "../../components/ButtonBackTo/ButtonBackTo";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { WrapperMoviePage } from "../MoviesPage/MoviePage.styled";
import { List, ListEl, NavStyled, WrapperList } from "./MovieSinglePage";

export const MoviesSinglePage = () => {
  const { movies, error, loading, movieId } = useFetchMoviesById();
  const location = useLocation();

  return (
    <WrapperMoviePage>
      <>
        {!error && (
          <>
            <ButtonBackTo />
            {loading && <Loader />}
            <MovieCard movie={movies} />
          </>
        )}
      </>
      <>
        {!error ? (
          <List>
            Additional Information:
            <WrapperList>
              <ListEl>
                <NavStyled
                  to={`/movies/${movieId}/cast`}
                  state={{ from: location?.state?.from }}
                >
                  Cast
                </NavStyled>
              </ListEl>
              <ListEl>
                <NavStyled
                  to={`/movies/${movieId}/reviews`}
                  state={{ from: location?.state?.from }}
                >
                  Reviews
                </NavStyled>
              </ListEl>
            </WrapperList>
          </List>
        ) : (
          <NotFoundPage />
        )}
      </>
      <Outlet />
    </WrapperMoviePage>
  );
};
