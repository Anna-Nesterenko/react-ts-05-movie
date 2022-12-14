import { Loader } from "../../components/Loader/Loader";
import { ReviewsList } from "../../components/ReviewsList/ReviewsList";
import { useFetchMovieReviews } from "../../hooks/useFetchMovieReviews";
import styled from "styled-components";

export const ReviewsPage = () => {
  const { reviews, loading, error } = useFetchMovieReviews();

  return (
    <>
      {!error && (
        <WrapperPage>
          {loading && <Loader />}
          {reviews.length !== 0 ? (
            <ReviewsList reviews={reviews} />
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
