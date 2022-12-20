import styles from "./MessageCard.module.css";

const MessageCard = ({ message }) => {
  let mes =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <div
      className={`${styles.card} ${
        message.type === "received" && styles.received
      }`}
    >
      <span>{message.message}</span>
      <span className={styles.time}>{message.time}</span>
    </div>
  );
};

export default MessageCard;
