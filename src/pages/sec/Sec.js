import { useParams } from "react-router-dom";
const Sec = () => {
  const { userId } = useParams();
  console.log("oo", userId);
  return <div>sec</div>;
};

export default Sec;
