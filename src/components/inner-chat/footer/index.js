import { useState } from 'react';
import { MessageInput } from 'components';

import styles from './Footer.module.css';
const Footer = ({ setMessages, messages, elementRef, scrollToBottom }) => {
  const [messageInputValue, setMessageInputValue] = useState('');

  const timeNow = () => {
    const d = new Date(),
      h = (d.getHours() < 10 ? '0' : '') + d.getHours(),
      m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    return h + ':' + m;
  };

  const handleClickFloatButton = () => {
    if (messageInputValue) {
      setMessages([
        ...messages,
        { message: messageInputValue, time: timeNow(), type: 'send' },
      ]);
      setMessageInputValue('');
      scrollToBottom(elementRef);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClickFloatButton();
    }
  };

  return (
    <footer className={styles.footer}>
      <MessageInput
        width='100%'
        value={messageInputValue}
        onChange={(e) => setMessageInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Message'
      />
      <div className={styles.floatButton} onClick={handleClickFloatButton}>
        {messageInputValue ? (
          <i className='fa-regular fa-paper-plane-top'></i>
        ) : (
          <i className='fa-regular fa-microphone'></i>
        )}
      </div>
    </footer>
  );
};

export default Footer;
