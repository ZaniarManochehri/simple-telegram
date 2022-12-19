import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.avatarContainer}>
        <div className={styles.imgContainer}>
          <img src="/telegram.png" alt="" />
        </div>
        <div className={styles.nameContainer}>
          <span>Telegram</span>
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
