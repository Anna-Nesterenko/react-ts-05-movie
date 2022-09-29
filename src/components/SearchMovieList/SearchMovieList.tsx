import { useLocation } from "react-router-dom";

import {
  List,
  MovieSearchTitle,
  ListEl,
  LinkStyled,
} from "./SearchMovieList.styled";

interface IProps {
  movies: { [key: string]: string }[];
}

export const SearchMovieList = ({ movies }: IProps) => {
  //   console.log('movies', movies);
  const location = useLocation();

  return (
    <List>
      <MovieSearchTitle>Search results:</MovieSearchTitle>
      {movies.map(({ id, title }) => (
        <ListEl key={id}>
          <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </LinkStyled>
        </ListEl>
      ))}
    </List>
  );
};
