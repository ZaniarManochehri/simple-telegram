import styles from "./Setting.module.css";
import Header from "./header";

const Setting = ({ onBack }) => {
  return (
    <div className={styles.setting}>
      <Header onBack={onBack} />
      <div></div>
    </div>
  );
};

export default Setting;
