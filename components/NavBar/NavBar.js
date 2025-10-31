import styles from './NavBar.module.css';
import Link from 'next/link';

export default function NavBar({title}) {

  function getText() {
    if (title===undefined) {
      return (
        <Link className={styles.title} href="/">
          <img className={styles.icon} src="/cubewing.svg" alt="Cubewing Logo" />
          Cubewing
        </Link>
      );
    }
    else {
      return (<>
        <Link className={styles.title} href="/">
          <img className={styles.icon} src="/arrow-left.svg" alt="Cubewing Logo" />
          
        </Link>
        <p className={styles.title}>
          {title}
        </p>
        </>
      );
    }
  }

  return (
    <nav className={styles.navbar}>
      {getText()}
    </nav>
  );
}