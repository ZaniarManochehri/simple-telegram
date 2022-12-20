import styles from "./Header.module.css";

const Header = ({ name, avatar }) => {
  return (
    <div className={styles.header}>
      <div className={styles.avatarContainer}>
        <div className={styles.imgContainer}>
          <img src={avatar} alt="user-avatar" />
        </div>
        <div className={styles.nameContainer}>
          <span>{name}</span>
          <span>last seen 1 hour ago</span>
        </div>
      </div>
      <div className={styles.menuContainer}>
        <i className="fa-regular fa-phone"></i>
        <i className="fa-regular fa-magnifying-glass"></i>
        <i className="fa-regular fa-ellipsis-vertical"></i>
      </div>
    </div>
  );
};

export default Header;
