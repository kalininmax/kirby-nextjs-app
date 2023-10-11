import Link from 'next/link';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <nav className={styles.nav}>
          <Link className={styles.logoLink} href="/">
            <img src="/next.svg" width="100" height="20" alt="Site logo" />
          </Link>
          <ul className={styles.navList}>
            <li>
              <Link className={styles.navLink} href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
