import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './header';
import { Input } from 'components';

import { ProfileImage } from 'assets';

import styles from './EditProfile.module.css';

const EditProfile = ({ onBack, isVisible, user, updateUser }) => {
  const [nameValue, setNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [bioValue, setBioValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');

  useEffect(() => {
    setNameValue(user?.name);
    setLastNameValue(user?.last_name);
    setBioValue(user?.bio);
    setUsernameValue(user?.user_id);
  }, [user]);

  const handleEdit = () => {
    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/profile`,
        {
          name: nameValue,
          last_name: lastNameValue,
          bio: bioValue,
          user_id: usernameValue,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(() => {
        updateUser(bioValue, usernameValue, nameValue, lastNameValue);
        onBack();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header onBack={onBack} />
      <div className={styles.card}>
        {isVisible && (
          <div className={styles.profileImage}>
            <img src={ProfileImage} alt='profile-avatar' />
            <div className={styles.icon}>
              <i className='fa-regular fa-camera'></i>
            </div>
          </div>
        )}

        <div className={styles.inputsContainer}>
          <Input
            width='100%'
            placeholder='Name'
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />

          <Input
            width='100%'
            placeholder='Last Name'
            value={lastNameValue}
            onChange={(e) => setLastNameValue(e.target.value)}
          />

          <Input
            width='100%'
            placeholder='Bio (optional)'
            value={bioValue}
            onChange={(e) => setBioValue(e.target.value)}
          />

          <Input
            width='100%'
            placeholder='Username (optional)'
            value={usernameValue}
            onChange={(e) => setUsernameValue(e.target.value)}
          />
        </div>
      </div>

      {nameValue !== user?.name ||
      lastNameValue !== user?.last_name ||
      bioValue !== user?.bio ||
      usernameValue !== user?.user_id ? (
        <div className={styles.floatButton} onClick={handleEdit}>
          <i className='fa-regular fa-check'></i>
        </div>
      ) : null}
    </div>
  );
};

export default EditProfile;
