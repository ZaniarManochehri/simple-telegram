import styles from "./Header.module.css";

const Header = ({ onBack }) => {
  return (
    <div className={styles.header}>
      <i className="fa-regular fa-arrow-left" onClick={onBack}></i>
      <span>Edit Profile</span>
    </div>
  );
};

export default Header;
