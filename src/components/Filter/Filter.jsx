import { useSelector, useDispatch } from "react-redux";

import TextField from "../../shared/components/TextField/TextField";

import { getFilter } from "../../redux/filter/filter-selectors";
import { setFilter } from "../../redux/filter/filter-slice";

import fields from "./fields";

import styles from "./Filter.module.scss";

const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = ({ currentTarget: { value } }) =>
    dispatch(setFilter(value));

  return (
    <form className={styles.form}>
      <TextField
        {...fields.showAll}
        handleChange={handleChangeFilter}
        checked={filterValue.includes("show all")}
      />
      <TextField {...fields.follow} handleChange={handleChangeFilter} />
      <TextField {...fields.followings} handleChange={handleChangeFilter} />
    </form>
  );
};

export default Filter;
