import { Loader } from '../../components/Loader/Loader';
import { useFetchMovies } from '../../hooks/useFetchMovies';

import {
  WrapperMain,
  HomeTitle,
  List,
  ListEl,
  LinkStyled,
} from './HomePage.styled';

export const HomePage = () => {
  const { movies, loading } = useFetchMovies();

  return (
    <WrapperMain>
      <HomeTitle>Tranding today</HomeTitle>
      <List>
        {loading && <Loader />}
        {movies.map(({ id, title }) => (
          <ListEl key={id}>
            <LinkStyled to={`/movies/${id}`}>{title}</LinkStyled>
          </ListEl>
        ))}
      </List>
    </WrapperMain>
  );
};
