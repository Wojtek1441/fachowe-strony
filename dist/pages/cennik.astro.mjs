import { c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_DoRQTvF3.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../chunks/Hero_6C-coMw0.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_BqGMkCjB.mjs';
export { renderers } from '../renderers.mjs';

const $$Cennik = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Cennik",
    description: "Transparentny cennik us\u0142ug projektowania stron, sklep\xF3w internetowych oraz aplikacji. Znajd\u017A pakiet idealny dla Twojego biznesu."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Cennik", "image": {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Cennik us\u0142ug"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Wybierz pakiet, który najlepiej odpowiada Twoim potrzebom. Nasze ceny są dopasowane do zakresu usług – od
      podstawowych rozwiązań po zaawansowane projekty.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` Transparentne ceny dla Twojego biznesu ` })}` })}  ${maybeRenderHead()}<section class="py-12 bg-gray-100"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Pakiet Podstawowy --> <div class="bg-white p-6 rounded-lg shadow-lg"> <h3 class="text-2xl font-bold mb-4">Podstawowy</h3> <p class="text-3xl font-extrabold mb-6">od 2,000 zł</p> <ul class="mb-6 space-y-2"> <li>Responsywna strona WWW</li> <li>Podstawowa optymalizacja SEO</li> <li>Integracja z mediami społecznościowymi</li> </ul> <a href="/kontakt" class="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
Wybierz Podstawowy
</a> </div> <!-- Pakiet Standard --> <div class="bg-white p-6 rounded-lg shadow-lg"> <h3 class="text-2xl font-bold mb-4">Standard</h3> <p class="text-3xl font-extrabold mb-6">od 4,500 zł</p> <ul class="mb-6 space-y-2"> <li>Wszystko z Pakietu Podstawowego</li> <li>Zaawansowane funkcje CMS</li> <li>Rozbudowana optymalizacja SEO</li> <li>Integracja e-commerce</li> </ul> <a href="/kontakt" class="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
Wybierz Standard
</a> </div> <!-- Pakiet Premium --> <div class="bg-white p-6 rounded-lg shadow-lg"> <h3 class="text-2xl font-bold mb-4">Premium</h3> <p class="text-3xl font-extrabold mb-6">od 8,000 zł</p> <ul class="mb-6 space-y-2"> <li>Wszystko z Pakietu Standard</li> <li>Indywidualny design</li> <li>Pełna optymalizacja SEO i marketing</li> <li>Wsparcie techniczne 24/7</li> </ul> <a href="/kontakt" class="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
Wybierz Premium
</a> </div> </div> </div> </section> ` })}`;
}, "/workspaces/fachowe-strony/src/pages/cennik.astro", undefined);

const $$file = "/workspaces/fachowe-strony/src/pages/cennik.astro";
const $$url = "/cennik";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cennik,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
