import { useState, useEffect, useRef, Fragment } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { HomeFooter, HomeHeader, MessageCard } from 'components';

import styles from './InnerChat.module.css';

const InnerChat = () => {
  const { userId } = useParams();

  const [messages, setMessages] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [userName, setUserName] = useState('');
  const [avatar, setAvatar] = useState('');

  const getConversion = async () => {
    setLoadingData(true);

    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/messages/${userId}`
    );

    return data;
  };

  const elementRef = useRef(null);

  const scrollToBottom = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (userId) scrollToBottom(elementRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  useEffect(() => {
    if (userId) {
      getConversion().then((data) => {
        setLoadingData(false);
        setUserName(data.name);
        setAvatar(data.avatar);
        setMessages(data.messages);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <div className={styles.container}>
      {userId && (
        <>
          <HomeHeader name={userName} avatar={avatar} />
          <div className={styles.wrapper}>
            <div className={styles.content}>
              {loadingData ? (
                <div className={styles.spinnerContainer}>
                  <i className='fa-regular fa-spinner fa-spin'></i>
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
            <HomeFooter
              setMessages={setMessages}
              messages={messages}
              userId={userId}
              elementRef={elementRef}
              scrollToBottom={scrollToBottom}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default InnerChat;
