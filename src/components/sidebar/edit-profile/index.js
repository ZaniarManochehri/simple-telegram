import styles from "./EditProfile.module.css";
import Header from "./header";
import { ProfileImage } from "assets";

const EditProfile = ({ onBack }) => {
  return (
    <div>
      <Header onBack={onBack} />
      <div className={styles.card}>
        <div className={styles.profileImage}>
          <img src={ProfileImage} alt="profile-image" />
          <div className={styles.icon}>
            <i className="fa-regular fa-camera"></i>
          </div>
        </div>

        <Input />
      </div>
    </div>
  );
};

export default EditProfile;
