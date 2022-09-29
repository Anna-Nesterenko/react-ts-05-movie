interface IProps {
  reviews: { [key: string]: string }[];
}

export const ReviewsList = ({ reviews }: IProps) => {
  //   console.log('reviews :>> ', reviews);
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h4 style={{ marginBottom: "5px" }}>
            Reviewed by the author "{author}" :{" "}
          </h4>

          <p style={{ marginBottom: "10px" }}>{content}</p>
        </li>
      ))}
    </ul>
  );
};
