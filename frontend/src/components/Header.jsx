import Link from 'next/link';

import styles from './Header.module.scss';
import Logo from './Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <nav className={styles.nav}>
          <Link className={styles.logoLink} href="/" aria-label="Home">
            <Logo />
          </Link>
          <ul className={styles.navList}>
            <li>
              <Link className={styles.navLink} href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/contacts">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
