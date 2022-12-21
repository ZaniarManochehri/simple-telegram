import styles from "./Searchbox.module.css";

const Searchbox = ({ value = "", onChange, placeholder, width, onClear }) => {
  return (
    <div className={styles.searchbox} style={{ width }}>
      <i className="fa-regular fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      />
      {value && <i className="fa-regular fa-xmark" onClick={onClear}></i>}
    </div>
  );
};

export default Searchbox;
