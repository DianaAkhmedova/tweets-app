import UserItem from "../UserItem/UserItem";

import styles from "./UsersList.module.scss";

const UsersList = ({ users }) => {
  const elements = users.map(({ id, ...props }) => (
    <UserItem key={id} id={id} {...props} />
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default UsersList;

UsersList.defaultProps = {
  users: [],
};
