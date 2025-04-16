import { c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_DoRQTvF3.mjs';
import 'kleur/colors';
import { $ as $$Features2 } from '../chunks/Features2_CDUS2duI.mjs';
import { $ as $$Features3 } from '../chunks/Features3_ReFrNbRn.mjs';
import { $ as $$Hero } from '../chunks/Hero_DIvX2Mth.mjs';
import { $ as $$Stats } from '../chunks/Stats_ZdPQaDjS.mjs';
import { $ as $$Steps2 } from '../chunks/Steps2_Benvcw5l.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_CfOkWdVC.mjs';
export { renderers } from '../renderers.mjs';

const $$ONas = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "O nas"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "O nas", "image": {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "O nas"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Specjalizujemy się w projektowaniu nowoczesnych stron internetowych, sklepów online oraz aplikacji webowych i
      mobilnych. Nasze usługi obejmują również SEO, marketing i hosting.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Tworzymy innowacyjne rozwiązania dla ${maybeRenderHead()}<br> <span class="text-accent dark:text-white highlight"> Twojego biznesu online</span> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "Nasze osi\u0105gni\u0119cia", "stats": [
    { title: "Lat do\u015Bwiadczenia", amount: "10" },
    { title: "Zadowoleni klienci", amount: "500+" },
    { title: "Wdro\u017Cone projekty", amount: "300+" },
    { title: "Nagrody", amount: "15" }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Nasze us\u0142ugi", "subtitle": "Oferujemy kompleksowe us\u0142ugi dostosowane do Twoich potrzeb.", "columns": 3, "isBeforeContent": true, "items": [
    {
      title: "Strony internetowe",
      description: "Projektujemy i wdra\u017Camy responsywne oraz estetyczne strony WWW.",
      icon: "tabler:template"
    },
    {
      title: "Sklepy online",
      description: "Tworzymy sklepy internetowe na WooCommerce, Shopify i inne.",
      icon: "tabler:shopping-cart"
    },
    {
      title: "SEO i marketing",
      description: "Optymalizujemy strony pod k\u0105tem wyszukiwarek i prowadzimy kampanie reklamowe.",
      icon: "tabler:chart-line"
    }
  ] })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Nasze warto\u015Bci", "subtitle": "Nasze podej\u015Bcie opiera si\u0119 na profesjonalizmie, innowacyjno\u015Bci i dba\u0142o\u015Bci o klienta.", "items": [
    { title: "Indywidualne podej\u015Bcie", description: "Dostosowujemy rozwi\u0105zania do Twoich potrzeb i wymaga\u0144." },
    { title: "Najwy\u017Csza jako\u015B\u0107", description: "Dbamy o perfekcyjne wykonanie ka\u017Cdego projektu." },
    { title: "Sta\u0142e wsparcie", description: "Oferujemy pe\u0142ne wsparcie techniczne i doradztwo." }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Skontaktuj si\u0119 z nami", "tagline": "Masz pytania?", "columns": 2, "items": [
    {
      title: "Czat online",
      description: "Porozmawiaj z naszym konsultantem i uzyskaj szybk\u0105 pomoc.",
      icon: "tabler:messages"
    },
    {
      title: "Zadzwo\u0144 do nas",
      description: "Nasi specjali\u015Bci odpowiedz\u0105 na wszystkie Twoje pytania.",
      icon: "tabler:phone"
    }
  ] })} ` })}`;
}, "/workspaces/fachowe-strony/src/pages/o-nas.astro", undefined);

const $$file = "/workspaces/fachowe-strony/src/pages/o-nas.astro";
const $$url = "/o-nas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ONas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
