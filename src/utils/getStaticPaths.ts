import type { GetStaticPaths } from 'astro';
import { getAllBlogPosts } from '~/utils/blog'; // Załaduj listę wpisów

export const getStaticPaths: GetStaticPaths = async ({ paginate }) => {
  const posts = await getAllBlogPosts();
  return paginate(posts, { pageSize: 5 }); // Paginacja: 5 wpisów na stronę
};
