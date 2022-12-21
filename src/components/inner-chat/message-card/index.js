import styles from './MessageCard.module.css';

const MessageCard = ({ message }) => (
  <div
    className={`${styles.card} ${
      message.type === 'received' && styles.received
    }`}
  >
    <span>{message.message}</span>
    <span className={styles.time}>{message.time}</span>
  </div>
);

export default MessageCard;
