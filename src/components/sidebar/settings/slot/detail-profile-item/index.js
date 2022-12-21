import styles from './DetailProfileItem.module.css';

const DetailProfileItem = ({ icon, title, desc }) => (
  <div className={styles.item}>
    <i className={`fa-regular fa-${icon}`}></i>
    <div>
      <span>{title}</span>
      <span className={styles.descDetailProfileItems}>{desc}</span>
    </div>
  </div>
);

export default DetailProfileItem;
