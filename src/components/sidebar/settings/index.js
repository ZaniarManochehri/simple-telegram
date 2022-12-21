import { useEffect, useState } from "react";

import Header from "./header";
import DetailProfileItem from "./slot/detail-profile-item";
import { ProfileImage } from "assets";

import styles from "./Settings.module.css";

const Settings = ({ onBack, isVisible, onEdit, user }) => {
  const [, setUser] = useState();

  useEffect(() => {
    setUser(user);
  }, [user]);

  return (
    <div className={styles.setting}>
      <Header onBack={onBack} onEdit={onEdit} />
      <div className={styles.profileImageContainer}>
        <img src={ProfileImage} alt="profile-avatar" />
        {isVisible && (
          <div className={styles.addPhotoContainer}>
            <i className="fa-regular fa-camera"></i>
          </div>
        )}
      </div>
      <div className={styles.profileDetailsCard}>
        <DetailProfileItem icon="phone" title={user?.phone} desc="Phone" />
        <DetailProfileItem icon="at" title={user?.user_id} desc="Username" />
        <DetailProfileItem icon="circle-info" title={user?.bio} desc="Bio" />
      </div>
      <div className={styles.settingItemsContainer}>
        <div className={styles.settingItems}>
          <i className="fa-regular fa-bell"></i>
          <span>Notification and Sound</span>
        </div>
        <div className={styles.settingItems}>
          <i className="fa-regular fa-database"></i>
          <span>Data and Storage</span>
        </div>
        <div className={styles.settingItems}>
          <i className="fa-regular fa-lock"></i>
          <span>Privacy and Security</span>
        </div>
        <div className={styles.settingItems}>
          <i className="fa-regular fa-gear"></i>
          <span>General Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Settings;
