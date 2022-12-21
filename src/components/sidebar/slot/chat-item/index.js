import styles from './ChatItem.module.css';

const ChatItem = ({ item, selected, onClick }) => {
  const lastChat =
    item?.last_message?.length > 30
      ? item?.last_message.substring(0, 20) + '...'
      : item?.last_message;

  return (
    <div
      className={`${styles.chatItem} ${selected && styles.selected}`}
      onClick={onClick}
    >
      <div className={styles.imageContainer}>
        <img src={item.avatar} alt='user-avatar' className={styles.img} />
      </div>
      <div className={styles.content}>
        <div className={styles.topSection}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.date}>{item.message_date}</span>
        </div>
        <span className={styles.lastMessage}>{lastChat}</span>
      </div>
    </div>
  );
};

export default ChatItem;
