import { useState, useEffect, useRef, Fragment } from "react";
import { useParams } from "react-router-dom";

//component
import styles from "./InnerChat.module.css";
import { HomeHeader, MessageCard, MessageInput } from "components";
const InnerChat = () => {
  const { userId } = useParams();
  const listRef = useRef(null);
  const [messageInputValue, setMessageInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const getConversion = async () => {
    let array = [];
    for (let i = 0; i < 50; i++) {
      if (i % 2 === 0) {
        array.push({
          message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${i}`,
          time: "07:12 PM",
          type: "received",
        });
      } else {
        array.push({
          message: `test for send in simple message ${i}`,
          time: "07:12 PM",
          type: "send",
        });
      }
    }
    return array;
  };

  const timeNow = () => {
    const d = new Date(),
      h = (d.getHours() < 10 ? "0" : "") + d.getHours(),
      m = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
    return h + ":" + m;
  };
  const handleClickFloatButton = () => {
    if (messageInputValue) {
      setMessages([
        ...messages,
        { message: messageInputValue, time: timeNow(), type: "send" },
      ]);
      setMessageInputValue("");
      scrollToBottom("list");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClickFloatButton();
    }
  };

  const scrollToBottom = (id) => {
    const element = document.getElementById(id);
    element.scrollTop = element.scrollHeight;
  };

  useEffect(() => {
    getConversion().then((mes) => {
      setMessages(mes);
    });
    if (userId) scrollToBottom("list");
  }, [userId]);

  return (
    <div className={styles.container}>
      {userId && <HomeHeader />}
      {userId && (
        <div className={styles.wrapper}>
          <div className={styles.content} ref={listRef} id="list">
            {messages?.map((message, index) => (
              <Fragment key={index}>
                <MessageCard message={message} />
              </Fragment>
            ))}
          </div>
          <footer className={styles.footer}>
            <MessageInput
              width="100%"
              value={messageInputValue}
              onChange={(e) => setMessageInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div
              className={styles.floatButton}
              onClick={handleClickFloatButton}
            >
              {messageInputValue ? (
                <i className="fa-regular fa-paper-plane-top"></i>
              ) : (
                <i className="fa-regular fa-microphone"></i>
              )}
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default InnerChat;
