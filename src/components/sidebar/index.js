import { Fragment, useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Searchbox, Settings } from "components";
import Menu from "./slot/menu";
import ChatItem from "./slot/chat-item";
import EditProfile from "./edit-profile";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const searchSectionRef = useRef(null);

  const navigate = useNavigate();

  const [chats, setChats] = useState([]);
  const [allChats, setAllChats] = useState([]);
  const [loadingChats, setLoadingChats] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchSectionHeight, setSearchSectionHeight] = useState(0);
  const [clickedItem, setClickedItem] = useState();
  const [openSetting, setOpenSetting] = useState(false);
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [user, setUser] = useState({});

  const handleClickItem = (item) => {
    setClickedItem(item);
    navigate(`/${item.id}`);
  };

  useEffect(() => {
    setSearchSectionHeight(searchSectionRef.current.clientHeight + 25);

    setLoadingChats(true);
    axios.get(`${process.env.REACT_APP_BASE_URL}/contacts`).then((res) => {
      setChats(res.data);
      setAllChats(res.data);
      setLoadingChats(false);
    });
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/profile`)
      .then((res) => setUser(res.data));
  }, []);

  const updateUser = (bio, user_id, name, last_name) => {
    setUser({ ...user, bio, user_id, name, last_name });
  };

  const handleSearch = (e) => {
    const text = e.target.value.trim().toLowerCase();
    setSearchValue(text);
    if (text) {
      setChats(
        allChats.filter((chat) => chat.name.toLowerCase().includes(text))
      );
    } else {
      setChats(allChats);
    }
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.searchboxContainer} ref={searchSectionRef}>
        <Menu
          items={[
            {
              title: "Settings",
              icon: "gear",
              onClick: () => setOpenSetting(true),
            },
          ]}
        />
        <Searchbox
          placeholder="Search"
          width="100%"
          value={searchValue}
          onChange={handleSearch}
          onClear={() => {
            setSearchValue("");
            setChats(allChats);
          }}
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
                selected={item.id === clickedItem?.id}
                onClick={() => handleClickItem(item)}
              />
            </Fragment>
          ))
        )}
      </div>
      <div className={`${styles.profile} ${openSetting && styles.openProfile}`}>
        <Settings
          onBack={() => setOpenSetting(false)}
          isVisible={openSetting}
          user={user}
          onEdit={(open, user) => {
            setOpenEditProfile(open);
          }}
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
          user={user}
          updateUser={updateUser}
        />
      </div>
    </div>
  );
};

export default Sidebar;
