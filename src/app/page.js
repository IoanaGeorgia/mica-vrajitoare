import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {

  return (
    <div className="page home">

      <div className={styles.hero}>
        <p className="subtitle">Fauna si flora</p>
        <p className="title">Cartea micii vrajitoare</p>
        <p className={`${styles.description} highlight`}> Tot ce trebuie sa stii despre duhurile naturii, de la fiintele vazduhului la cele mai micute plante. Afla semnele care prezic viitorul, intelege trecutul si descopera prezentul.
        </p>

        <a className="btn-default" href="/despre">Vezi mai mult</a>
      </div>

      <div class="divider">🕮</div>

      <div className={styles.categories}>
        <div className="card column">
          <p className="card-title">Animale</p>
          <p>Despre animale si comportamentul lor. Ce reprezinta fiecare, unde le poti intalni si care este rolul fiecaruia in natura</p>
          <Link href="/animale" className="link-default">Vezi animale</Link>

        </div>

        <div className="card column">
          <p className="card-title">Plante</p>
          <p>Descopera semnificatia fiecaree plante, la ce este buna fiecare si cum le poti folosi in potiuni.</p>
          <Link href="/plante" className="link-default">Vezi plante</Link>

        </div>
      </div>


    </div>
  );
}
