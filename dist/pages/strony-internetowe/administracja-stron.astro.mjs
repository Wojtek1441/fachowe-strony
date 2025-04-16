import { c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_DoRQTvF3.mjs';
import 'kleur/colors';
import { $ as $$Features2 } from '../../chunks/Features2_CDUS2duI.mjs';
import { $ as $$Features3 } from '../../chunks/Features3_ReFrNbRn.mjs';
import { $ as $$Hero } from '../../chunks/Hero_DIvX2Mth.mjs';
import { $ as $$Stats } from '../../chunks/Stats_ZdPQaDjS.mjs';
import { $ as $$Steps2 } from '../../chunks/Steps2_Benvcw5l.mjs';
import { $ as $$PageLayout } from '../../chunks/PageLayout_CfOkWdVC.mjs';
export { renderers } from '../../renderers.mjs';

const $$AdministracjaStron = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Administracja stron WWW",
    description: "Kompleksowa administracja stron internetowych: aktualizacje, backupy, monitoring, bezpiecze\u0144stwo i wsparcie techniczne. Zadbaj o stabilno\u015B\u0107 i wydajno\u015B\u0107 swojej witryny."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Administracja stron WWW", "image": {
    src: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Administracja stron internetowych"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Zapewniamy wsparcie techniczne, regularne aktualizacje, backupy, monitoring bezpieczeństwa oraz optymalizację
      wydajności Twojej witryny.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Kompleksowa administracja ${maybeRenderHead()}<br> <span class="text-accent dark:text-white highlight">Twojej strony internetowej</span> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "Nasze osi\u0105gni\u0119cia", "stats": [
    { title: "Lat na rynku", amount: "12" },
    { title: "Obs\u0142u\u017Conych stron", amount: "500+" },
    { title: "Zadowolonych klient\xF3w", amount: "450+" },
    { title: "Realizowanych projekt\xF3w", amount: "100+" }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Nasza oferta administracji", "subtitle": "Profesjonalna obs\u0142uga Twojej witryny", "columns": 3, "isBeforeContent": true, "items": [
    {
      title: "Aktualizacje tre\u015Bci",
      description: "Regularne aktualizowanie zawarto\u015Bci, aby Twoja strona by\u0142a zawsze na bie\u017C\u0105co.",
      icon: "tabler:edit"
    },
    {
      title: "Bezpiecze\u0144stwo",
      description: "Monitorujemy i zabezpieczamy witryn\u0119 przed zagro\u017Ceniami, stosuj\u0105c najnowsze technologie.",
      icon: "tabler:shield-lock"
    },
    {
      title: "Backup i odzyskiwanie",
      description: "Tworzymy regularne kopie zapasowe, gwarantuj\u0105ce szybkie odzyskanie danych w razie awarii.",
      icon: "tabler:database"
    }
  ] })} ${renderComponent($$result2, "Features3", $$Features3, { "columns": 3, "isAfterContent": true, "items": [
    {
      title: "Optymalizacja wydajno\u015Bci",
      description: "Analizujemy i poprawiamy szybko\u015B\u0107 \u0142adowania strony dla lepszego do\u015Bwiadczenia u\u017Cytkownik\xF3w.",
      icon: "tabler:rocket"
    },
    {
      title: "Wsparcie techniczne",
      description: "Nasz zesp\xF3\u0142 ekspert\xF3w jest gotowy rozwi\u0105za\u0107 ka\u017Cdy problem techniczny.",
      icon: "tabler:headset"
    },
    {
      title: "Monitoring i raportowanie",
      description: "Sta\u0142y nadz\xF3r nad dzia\u0142aniem witryny oraz regularne raporty o jej stanie.",
      icon: "tabler:chart-line"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Wsparcie techniczne i monitoring"
  } })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Jak dzia\u0142amy?", "subtitle": "Nasz proces administracji gwarantuje bezpiecze\u0144stwo i stabilno\u015B\u0107 Twojej witryny", "items": [
    {
      title: "Analiza",
      description: "Dok\u0142adnie oceniamy stan techniczny Twojej strony oraz identyfikujemy obszary do poprawy."
    },
    {
      title: "Planowanie",
      description: "Opracowujemy harmonogram aktualizacji, backup\xF3w i dzia\u0142a\u0144 zabezpieczaj\u0105cych."
    },
    {
      title: "Wdro\u017Cenie",
      description: "Realizujemy ustalone dzia\u0142ania z wykorzystaniem najnowszych technologii i narz\u0119dzi."
    },
    {
      title: "Monitoring",
      description: "Ci\u0105g\u0142y nadz\xF3r nad dzia\u0142aniem strony i szybka reakcja na wszelkie problemy."
    }
  ] })}  <section class="py-12 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-6">Profesjonalna administracja stron WWW</h2> <p class="mb-4 text-lg text-gray-700">
Nasza usługa administracji stron internetowych to kompleksowe rozwiązanie, które gwarantuje nieprzerwane
        działanie Twojej witryny. Oferujemy regularne aktualizacje, backupy, monitoring bezpieczeństwa oraz wsparcie
        techniczne, dzięki czemu możesz skupić się na rozwoju swojego biznesu.
</p> <p class="mb-4 text-lg text-gray-700">
Zadbaj o bezpieczeństwo i wydajność swojej strony, wybierając nasze usługi administracji. Niezależnie od tego,
        czy Twoja firma mieści się w Katowicach, Krakowie, Chrzanowie, Trzebini czy innych największych miastach
        Małopolski, nasze rozwiązania są dostosowane do specyfiki lokalnego rynku. Dzięki stałej opiece technicznej,
        Twoja witryna będzie zawsze aktualna i zabezpieczona przed zagrożeniami.
</p> <p class="text-lg text-gray-700">
Postaw na profesjonalizm i niezawodność – z nami administracja strony internetowej staje się prosta, skuteczna i
        w pełni dostosowana do Twoich potrzeb.
</p> </div> </section>  <section class="py-12 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-6">Obsługujemy największe miasta Małopolski</h2> <p class="mb-4 text-lg text-gray-700">
Świadczymy usługi administracji stron internetowych w następujących lokalizacjach:
</p> <ul class="list-disc list-inside text-gray-700 text-lg mb-4"> <li>Katowice</li> <li>Kraków</li> <li>Chrzanów</li> <li>Trzebinia</li> <li>Tarnów</li> <li>Nowy Sącz</li> <li>Oświęcim</li> <li>Wieliczka</li> <li>Bochnia</li> <li>Zakopane</li> <li>Myślenice</li> </ul> <p class="text-lg text-gray-700">
Jeśli nie widzisz Twojej lokalizacji na liście, skontaktuj się z nami – oferujemy usługi administracji również w
        innych miastach regionu.
</p> </div> </section>  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Skontaktuj si\u0119 z nami", "tagline": "Jeste\u015Bmy gotowi pom\xF3c Ci w administracji Twojej witryny", "columns": 2, "items": [
    {
      title: "Konsultacja online",
      description: "Um\xF3w si\u0119 na darmow\u0105 konsultacj\u0119, aby om\xF3wi\u0107 szczeg\xF3\u0142y naszej oferty administracji stron.",
      icon: "tabler:messages"
    },
    {
      title: "Telefon kontaktowy",
      description: "Skontaktuj si\u0119 z naszym dzia\u0142em wsparcia, aby uzyska\u0107 wi\u0119cej informacji.",
      icon: "tabler:phone"
    }
  ] })} ` })}`;
}, "/workspaces/fachowe-strony/src/pages/strony-internetowe/administracja-stron.astro", undefined);

const $$file = "/workspaces/fachowe-strony/src/pages/strony-internetowe/administracja-stron.astro";
const $$url = "/strony-internetowe/administracja-stron";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AdministracjaStron,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
