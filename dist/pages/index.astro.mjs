import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as createAstro, b as addAttribute, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_DoRQTvF3.mjs';
import 'kleur/colors';
import { a as $$Button, $ as $$PageLayout } from '../chunks/PageLayout_BqGMkCjB.mjs';
import { $ as $$Hero } from '../chunks/Hero_6C-coMw0.mjs';
import { $ as $$Icon } from '../chunks/ToggleTheme_CsIZsdKu.mjs';
import { $ as $$Features, a as $$FAQs } from '../chunks/FAQs_OciW-V8S.mjs';
import { $ as $$Features2 } from '../chunks/Features2_BoUlr4Xu.mjs';
import { $ as $$WidgetWrapper } from '../chunks/WidgetWrapper_lVxkQkUJ.mjs';
import { twMerge } from 'tailwind-merge';
import { $ as $$Headline } from '../chunks/Headline_DRT1S6-V.mjs';
import { $ as $$Image } from '../chunks/Image_CqLdW9wo.mjs';
import { $ as $$ItemGrid } from '../chunks/ItemGrid_D7QwKkRv.mjs';
import { $ as $$Grid } from '../chunks/Grid_DOjZ55RW.mjs';
import { c as getBlogPermalink } from '../chunks/consts_9XgGQQB-.mjs';
import { i as findLatestPosts } from '../chunks/blog_Dr0HREac.mjs';
import { $ as $$Stats } from '../chunks/Stats_CIgV0Wbe.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_CBGzScZ_.mjs';
export { renderers } from '../renderers.mjs';

const $$Note = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-blue-50 dark:bg-slate-800 not-prose"> <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-md text-center font-medium"> <span class="font-bold"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:info-square", "class": "w-5 h-5 inline-block align-text-bottom" })}20 lat</span> Doświadczenia w branży tworzenia stron i sklepów internetowych
</div> </section>`;
}, "/workspaces/fachowe-strony/src/components/widgets/Note.astro", undefined);

const $$Astro$4 = createAstro("https://fachowe-strony.pl");
const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { items = [], classes = {}, defaultIcon } = Astro2.props;
  const {
    container: containerClass = "",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary dark:text-slate-200 border-primary dark:border-blue-700"
  } = classes;
  return renderTemplate`${items && items.length && renderTemplate`${maybeRenderHead()}<div${addAttribute(containerClass, "class")}>${items.map(({ title, description, icon, classes: itemClasses = {} }, index = 0) => renderTemplate`<div${addAttribute(twMerge(
    "flex intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade",
    panelClass,
    itemClasses?.panel
  ), "class")}><div class="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4"><div><div class="flex items-center justify-center">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge("w-10 h-10 p-2 rounded-full border-2", defaultIconClass, itemClasses?.icon) })}`}</div></div>${index !== items.length - 1 && renderTemplate`<div class="w-px h-full bg-black/10 dark:bg-slate-400/50"></div>`}</div><div${addAttribute(`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`, "class")}>${title && renderTemplate`<p${addAttribute(twMerge("text-xl font-bold", titleClass, itemClasses?.title), "class")}>${unescapeHTML(title)}</p>`}${description && renderTemplate`<p${addAttribute(twMerge("text-muted mt-2", descriptionClass, itemClasses?.description), "class")}>${unescapeHTML(description)}</p>`}</div></div>`)}</div>`}`;
}, "/workspaces/fachowe-strony/src/components/ui/Timeline.astro", undefined);

const $$Astro$3 = createAstro("https://fachowe-strony.pl");
const $$Steps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Steps;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    image = await Astro2.slots.render("image"),
    isReversed = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(["flex flex-col gap-8 md:gap-12", { "md:flex-row-reverse": isReversed }, { "md:flex-row": image }], "class:list")}> <div${addAttribute(["md:py-4 md:self-center", { "md:basis-1/2": image }, { "w-full": !image }], "class:list")}> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "text-left rtl:text-right",
    title: "text-3xl lg:text-4xl",
    ...classes?.headline ?? {}
  } })} ${renderComponent($$result2, "Timeline", $$Timeline, { "items": items, "classes": classes?.items })} </div> ${image && renderTemplate`<div class="relative md:basis-1/2"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700", "widths": [400, 768], "sizes": "(max-width: 768px) 100vw, 432px", "width": 432, "height": 768, "layout": "cover", "src": image?.src, "alt": image?.alt || "" })}`} </div>`} </div> ` })}`;
}, "/workspaces/fachowe-strony/src/components/widgets/Steps.astro", undefined);

const $$Astro$2 = createAstro("https://fachowe-strony.pl");
const $$Content = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Content;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    callToAction,
    items = [],
    columns,
    image = await Astro2.slots.render("image"),
    isReversed = false,
    isAfterContent = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${isAfterContent ? "pt-0 md:pt-0 lg:pt-0" : ""} ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "max-w-xl sm:mx-auto lg:max-w-2xl",
    title: "text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-heading",
    subtitle: "max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-400"
  } })} ${maybeRenderHead()}<div class="mx-auto max-w-7xl p-4 md:px-8"> <div${addAttribute(`md:flex ${isReversed ? "md:flex-row-reverse" : ""} md:gap-16`, "class")}> <div class="md:basis-1/2 self-center"> ${content && renderTemplate`<div class="mb-12 text-lg dark:text-slate-400">${unescapeHTML(content)}</div>`} ${callToAction && renderTemplate`<div class="mt-[-40px] mb-8 text-primary"> ${renderComponent($$result2, "Button", $$Button, { "variant": "link", ...callToAction })} </div>`} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": "tabler:check", "classes": {
    container: `gap-y-4 md:gap-y-8`,
    panel: "max-w-none",
    title: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2",
    description: "text-muted dark:text-slate-400 ml-2 rtl:ml-0 rtl:mr-2",
    icon: "flex h-7 w-7 items-center justify-center rounded-full bg-green-600 dark:bg-green-700 text-gray-50 p-1",
    action: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2"
  } })} </div> <div aria-hidden="true" class="mt-10 md:mt-0 md:basis-1/2"> ${image && renderTemplate`<div class="relative m-auto max-w-4xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto w-full rounded-lg bg-gray-500 shadow-lg", "width": 500, "height": 500, "widths": [400, 768], "sizes": "(max-width: 768px) 100vw, 432px", "layout": "responsive", ...image })}`} </div>`} </div> </div> </div> ` })}`;
}, "/workspaces/fachowe-strony/src/components/widgets/Content.astro", undefined);

const $$Astro$1 = createAstro("https://fachowe-strony.pl");
const $$BlogLatestPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLatestPosts;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "View all posts",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    count = 4,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = await findLatestPosts({ count }) ;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${linkText && linkUrl && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "link", "href": linkUrl }, { "default": ($$result3) => renderTemplate`${" "}${linkText} »
` })}`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` }`;
}, "/workspaces/fachowe-strony/src/components/widgets/BlogLatestPosts.astro", undefined);

const $$Astro = createAstro("https://fachowe-strony.pl");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const metadata = {
    title: "Tworzenie stron i sklep\xF3w internetowych",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "actions": [
    {
      variant: "primary",
      text: "Sprawd\u017A, co zyskujesz",
      href: "/oferta",
      target: "_blank"
    },
    { text: "Darmowa wycena", href: "#features" }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline"> <span class="font-semibold">Fachowe Strony</span> zarabiają na siebie i Twoją Firmę. Zaufaj specjalistom, a my zrobimy
        resztę!</span> <span class="block mb-1 sm:hidden font-bold text-blue-600">Budujemy nowoczesne strony internetowe</span>które
      przyciągną nowych klientów i pomnożą twoje zyski. Podwyższamy sprzedaż i udoskonalamy wizerunek Twojej firmy.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Tworzenie stron i sklepów internetowych
<span class="text-accent dark:text-white highlight"> Kraków</span> ` })}` })}  ${renderComponent($$result2, "Note", $$Note, {})}  ${renderComponent($$result2, "Features", $$Features, { "id": "features", "tagline": "STRONY INTERNETOWE KRAK\xD3W", "title": "Co oferujemy?", "subtitle": "Specjalizujemy si\u0119 w tworzeniu nowoczesnych i funkcjonalnych stron internetowych oraz sklep\xF3w online. Oferujemy kompleksowe us\u0142ugi SEO, pozycjonowanie i optymalizacj\u0119 stron, zapewniaj\u0105c lepsz\u0105 widoczno\u015B\u0107 w wyszukiwarkach. Budujemy i projektujemy witryny dostosowane do potrzeb klient\xF3w, gwarantuj\u0105c estetyk\u0119, szybko\u015B\u0107 i intuicyjno\u015B\u0107. Fachowe podej\u015Bcie, skuteczne rozwi\u0105zania, realne efekty! ", "items": [
    {
      title: "Strony internetowe",
      description: "Tworzymy nowoczesne, funkcjonalne i estetyczne strony internetowe, kt\xF3re pomagaj\u0105 firmom wyr\xF3\u017Cni\u0107 si\u0119 w sieci i skutecznie dociera\u0107 do klient\xF3w.",
      icon: "tabler:brand-tailwind"
    },
    {
      title: "Sklepy internetowe",
      description: "Tworzymy nowoczesne i intuicyjne sklepy internetowe ecommerce, kt\xF3re pomagaj\u0105 firmom skutecznie sprzedawa\u0107 online i rozwija\u0107 ich biznes w \u015Bwiecie e-commerce.",
      icon: "tabler:components"
    },
    {
      title: "Aplikacje internetowe",
      description: "Aplikacje webowe to dynamicznie rozwijaj\u0105cy si\u0119 rodzaj oprogramowania, kt\xF3ry w ostatnich latach zyska\u0142 ogromn\u0105 popularno\u015B\u0107.",
      icon: "tabler:list-check"
    },
    {
      title: "Administracja i obs\u0142uga stron",
      description: "Oferujemy kompleksow\u0105 administracj\u0119 i obs\u0142ug\u0119 stron internetowych, zapewniaj\u0105c ich bezpiecze\u0144stwo, aktualizacje oraz sprawne dzia\u0142anie.",
      icon: "tabler:rocket"
    },
    {
      title: "Rozbudowa i aktaualizacje stron",
      description: "Realizujemy kompleksow\u0105 rozbudow\u0119 i regularne aktualizacje stron internetowych, gwarantuj\u0105c ich nieprzerwan\u0105 funkcjonalno\u015B\u0107, bezpiecze\u0144stwo oraz nowoczesny wygl\u0105d",
      icon: "tabler:arrows-right-left"
    },
    {
      title: "Tani hosting i wsparcie",
      description: "Oferujemy tani hosting i wsparcie, gwarantuj\u0105c stabilne dzia\u0142anie Twojej strony, bezpiecze\u0144stwo danych oraz szybk\u0105 pomoc techniczn\u0105.",
      icon: "tabler:bulb"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "tagline": "GWARANCJA 100% ALBO ZWROT KOSZT\xD3W", "title": "Na co mo\u017Cesz liczy\u0107?", "items": [
    {
      title: "Rozw\xF3j marki firmy",
      description: "Tworzymy responsywne i nowoczesne strony internetowe, kt\xF3re podkre\u015Blaj\u0105 charakter Twojej marki i wspieraj\u0105 osi\u0105ganie cel\xF3w biznesowych. Nasze projekty s\u0105 dostosowane do indywidualnych potrzeb \u2014 od prostych landing\xF3w po zaawansowane strony firmowe"
    },
    {
      title: "Czas to pieni\u0105dz!",
      description: "Projektujemy strony internetowe w Krakowie i na terenie ca\u0142ej Polski, dbaj\u0105c o ich funkcjonalno\u015B\u0107, atrakcyjny wygl\u0105d i zgodno\u015B\u0107 z najnowszymi trendami. Oferujemy kompleksowe wsparcie - od projektu graficznego po doradztwo techniczne i marketing online."
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Colorful Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Strony internetowe, które pracują na Twój sukces.
</h3>
Stworzymy dla Ciebie nowoczesną, estetyczną i intuicyjną stronę, która nie tylko przyciągnie uwagę klientów, ale także
      skutecznie zaprezentuje Twoją ofertę. Projektujemy strony internetowe w Krakowie i na terenie całej Polski, dbając
      o ich funkcjonalność, atrakcyjny wygląd i zgodność z najnowszymi trendami. Oferujemy kompleksowe wsparcie - od projektu
      graficznego po doradztwo techniczne i marketing online.
` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    {
      title: "High level of customization",
      description: "Zadbamy o ka\u017Cdy etap od analizy Twoich potrzeb po uruchomienie strony. Ty mo\u017Cesz skupi\u0107 si\u0119 na swoim biznesie, a my dopilnujemy, by Twoja strona by\u0142a funkcjonalna, estetyczna i gotowa na czas."
    },
    {
      title: "Wsparcie Twojego Biznesu",
      description: "Wspieramy rozw\xF3j i efektywno\u015B\u0107 dzia\u0142alno\u015Bci."
    },
    {
      title: "Ecommerce",
      description: "Tworzymy profesjonalne sklepy internetowe, kt\xF3re \u0142\u0105cz\u0105 intuicyjny design z zaawansowan\u0105 funkcjonalno\u015Bci\u0105, umo\u017Cliwiaj\u0105c efektywn\u0105 sprzeda\u017C online i budowanie silnej marki."
    },
    {
      title: "Tworzenie stron z sztuczn\u0105 inteligencj\u0105",
      description: "Oferujemy tworzenie stron internetowych z wykorzystaniem sztucznej inteligencji, kt\xF3ra automatyzuje procesy oraz zapewnia personalizacj\u0119 do\u015Bwiadcze\u0144 u\u017Cytkownik\xF3w podnosz\u0105c efektywno\u015B\u0107 dzia\u0142alno\u015Bci online."
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2194&q=80",
    alt: "Blueprint Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Profesjonalna strona internetowa to klucz do sukcesu Twojej firmy.
</h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "Ponad 15 lat do\u015Bwiadczenia w bran\u017Cy",
      description: "Posiadamy ponad 15 lat do\u015Bwiadczenia w tworzeniu stron internetowych i marketingu online, co gwarantuje profesjonalizm i najwy\u017Csz\u0105 jako\u015B\u0107 us\u0142ug."
    },
    {
      title: "Indywidualne podej\u015Bcie do ka\u017Cdego projektu",
      description: "Stosujemy indywidualne podej\u015Bcie do ka\u017Cdego projektu, tworz\u0105c rozwi\u0105zania idealnie dopasowane do unikalnych potrzeb i wizji naszych klient\xF3w."
    },
    {
      title: "Konkurencyjne ceny i wysoka jako\u015B\u0107",
      description: "Oferujemy konkurencyjne ceny przy zachowaniu najwy\u017Cszej jako\u015Bci, gwarantuj\u0105c rozwi\u0105zania, kt\xF3re idealnie \u0142\u0105cz\u0105 przyst\u0119pno\u015B\u0107 cenow\u0105 z niezawodnym dzia\u0142aniem."
    },
    {
      title: "Pe\u0142na obs\u0142uga - od koncepcji po wdro\u017Cenie",
      description: `Zapewniamy pe\u0142n\u0105 obs\u0142ug\u0119 \u2013 od koncepcji po wdro\u017Cenie \u2013 gwarantuj\u0105c kompleksowe wsparcie na ka\u017Cdym etapie realizacji projektu.`
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1611462985358-60d3498e0364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Tworzenie aplikacji Krak\xF3w"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Projektujemy i wdrażamy aplikacje wspomagające Twoje procesy biznesowe
</h3>` })}` })}  ${renderComponent($$result2, "Steps", $$Steps, { "title": "Etapy tworzenia stron www", "items": [
    {
      title: 'Krok 1: <span class="font-medium">Kontakt</span>',
      description: "Wsp\xF3lnie omawiamy wizj\u0119 strony www, co pozwoli nam stworzy\u0107 narz\u0119dzie skutecznie wspieraj\u0105ce rozw\xF3j Twojego biznesu w Krakowie i okolicach. Po ustaleniu wszystkich szczeg\xF3\u0142\xF3w formalizujemy nasze ustalenia, podpisuj\u0105c umow\u0119 na realizacj\u0119 strony internetowej.",
      icon: "tabler:package"
    },
    {
      title: 'Krok 2: <span class="font-medium">Analiza</span>',
      description: "Na podstawie szczeg\xF3\u0142owej analizy podejmujemy decyzje, kt\xF3re s\u0105 precyzyjnie dopasowane do Twoich potrzeb. Budujemy architektur\u0119, funkcjonalno\u015B\u0107 strony internetowej oraz UI witryny, dbaj\u0105c o to, by by\u0142a jak najlepiej dopasowana do Twoich klient\xF3w oraz cel\xF3w biznesowych.",
      icon: "tabler:letter-case"
    },
    {
      title: 'Krok 3: <span class="font-medium">Kodowanie i budowa stron</span>',
      description: "Tworzymy Twoj\u0105 stron\u0119 internetow\u0105, umieszczaj\u0105c j\u0105 na tymczasowej domenie, kt\xF3ra s\u0142u\u017Cy jako \u015Brodowisko testowe. Dzi\u0119ki temu mo\u017Cemy wprowadza\u0107 wszelkie poprawki i dostosowania, minimalizuj\u0105c ryzyko wyst\u0105pienia b\u0142\u0119d\xF3w. Etap programistyczny obejmuje wdro\u017Cenie kluczowych funkcji, kt\xF3re b\u0119d\u0105 wspiera\u0142y rozw\xF3j Twojego biznesu online.",
      icon: "tabler:paint"
    },
    {
      title: "Publikacja!",
      icon: "tabler:check"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    alt: "Steps image"
  } })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Najlepsze rozwi\u0105zania dla Twojego biznesu", "subtitle": "Strony i sklepy internetowe", "tagline": "Indywidualne podej\u015Bcie i jako\u015B\u0107", "items": [
    {
      title: "Ca\u0142y proces 100% online",
      description: "Przystosowali\u015Bmy nasz\u0105 metod\u0119 tworzenia stron internetowych do potrzeb wsp\xF3\u0142czesnego, zdalnego \u015Brodowiska pracy. Od wst\u0119pnych konsultacji, przez projektowanie strony, a\u017C po kompleksowe wsparcie techniczne \u2013 wszystko odbywa si\u0119 online, szybko i wygodnie.",
      icon: "flat-color-icons:template"
    },
    {
      title: "Optymalny UX i UI",
      description: "Tworzymy strony, kt\xF3re zapewniaj\u0105 sp\xF3jne, intuicyjne i atrakcyjne do\u015Bwiadczenie u\u017Cytkownika. Skupiamy si\u0119 na zrozumieniu potrzeb Twoich odbiorc\xF3w, aby z \u0142atwo\u015Bci\u0105 anga\u017Cowali si\u0119 w interakcje z Twoj\u0105 firm\u0105, zwi\u0119kszaj\u0105c tym samym jej efektywno\u015B\u0107 online.",
      icon: "flat-color-icons:gallery"
    },
    {
      title: "Stabilny i bezpieczny system CMS",
      description: "Korzy\u015Bci\u0105 z naszej pracy jest autorski system CMS, kt\xF3ry \u0142\u0105czy \u0142atwo\u015B\u0107 zarz\u0105dzania tre\u015Bci\u0105, znan\u0105 z popularnych rozwi\u0105za\u0144, jak WordPress, z wyj\u0105tkow\u0105 stabilno\u015Bci\u0105 i wy\u017Cszym poziomem bezpiecze\u0144stwa. Dzi\u0119ki temu masz pewno\u015B\u0107, \u017Ce Twoja strona dzia\u0142a niezawodnie i jest chroniona przed zagro\u017Ceniami.",
      icon: "flat-color-icons:approval"
    },
    {
      title: "Optymalizacja SEO",
      description: "Dostosowujemy strony internetowe do zaawansowanego SEO, co znacz\u0105co zwi\u0119ksza ich widoczno\u015B\u0107 w wynikach wyszukiwania. Struktura witryny jest zoptymalizowana i przygotowana do efektywnego wdro\u017Cenia strategii pozycjonowania, zapewniaj\u0105c d\u0142ugofalowe rezultaty.",
      icon: "flat-color-icons:document"
    },
    {
      title: "Strony nastawione na skuteczno\u015B\u0107",
      description: "Nasze podej\u015Bcie koncentruje si\u0119 na osi\u0105ganiu realnych rezultat\xF3w, w tym maksymalizacji konwersji witryny. Tworzymy rozwi\u0105zania, kt\xF3re s\u0105 zoptymalizowane pod k\u0105tem efektywnej sprzeda\u017Cy produkt\xF3w i us\u0142ug, zapewniaj\u0105c najwy\u017Csz\u0105 skuteczno\u015B\u0107.",
      icon: "flat-color-icons:advertising"
    },
    {
      title: "Sta\u0142e wsparcie techniczne",
      description: "Nie zostawiamy Ci\u0119 samego z wyzwaniami, kt\xF3re mog\u0105 pojawi\u0107 si\u0119 w przysz\u0142o\u015Bci. Regularnie monitorujemy funkcjonowanie strony, naprawiamy ewentualne problemy i wprowadzamy niezb\u0119dne aktualizacje, zapewniaj\u0105c jej sprawne dzia\u0142anie na ka\u017Cdym etapie.Behold the dessert menu of the website world. Tempting choices await, can you resist?",
      icon: "flat-color-icons:business-contact"
    }
    // {
    //   title: 'Testimonial',
    //   description: 'Step into the gossip corner! Here, other visitors spill the beans and share the juicy details.',
    //   icon: 'flat-color-icons:voice-presentation',
    // },
    // {
    //   title: 'Contact',
    //   description:
    //     'Like a digital mailbox, but faster! Drop a line, ask a title, or send a virtual high-five. Ding! Message in.',
    //   icon: 'flat-color-icons:business-contact',
    // },
    // {
    //   title: 'Footers',
    //   description: "The footer's like the credits of a movie but sprinkled with easter eggs. Time to hunt!",
    //   icon: 'flat-color-icons:database',
    // },
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "title": "Find out more content in our Blog", "information": `The blog is used to display AstroWind documentation.
                        Each new article will be an important step that you will need to know to be an expert in creating a website using Astro + Tailwind CSS.
                        Astro is a very interesting technology. Thanks.
                ` })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Najcz\u0119sciej zadawane pytania", "subtitle": "W sekcji FAQ znajdziesz odpowiedzi na najcz\u0119\u015Bciej zadawane pytania dotycz\u0105ce naszej oferty, stron internetowych, proces\xF3w realizacji projekt\xF3w oraz wsparcia technicznego, co pozwoli Ci szybko rozwia\u0107 wszelkie w\u0105tpliwo\u015Bci.", "tagline": "Tworzenie Stron Internetowych", "classes": { container: "max-w-6xl" }, "items": [
    {
      title: "Czy tworzymy tylko strony internetowe Krak\xF3w?",
      description: "W dzisiejszym cyfrowym \u015Bwiecie ka\u017Cda firma powinna zadba\u0107 o swoj\u0105 obecno\u015B\u0107 w internecie. Nasza agencja interaktywna oferuje kompleksowe wsparcie \u2013 projektowanie stron internetowych to dopiero pocz\u0105tek. Zapewniamy szeroki wachlarz us\u0142ug, dostosowanych do indywidualnych potrzeb klient\xF3w, pomagaj\u0105c im wyr\xF3\u017Cni\u0107 si\u0119 na tle konkurencji. Tworzenie stron WWW to kluczowy element naszej dzia\u0142alno\u015Bci, jednak dbamy nie tylko o estetyk\u0119, ale tak\u017Ce o funkcjonalno\u015B\u0107 i intuicyjno\u015B\u0107 naszych projekt\xF3w. Dzi\u0119ki temu strony nie tylko przyci\u0105gaj\u0105 uwag\u0119, ale r\xF3wnie\u017C zapewniaj\u0105 wygodn\u0105 nawigacj\u0119 i szybki dost\u0119p do tre\u015Bci. Oferujemy tak\u017Ce projektowanie sklep\xF3w internetowych, identyfikacj\u0119 wizualn\u0105 oraz kompleksowe us\u0142ugi marketingowe, kt\xF3re pomagaj\u0105 w budowaniu widoczno\u015Bci marki w sieci."
    },
    {
      title: "Ile kosztuje strona internetowa?",
      description: "Cena zale\u017Cy od zakresu projektu. Proste strony zaczynaj\u0105 si\u0119 od 1500 z\u0142, natomiast rozbudowane rozwi\u0105zania z CMS i sklepami internetowymi kosztuj\u0105 od 4000 z\u0142 wzwy\u017C."
    },
    {
      title: "Czy mog\u0119 samodzielnie edytowa\u0107 stron\u0119?",
      description: "Tak! Tworzymy strony w systemach CMS takich jak WordPress, Joomla, czy Strapi, dzi\u0119ki czemu mo\u017Cesz \u0142atwo zarz\u0105dza\u0107 tre\u015Bci\u0105."
    },
    {
      title: "Jak d\u0142ugo trwa wykonanie strony?",
      description: "Czas realizacji zale\u017Cy od z\u0142o\u017Cono\u015Bci projektu. Prosta strona mo\u017Ce by\u0107 gotowa w 7-14 dni, natomiast bardziej zaawansowane projekty wymagaj\u0105 4-6 tygodni."
    },
    {
      title: "Czy zajmujecie si\u0119 pozycjonowaniem?",
      description: "Tak, oferujemy kompleksowe us\u0142ugi SEO, w tym optymalizacj\u0119 techniczn\u0105, audyty oraz prowadzenie kampanii link-buildingowych."
    },
    {
      title: "Czy oferujecie wsparcie techniczne?",
      description: "Tak, zapewniamy opiek\u0119 nad stronami, aktualizacje CMS oraz wsparcie w razie problem\xF3w technicznych."
    }
  ] })}  ${renderComponent($$result2, "Stats", $$Stats, { "stats": [
    { title: "Wzrostu konwersji z formularza kontaktowego dzi\u0119ki strategii komunikacji i SEO", amount: "+255%" },
    { title: "Wzrost pozytywnego odbioru marki dzi\u0119ki od\u015Bwie\u017Ceniu logo", amount: "+90%" },
    { title: "Klient\xF3w poleci\u0142o by Fachowe Strony znajomym", amount: "14 na 15" },
    { title: "wzrost zapyta\u0144 z formularza na stronie w pierwszym kwartale", amount: "+205%" }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [
    {
      variant: "primary",
      text: "Sprawd\u017A, co zyskujesz",
      href: "/kontakt",
      target: "_blank"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` Nie trać więcej czasu! Skontaktuj się z nami ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Strony internetowe&nbsp;+&nbsp;<br class="block sm:hidden"><span class="sm:whitespace-nowrap">Kraków</span> ` })}` })} ` })}`;
}, "/workspaces/fachowe-strony/src/pages/index.astro", undefined);

const $$file = "/workspaces/fachowe-strony/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
