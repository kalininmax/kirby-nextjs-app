import Header from '@/components/Header';
import styles from './AlbumLayout.module.scss';

const AlbumLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.album}>
        <div className="container grid">{children}</div>
      </main>
    </>
  );
};

export default AlbumLayout;
