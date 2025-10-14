import React from "react";
import Header from "../components/Header/Header";
import styles from "./MainLayout.module.css";
import Footer from "../components/Footer/Footer";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.main_layout}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
