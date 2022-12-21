import { Sidebar } from 'components';

import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Sidebar />
    {children}
  </div>
);

export default Layout;
