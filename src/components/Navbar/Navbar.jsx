import { Link, NavLink, useLocation } from "react-router-dom";

import logo from "../../images/logo.svg";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <Link to={"/"} className={styles.pageLogo}>
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      <ul className={styles.navList}>
        <li className={styles.listItem}>
          <NavLink to={"/"} className={styles.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/tweets"}
            state={{ from: location }}
            className={styles.link}
          >
            Tweets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
