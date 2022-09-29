import { useFetchMovieByCast } from "../../hooks/useFetchMovieByCast";
import { Loader } from "../../components/Loader/Loader";
import { CastList } from "../../components/CastList/CastList";
import styled from "styled-components";

export const CastPage = () => {
  const { casts, loading, error } = useFetchMovieByCast();

  return (
    <>
      {!error && (
        <WrapperPage>
          {loading && <Loader />}
          {casts.length !== 0 ? (
            <CastList casts={casts} />
          ) : (
            <p>No information</p>
          )}
        </WrapperPage>
      )}
    </>
  );
};

const WrapperPage = styled.div`
  border-top: 6px double #004747;
  padding: 15px;
`;
