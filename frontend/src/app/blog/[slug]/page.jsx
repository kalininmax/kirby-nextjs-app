import Link from 'next/link';
// import { API_URL } from '../../../utils/constants';

export default async function Page({ params }) {
  // const { result: post } = await getPost(params);

  return (
    <>
      <Link href={'/'}>Back</Link>

      <h1>Post {params.slug}</h1>

      {/* {post.text.map(({ content: { text } }) => {
        if (!text) return;
        return <div dangerouslySetInnerHTML={{ __html: text }}></div>;
      })} */}
    </>
  );
}

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

// export async function generateStaticParams() {
//   const { result } = await getData();

//   return result.map((post) => ({
//     slug: post.slug,
//   }));
// }

// async function getPost(params) {
//   try {
//     const res = await fetch(API_URL, {
//       method: 'POST',
//       body: JSON.stringify({
//         query: `page('notes/${params.slug}')`,
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
