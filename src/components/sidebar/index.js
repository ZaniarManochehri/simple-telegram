import { Fragment, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//component
import styles from "./Sidebar.module.css";
import { Searchbox } from "components";
import Menu from "./slot/menu";
import ChatItem from "./slot/chat-item";

const Sidebar = () => {
  const searchSectionRef = useRef(null);
  const navigate = useNavigate();

  const [chats, setChats] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchSectionHeight, setSearchSectionHeight] = useState(0);
  const [clickedItem, setClickedItem] = useState();
  const [openMenu, setOpenMenu] = useState(false);

  const randomString = (length) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleClickItem = (item) => {
    setClickedItem(item);
    navigate(`/${item.id}`);
  };

  useEffect(() => {
    setSearchSectionHeight(searchSectionRef.current.clientHeight + 25);

    const array = [];
    for (let i = 0; i < 50; i++) {
      array.push({
        id: `@${randomString(6)}`,
        name: `Telegram${i}`,
        lastChat:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "Doc 17",
        avatar:
          i % 2 === 0
            ? "/telegram.png"
            : i % 3 === 0
            ? "image.jpeg"
            : "/logo512.png",
      });
    }
    setChats(array);
  }, []);

  const handleClickSetting = () => {};

  return (
    <div className={styles.sidebar}>
      <div className={styles.searchboxContainer} ref={searchSectionRef}>
        <Menu
          items={[
            { title: "Setting", icon: "gear", onClick: handleClickSetting },
          ]}
        />
        <Searchbox
          placeholder="Search"
          width="100%"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div
        className={styles.chatListContainer}
        style={{ height: `calc(100% - ${searchSectionHeight}px)` }}
      >
        {chats?.map((item, index) => (
          <Fragment key={index}>
            <ChatItem
              item={item}
              selected={item.id == clickedItem?.id}
              onClick={() => handleClickItem(item)}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
