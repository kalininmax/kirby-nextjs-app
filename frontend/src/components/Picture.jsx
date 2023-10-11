import Image from 'next/image';

import styles from './Picture.module.scss';

const Picture = ({ url, width, height, alt = '' }) => {
  const style = {
    '--w': `${width}`,
    '--h': `${height}`,
  };

  return (
    <picture className={styles.picture} style={style}>
      <Image
        key={url}
        quality={90}
        src={url}
        width={width}
        height={height}
        alt={alt}
      />
    </picture>
  );
};

export default Picture;
