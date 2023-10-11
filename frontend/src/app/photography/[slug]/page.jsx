import { getAlbumItem, getAlbums } from '@/api/photo';
import Picture from '@/components/Picture';

import styles from '@/layouts/AlbumLayout.module.scss';

const Page = async ({ params }) => {
  const { result: album } = await getAlbumItem(params.slug);
  const {
    content: { title, subheadline, text, tags },
    images,
  } = album;

  return (
    <>
      <header
        className={`column ${styles.albumHeader}`}
        style={{ '--columns': 12 }}
      >
        <h1 className={styles.albumTitle}>{title}</h1>
        <p className={styles.albumSubtitle}>{subheadline}</p>
        <p className={styles.albumTags}>Tags: {tags}</p>
      </header>
      <div className="column" style={{ '--columns': 4 }}>
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
      <ul
        className={`column ${styles.albumGallery}`}
        style={{ '--columns': 8 }}
      >
        {images.map(({ url, width, height, alt }) => (
          <li key={url}>
            <Picture
              key={url}
              url={url}
              width={width}
              height={height}
              alt={alt}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

const generateStaticParams = async () => {
  const { result: photos } = await getAlbums();

  return photos.map((photo) => ({
    slug: photo.slug,
  }));
};

export { generateStaticParams };
export default Page;
