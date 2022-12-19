import styles from "./Searchbox.module.css";

const Searchbox = ({ value, onChange, placeholder, width }) => {
  return (
    <div className={styles.searchbox} style={{ width }}>
      <i className="fa-regular fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
      <i className="fa-regular fa-xmark"></i>
    </div>
  );
};

export default Searchbox;
