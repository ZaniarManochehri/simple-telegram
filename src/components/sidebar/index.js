import {Fragment} from "react";

//component
import styles from "./Sidebar.module.css";
import {Searchbox} from 'components'

const Sidebar = () => {
    const chats = []
  return (
    <div className={styles.sidebar}>
      <div>
          <Searchbox />
          {/*<Menu />*/}
      </div>
      <div>
          {/*<CategorizingChats />*/}
      </div>
      <div>
          {chats.map((item, index) => <Fragment key={index}>
              {/*<ChatItem />*/}
          </Fragment>)}
      </div>
    </div>
  );
};

export default Sidebar;
