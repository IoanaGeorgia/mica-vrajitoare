
import Link from "next/link";
import styles from "./commons.module.css";


export default function Header() {

  return (

    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link href="/" className="link-default logo">
          🕮
        </Link>

        <div className={styles.linksWrapper}>

          <Link href="/semndecarte" className="link-default">
            Semn de carte
          </Link>

          <Link href="/despre" className="link-default">
            Despre
          </Link>
        </div>
      </div>
    </div>

  );
}
