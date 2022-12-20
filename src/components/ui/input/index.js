import styles from "./Input.module.css";

const Input = ({ value = "", onChange, placeholder, width }) => {
  return (
    <div className={styles.container} style={{ width }}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Input;
