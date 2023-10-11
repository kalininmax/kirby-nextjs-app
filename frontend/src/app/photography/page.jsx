import Link from 'next/link';
import { getAlbums } from '@/api/photo';
import Picture from '@/components/Picture';
import MainLayout from '@/layouts/MainLayout';

import styles from '@/layouts/AlbumLayout.module.scss';

export const metadata = {
  title: 'Photography | Kirby + Next.js App',
};

const Photography = async () => {
  const { result: photos } = await getAlbums();

  return (
    <MainLayout className={styles.albumsList}>
      <h1 className={styles.albumsListTitle}>Photography</h1>
      <ul className="grid">
        {photos.map((post) => {
          return (
            <li key={post.id} className="column" style={{ '--columns': 3 }}>
              <Link
                className={styles.albumLink}
                href={`/photography/${post.slug}`}
              >
                <Picture url={post.cover.url} width={400} height={500} />
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </MainLayout>
  );
};

export default Photography;
