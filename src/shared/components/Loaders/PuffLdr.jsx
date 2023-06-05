import { Puff } from "react-loader-spinner";

const PuffLdr = () => {
  return (
    <Puff
      height="80"
      width="80"
      radius={1}
      color="#EBD8FF"
      ariaLabel="puff-loading"
      wrapperStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default PuffLdr;
