import MainLayout from '@/layouts/MainLayout';
import { getPostsList } from '@/api/blog';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Kirby + Next.js App',
};

const Blog = async () => {
  const { result: posts } = await getPostsList();

  return (
    <MainLayout>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default Blog;
