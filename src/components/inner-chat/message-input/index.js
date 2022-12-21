import styles from './MessageInput.module.css';

const MessageInput = ({ placeholder, value, onChange, width, onKeyDown }) => (
  <div className={styles.container} style={{ width }}>
    <i className='fa-regular fa-face-smile' style={{ fontSize: 20 }}></i>
    <input
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
      onKeyDown={onKeyDown}
    />
    <i className='fa-regular fa-paperclip' style={{ fontSize: 20 }}></i>
  </div>
);

export default MessageInput;
