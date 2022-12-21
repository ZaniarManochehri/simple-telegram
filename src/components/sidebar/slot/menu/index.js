import { useState } from 'react';

import styles from './Menu.module.css';

const Menu = ({ items }) => {
  const [open, setOpen] = useState(false);

  const handleClickItem = (item) => {
    item.onClick();
    setOpen(false);
  };

  return (
    <div className={styles.menu} onClick={() => setOpen(!open)}>
      <i className='fa-regular fa-bars'></i>
      <div
        className={`${styles.modal} ${open && styles.open}`}
        onClick={(e) => e.stopPropagation()}
      >
        {items.map((item, index) => (
          <div
            className={styles.item}
            key={index}
            onClick={() => handleClickItem(item)}
          >
            <i className={`fa-regular fa-${item.icon}`}></i>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
