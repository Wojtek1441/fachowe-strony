import { d as createAstro, c as createComponent, r as renderTemplate } from '../chunks/astro/server_DoRQTvF3.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getStaticPathsBlogPost } from '../chunks/blog_Dr0HREac.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://fachowe-strony.pl");
const prerender = true;
const getStaticPaths = async () => {
  return await getStaticPathsBlogPost();
};
const $$Blog2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog2;
  const { post } = Astro2.props;
  console.log("post", post);
  return renderTemplate`<!-- <Layout metadata={metadata}> --><!-- <SinglePost post={{ ...post, image: image }} url={url}>
    {post.Content ? <post.Content /> : <Fragment set:html={post.content || ''} />}
  </SinglePost>
  <ToBlogLink />
  <RelatedPosts post={post} /> --><!-- </Layout> -->`;
}, "/workspaces/fachowe-strony/src/pages/blog2.astro", undefined);

const $$file = "/workspaces/fachowe-strony/src/pages/blog2.astro";
const $$url = "/blog2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog2,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
