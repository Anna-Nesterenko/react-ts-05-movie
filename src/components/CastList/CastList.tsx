import noUserImg from "../../images/no-user.jpg";
import { CastEl, CastImg, CastTitle, CastListStyled } from "./CastList.styled";

interface IProps {
  casts: { [key: string]: string }[];
}

export const CastList = ({ casts }: IProps) => {
  //   console.log('casts', casts);
  return (
    <CastListStyled>
      {casts.map(({ id, profile_path, name }) => (
        <CastEl key={id}>
          {profile_path ? (
            <CastImg
              src={`https://image.tmdb.org/t/p/w185${profile_path}`}
              alt={name}
            />
          ) : (
            <CastImg src={noUserImg} alt={name} />
          )}
          <CastTitle>{name}</CastTitle>
        </CastEl>
      ))}
    </CastListStyled>
  );
};
