import { API_URL, username, password } from '@/utils/constants';

const headers = {
  Authorization:
    'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const getAlbums = async () => {
  const response = await fetch(API_URL, {
    method: 'post',
    body: JSON.stringify({
      query: "page('photography').children",
      select: {
        id: 'page.uuid',
        slug: true,
        title: true,
        cover: {
          query: 'page.content.get("cover").toFile',
          select: {
            url: true,
            width: true,
            height: true,
          },
        },
      },
    }),
    headers,
  });

  const json = await response.json();

  return json;
};

const getAlbumItem = async (slug) => {
  const response = await fetch(API_URL, {
    method: 'post',
    body: JSON.stringify({
      query: `page('photography/${slug}')`,
      select: {
        content: true,
        images: {
          query: 'page.images.sortBy("sort", "filename")',
          select: {
            url: true,
            width: true,
            height: true,
            alt: true,
          },
        },
      },
    }),
    headers,
  });

  const json = await response.json();

  return json;
};

export { getAlbums, getAlbumItem };
