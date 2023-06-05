import { ThreeDots } from "react-loader-spinner";

const DotsLdr = () => {
  return (
    <ThreeDots
      height="90"
      width="90"
      radius="9"
      color="#EBD8FF"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: "center" }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default DotsLdr;
