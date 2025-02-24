export async function getAllBlogPosts() {
  return [
    { title: 'Nowoczesne Strony Internetowe – Trendy 2024', slug: 'nowoczesne-strony-2024' },
    { title: 'SEO Lokalne: Jak Pozycjonować Firmę w Krakowie?', slug: 'seo-lokalne-krakow' },
    { title: 'Najlepsze Platformy do Sklepów Internetowych', slug: 'platformy-sklepowe' },
    { title: 'Czym Jest UX/UI i Dlaczego Ma Znaczenie?', slug: 'ux-ui-znaczenie' },
    { title: 'WordPress vs Joomla – Który CMS Wybrać?', slug: 'wordpress-vs-joomla' },
  ];
}

export default getAllBlogPosts; // ⬅ Dodano eksport domyślny
