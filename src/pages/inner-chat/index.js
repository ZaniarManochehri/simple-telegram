import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//component
import styles from "./InnerChat.module.css";
import { HomeHeader } from "components";
const InnerChat = () => {
  const { userId } = useParams();
  const [messages, setMessages] = useState([]);

  const getConversion = async () => {
    if (userId) {
      let array = [];
      for (let i = 0; i < 50; i++) {
        if (i % 2 === 0) {
          array.push({
            message: `test received message ${i}`,
            time: "07:12 PM",
            type: "received",
          });
        } else {
          array.push({
            message: `test send message ${i}`,
            time: "07:12 PM",
            type: "send",
          });
        }
      }
      return array;
    }
  };

  useEffect(() => {
    getConversion().then((mes) => {
      setMessages(mes);
    });
  }, [userId]);

  return (
    <div className={styles.container}>
      {userId && <HomeHeader />}
      {messages?.map((message) => (
        <span>{message.message}</span>
      ))}
    </div>
  );
};

export default InnerChat;
