import { RotatingLines } from "react-loader-spinner";
import { WrapperLoader } from "./Loader.styled";

export const Loader = () => {
  return (
    <WrapperLoader>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="4"
        width="80"
        animationDuration="1.2"
      />
    </WrapperLoader>
  );
};
