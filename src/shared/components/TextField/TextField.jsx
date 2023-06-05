// import PropTypes from "prop-types";

import styles from "./TextField.module.scss";

const TextField = ({ label, handleChange, ...props }) => {
  return (
    <div>
      <label className={styles.label}>
        {label} <input onChange={handleChange} {...props} />
      </label>
    </div>
  );
};

export default TextField;

// TextField.propTypes = {
//   label: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired,
// };
