import styles from "./ChatItem.module.css";

const ChatItem = ({ item, selected, onClick }) => {
  const lastChat =
    item.lastChat.length > 30
      ? item.lastChat.substring(0, 20) + "..."
      : item.lastChat;
  return (
    <div
      className={`${styles.chatItem} ${selected && styles.selected}`}
      onClick={onClick}
    >
      <div className={styles.imageContainer}>
        <img src={item.avatar} alt="user-avatar" className={styles.img} />
      </div>
      <div className={styles.content}>
        <div className={styles.topSection}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.date}>{item.date}</span>
        </div>
        <span className={styles.lastMessage}>{lastChat}</span>
      </div>
    </div>
  );
};

export default ChatItem;
