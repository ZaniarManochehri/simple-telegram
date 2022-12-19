import styles from "./ChatItem.module.css";

const ChatItem = ({ item }) => {
  const lastChat =
    item.lastChat.length > 30
      ? item.lastChat.substring(0, 30) + "..."
      : item.lastChat;
  return (
    <div className={styles.chatItem}>
      <div className={styles.imageContainer}>
        <img src={item.avatar} alt="user-avatar" className={styles.img} />
      </div>
      <div className={styles.content}>
        <div className={styles.topSection}>
          <span>{item.name}</span>
          <span>{item.date}</span>
        </div>
        <span>{lastChat}</span>
      </div>
    </div>
  );
};

export default ChatItem;
