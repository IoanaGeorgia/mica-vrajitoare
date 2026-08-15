

import styles from "./commons.module.css";

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
      <p className={`${styles.title} subtitle`}>Cartea micii vrajitoare</p>
      <p className="note">All rights reserved.</p>
      </div>
    </footer>

  );
}
