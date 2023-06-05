import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../shared/components/Button/Button";
import GoItIcon from "../../shared/components/icons/GoItIcon";

import { toggleFollowingUsers } from "../../redux/users/users-operations";

import styles from "./UserItem.module.scss";

const UserItem = ({ id, user, avatar, tweets, followers, isFollowing }) => {
  const [isUserFollowing, setIsUserFollowing] = useState(isFollowing);
  const [userFollowers, setUserFollowers] = useState(followers);
  const dispatch = useDispatch();

  const handleClick = async (id, isUserFollowing, followers) => {
    try {
      setIsUserFollowing((prevState) => !prevState);
      isUserFollowing
        ? setUserFollowers((prevState) => prevState + 1)
        : setUserFollowers((prevState) => prevState - 1);
      dispatch(toggleFollowingUsers({ id, isUserFollowing, followers }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const numberWithСomma = (number) => {
    if (number === 0) return number;
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <li className={styles.userCard}>
      <GoItIcon className={styles.icon} />
      <div className={styles.thumb}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.text}>{tweets} TWEETS</p>
        <p className={styles.text}>
          {numberWithСomma(userFollowers)} FOLLOWERS
        </p>
        <Button
          onClick={() => handleClick(id, !isUserFollowing, followers)}
          additionalClassName={isUserFollowing ? styles.followingBtn : ""}
        >
          {isUserFollowing ? "following" : "follow"}
        </Button>
      </div>
    </li>
  );
};

export default UserItem;
