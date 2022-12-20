import { Fragment, useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//component
import styles from "./Sidebar.module.css";
import { Searchbox, Setting } from "components";
import Menu from "./slot/menu";
import ChatItem from "./slot/chat-item";
import { ReactLog, Wolf, Telegram } from "assets";
import EditProfile from "./edit-profile";

const Sidebar = () => {
  const searchSectionRef = useRef(null);
  const navigate = useNavigate();

  const [chats, setChats] = useState([]);
  const [loadingChats, setLoadingChats] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchSectionHeight, setSearchSectionHeight] = useState(0);
  const [clickedItem, setClickedItem] = useState();
  const [openSetting, setOpenSetting] = useState(false);
  const [openEditProfile, setOpenEditProfile] = useState(false);

  const handleClickItem = (item) => {
    setClickedItem(item);
    navigate(`/${item.id}`);
  };

  useEffect(() => {
    setSearchSectionHeight(searchSectionRef.current.clientHeight + 25);

    setLoadingChats(true);
    axios.get("http://localhost:3004/contacts").then((res) => {
      setChats(res.data);
      setLoadingChats(false);
    });
  }, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.searchboxContainer} ref={searchSectionRef}>
        <Menu
          items={[
            {
              title: "Setting",
              icon: "gear",
              onClick: () => setOpenSetting(true),
            },
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
        {loadingChats ? (
          <div className={styles.spinnerContainer}>
            <i className="fa-regular fa-spinner fa-spin"></i>
          </div>
        ) : (
          chats?.map((item, index) => (
            <Fragment key={index}>
              <ChatItem
                item={item}
                selected={item.id == clickedItem?.id}
                onClick={() => handleClickItem(item)}
              />
            </Fragment>
          ))
        )}
      </div>
      <div className={`${styles.profile} ${openSetting && styles.openProfile}`}>
        <Setting
          onBack={() => setOpenSetting(false)}
          isVisible={openSetting}
          onEdit={(open) => setOpenEditProfile(open)}
        />
      </div>
      <div
        className={`${styles.editProfile} ${
          openEditProfile && styles.openEditProfile
        }`}
      >
        <EditProfile
          onBack={() => setOpenEditProfile(false)}
          isVisible={openEditProfile}
        />
      </div>
    </div>
  );
};

export default Sidebar;
