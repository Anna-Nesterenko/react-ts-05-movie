import noPosterImg from "../../images/imageComingSoon.jpg";

import {
  WrapperInfoStyled,
  ImgStyled,
  WrapperTextInfo,
  SingleTitle,
  SingleText,
  GenresText,
} from "./MovieCard.styled";

// export interface IItems {
//   title: string;
//   poster_path: string;
//   overview: string;
//   genres: any[];
//   vote_average: number;
// }

export interface IProps {
  movie: { [key: string]: any };
  genres?: any[];
}

export const MovieCard = ({ movie }: IProps) => {
  //   console.log('movie :>> ', movie);
  const precent = Math.ceil(movie.vote_average * 10);
  const { poster_path, title, overview, genres } = movie;

  return (
    <WrapperInfoStyled>
      {poster_path ? (
        <ImgStyled
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      ) : (
        <ImgStyled src={noPosterImg} alt={title} />
      )}
      <WrapperTextInfo>
        <SingleTitle>Movie title: {title}</SingleTitle>
        <SingleText>User rating: {precent} % </SingleText>
        <SingleTitle>Overview:</SingleTitle>
        <p>{overview}</p>
        <SingleTitle>
          Genres:
          {genres &&
            genres.map(({ id, name }: any) => (
              <GenresText key={id}>{name} |</GenresText>
            ))}
        </SingleTitle>
      </WrapperTextInfo>
    </WrapperInfoStyled>
  );
};
