import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import PuffLdr from "../../shared/components/Loaders/PuffLdr";

import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Navbar />
        </div>
      </header>
      <main>
        <Suspense fallback={<PuffLdr />}>
          <section className={styles.section}>
            <Outlet />
          </section>
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
