import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import UsersList from "../../components/UsersList/UsersList";
import Filter from "../../components/Filter/Filter";
import Button from "../../shared/components/Button/Button";
import DotsLdr from "../../shared/components/Loaders/DotsLdr";

import { fetchUsers } from "../../redux/users/users-operations";
import {
  getFilteredUsers,
  getLoading,
} from "../../redux/users/users-selectors";

import styles from "./TweetsPage.module.scss";

const TweetsPage = () => {
  const [page, setPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filter, setFilter] = useState("show all");

  const dispatch = useDispatch();

  const filteredUsers = useSelector(getFilteredUsers);
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  const toggleFilter = () => {
    setIsFilterOpen((prevState) => !prevState);
  };

  const handleChangeFilter = ({ currentTarget: { value } }) => {
    console.log(value);
    setFilter(value);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.btnWrapper}>
          <Link to={"/"} className={styles.back}>
            Go back
          </Link>
          <Button onClick={toggleFilter} additionalClassName={styles.adlBtn}>
            Filter
          </Button>{" "}
          {isFilterOpen && (
            <Filter
              filterValue={filter}
              handleChangeFilter={handleChangeFilter}
            />
          )}
        </div>

        {filteredUsers.length > 0 && <UsersList users={filteredUsers} />}
        {isLoading && <DotsLdr />}
        {filteredUsers.length > 0 && !isLoading && (
          <Button onClick={loadMore} additionalClassName={styles.adlBtn}>
            Load more
          </Button>
        )}
      </div>
    </div>
  );
};

export default TweetsPage;
