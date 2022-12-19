import { Fragment, useState } from "react";

//component
import styles from "./Sidebar.module.css";
import { Searchbox } from "components";
import Menu from "./slot/menu";
import ChatItem from "./chat-item";

const Sidebar = () => {
    const [searchValue, setSearchValue] = useState("");
    const chats = [
        {
            name: "Telegram",
            lastChat:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: 'Doc 18',
            avatar: '/telegram.png',
        },
        {
            name: "Telegram1",
            lastChat:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: 'Doc 17',
            avatar: "/logo512.png",
        },
];
    return (
        <div className={styles.sidebar}>
            <div className={styles.searchboxContainer}>
                <Menu />
                <Searchbox
                    placeholder="Search"
                    width="100%"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
            <div className={styles.chatListContainer}>
                {chats.map((item, index) => (
                    <Fragment key={index}><ChatItem item={item}/></Fragment>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
