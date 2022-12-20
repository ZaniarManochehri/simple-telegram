import { useState, useEffect, useRef, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//component
import styles from "./InnerChat.module.css";
import { HomeHeader, MessageCard, MessageInput } from "components";

const InnerChat = () => {
  const { userId } = useParams();
  const elementRef = useRef(null);
  const [messageInputValue, setMessageInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");

  const getConversion = async () => {
    setLoadingData(true);
    const { data } = await axios.get(
      `http://localhost:3004/messages/${userId}`
    );
    return data;
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
      scrollToBottom(elementRef);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClickFloatButton();
    }
  };

  const scrollToBottom = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (userId) {
      getConversion().then((data) => {
        setLoadingData(false);
        setUserName(data.name);
        setAvatar(data.avatar);
        setMessages(data.messages);
      });
    }
  }, [userId]);

  useEffect(() => {
    if (userId) scrollToBottom(elementRef);
  }, [messages]);

  return (
    <div className={styles.container}>
      {userId && (
        <>
          <HomeHeader name={userName} avatar={avatar} />
          <div className={styles.wrapper}>
            <div className={styles.content}>
              {loadingData ? (
                <div className={styles.spinnerContainer}>
                  <i className="fa-regular fa-spinner fa-spin"></i>
                </div>
              ) : (
                messages?.map((message, index) => (
                  <Fragment key={index}>
                    <MessageCard message={message} />
                  </Fragment>
                ))
              )}
              <div ref={elementRef} />
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
        </>
      )}
    </div>
  );
};

export default InnerChat;
