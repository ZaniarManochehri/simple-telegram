import { useParams } from "react-router-dom";

//component
import styles from "./Home.module.css";
const Home = () => {
  const { userId } = useParams();
  console.log(userId);
  const spans = [];
  for (let i = 0; i < 200; i++) {
    spans.push(<span key={i}>a{i}</span>);
  }
  return <div className={styles.home}>{spans}</div>;
};

export default Home;
