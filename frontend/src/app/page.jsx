// import Image from 'next/image';
import Link from 'next/link';
import { API_URL } from '../utils/constants';

async function getData() {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        query: "page('notes').children",
        select: {
          title: true,
          text: 'page.text.toBlocks',
          slug: true,
          date: "page.date.toDate('d.m.Y')",
        },
      }),
    });

    return res.json();
  } catch (error) {
    console.log(error.message);
  }
}

export default async function Home() {
  const { result } = await getData();

  return (
    <>
      <h1>Posts:</h1>
      <ul>
        {result.map((item, index) => (
          <li key={index}>
            <Link href={`/notes/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
