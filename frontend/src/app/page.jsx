// import Image from 'next/image';
import Link from 'next/link';
import { API_URL } from '../utils/constants';
import MainLayout from '@/layouts/MainLayout';

// async function getData() {
//   try {
//     const res = await fetch(API_URL, {
//       method: 'POST',
//       body: JSON.stringify({
//         query: "page('notes').children",
//         select: {
//           title: true,
//           text: 'page.text.toBlocks',
//           slug: true,
//           date: "page.date.toDate('d.m.Y')",
//         },
//       }),
//     });

//     return res.json();
//   } catch (error) {
//     console.log(error.message);
//   }
// }

export default async function Home() {
  // const { result } = await getData();

  return (
    <MainLayout>
      <h1>Home page</h1>
      {/* <ul>
        {result.map((item, index) => (
          <li key={index}>
            <Link href={`/notes/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul> */}
    </MainLayout>
  );
}
