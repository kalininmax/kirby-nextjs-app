import { API_URL, username, password } from '@/utils/constants';

const headers = {
  Authorization:
    'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const getPostsList = async () => {
  const response = await fetch(API_URL, {
    method: 'post',
    body: JSON.stringify({
      query: "page('notes').children",
      select: {
        id: 'page.uuid',
        slug: true,
        title: true,
      },
    }),
    headers,
  });

  const json = await response.json();

  return json;
};

export { getPostsList };
