import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, F as Fragment } from '../chunks/astro/server_DoRQTvF3.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../chunks/Hero_6C-coMw0.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_BqGMkCjB.mjs';
import 'clsx';
import { $ as $$Features2 } from '../chunks/Features2_BoUlr4Xu.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://fachowe-strony.pl");
const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portfolio;
  const { title, subtitle, columns = 3, items = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-12"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-4">${title}</h2> ${subtitle && renderTemplate`<p class="text-lg text-center text-gray-600 mb-8">${subtitle}</p>`} <div${addAttribute(`grid grid-cols-1 md:grid-cols-${columns} gap-8`, "class")}> ${items.map((item) => renderTemplate`<div class="bg-white shadow-lg rounded-lg overflow-hidden"> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-full h-48 object-cover"> <div class="p-4"> <h3 class="text-xl font-semibold">${item.title}</h3> <p class="text-gray-600">${item.description}</p> </div> </div>`)} </div> </div> </section>`;
}, "/workspaces/fachowe-strony/src/components/widgets/Portfolio.astro", undefined);

const $$Realizacje = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Nasze Realizacje - Fachowe Strony",
    description: "Zobacz nasze realizacje stron internetowych, sklep\xF3w e-commerce, identyfikacji wizualnej i projekt\xF3w graficznych."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Nasze realizacje", "image": {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Realizacje stron internetowych"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Tworzymy nowoczesne i skuteczne strony internetowe oraz sklepy e-commerce. Sprawdź nasze realizacje i przekonaj
      się o jakości naszej pracy.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Portfolio ${maybeRenderHead()}<br> <span class="text-accent dark:text-white highlight">naszych projektów</span> ` })}` })}  ${renderComponent($$result2, "Portfolio", $$Portfolio, { "title": "Wybrane realizacje", "subtitle": "Zobacz nasze projekty i przekonaj si\u0119 o naszej jako\u015Bci.", "columns": 3, "items": [
    {
      title: "Strona dla kancelarii prawnej",
      description: "Nowoczesna, elegancka strona internetowa dla kancelarii prawnej w Krakowie.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa7024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      title: "Sklep e-commerce z mod\u0105",
      description: "Responsywny sklep internetowy na WooCommerce dla marki modowej.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      title: "Landing Page dla startupu",
      description: "Dynamiczny landing page wspieraj\u0105cy kampani\u0119 marketingow\u0105 startupu IT.",
      image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      title: "Strona dla hotelu",
      description: "Strona internetowa z systemem rezerwacji online dla hotelu w Ma\u0142opolsce.",
      image: "https://images.unsplash.com/photo-1560221326-037f1b87f917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      title: "Portal informacyjny",
      description: "Rozbudowany serwis z wiadomo\u015Bciami lokalnymi i sekcj\u0105 blogow\u0105.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      title: "Strona dla agencji nieruchomo\u015Bci",
      description: "Profesjonalna strona internetowa prezentuj\u0105ca oferty nieruchomo\u015Bci.",
      image: "https://images.unsplash.com/photo-1567446538182-257bf91a3795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    }
  ] })}  <section class="py-12 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-6">Nasze realizacje stron internetowych – Kraków i Małopolska</h2> <p class="mb-4 text-lg text-gray-700">
Tworzymy <strong>nowoczesne strony internetowe</strong> dostosowane do potrzeb naszych klientów. W naszym portfolio
        znajdują się <strong>strony dla firm z Krakowa, Tarnowa, Nowego Sącza, Oświęcimia, Chrzanowa, Zakopanego, Wieliczki, Bochni,
          Myślenic i Olkusza</strong>. Każdy projekt dostosowujemy do branży, w której działa klient, dbając o wysoką jakość wykonania i zgodność z
        najnowszymi trendami w UX/UI.
</p> <p class="mb-4 text-lg text-gray-700">
Oferujemy realizacje <strong>stron internetowych z systemem CMS</strong>, takich jak WordPress, Joomla, Strapi
        czy Umbraco. Nasze realizacje obejmują również <strong>sklepy e-commerce na WooCommerce, PrestaShop i Shopify</strong>. Wszystkie nasze strony są w pełni responsywne, zoptymalizowane pod SEO i przygotowane do integracji z
        narzędziami analitycznymi.
</p> <p class="mb-4 text-lg text-gray-700">
Specjalizujemy się w <strong>projektowaniu graficznym</strong> – tworzymy nie tylko strony internetowe, ale również
        branding firmowy, logo i materiały reklamowe. Z nami Twoja firma zyska profesjonalny wizerunek w sieci.
</p> <p class="mb-4 text-lg text-gray-700">
Jeśli chcesz dołączyć do grona naszych zadowolonych klientów, skontaktuj się z nami! Zrealizujemy dla Ciebie
        stronę internetową, która będzie działać sprawnie i skutecznie przyciągać klientów.
</p> </div> </section>  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Masz pytania?", "tagline": "Skontaktuj si\u0119 z nami", "columns": 2, "items": [
    {
      title: "Porozmawiaj z ekspertem",
      description: "Dowiedz si\u0119 wi\u0119cej o naszych realizacjach i mo\u017Cliwo\u015Bciach wsp\xF3\u0142pracy.",
      icon: "tabler:messages"
    },
    {
      title: "Zam\xF3w stron\u0119 internetow\u0105",
      description: "Skontaktuj si\u0119 z nami i zam\xF3w stron\u0119 dopasowan\u0105 do Twojej firmy.",
      icon: "tabler:phone"
    }
  ] })} ` })}`;
}, "/workspaces/fachowe-strony/src/pages/realizacje.astro", undefined);

const $$file = "/workspaces/fachowe-strony/src/pages/realizacje.astro";
const $$url = "/realizacje";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Realizacje,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
