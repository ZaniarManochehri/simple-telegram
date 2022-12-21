import styles from './Header.module.css';

const Header = ({ onBack, onEdit }) => (
  <div className={styles.header}>
    <div className={styles.left}>
      <i className='fa-regular fa-arrow-left' onClick={onBack}></i>
      <span className={styles.headerTitle}>Setting</span>
    </div>
    <div className={styles.right}>
      <i
        className='fa-regular fa-pen'
        style={{ cursor: 'pointer' }}
        onClick={() => onEdit(true)}
      ></i>
      <i className='fa-regular fa-ellipsis-vertical'></i>
    </div>
  </div>
);

export default Header;
