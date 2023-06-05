import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>
          Welcome <br />
          to my first test app
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
