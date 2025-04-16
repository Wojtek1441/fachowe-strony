import type { GetStaticPaths } from 'astro';
import { fetchPosts } from './blog';


export const getStaticPaths: GetStaticPaths = async ({ paginate }) => {
  const posts = await fetchPosts();
  return paginate(posts, { pageSize: 5 }); // Paginacja: 5 wpisów na stronę
};
