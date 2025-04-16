import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_DoRQTvF3.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///workspaces/fachowe-strony/","adapterName":"","routes":[{"file":"file:///workspaces/fachowe-strony/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/cennik/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cennik","isIndex":false,"type":"page","pattern":"^\\/cennik$","segments":[[{"content":"cennik","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cennik.astro","pathname":"/cennik","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/kontakt/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/kontakt","isIndex":false,"type":"page","pattern":"^\\/kontakt$","segments":[[{"content":"kontakt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/kontakt.astro","pathname":"/kontakt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/marketing/pisanie-tekstow/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/marketing/pisanie-tekstow","isIndex":false,"type":"page","pattern":"^\\/marketing\\/pisanie-tekstow$","segments":[[{"content":"marketing","dynamic":false,"spread":false}],[{"content":"pisanie-tekstow","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/marketing/pisanie-tekstow.astro","pathname":"/marketing/pisanie-tekstow","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/marketing/pozycjonowanie-seo-krakow/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/marketing/pozycjonowanie-seo-krakow","isIndex":false,"type":"page","pattern":"^\\/marketing\\/pozycjonowanie-seo-krakow$","segments":[[{"content":"marketing","dynamic":false,"spread":false}],[{"content":"pozycjonowanie-seo-krakow","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/marketing/pozycjonowanie-seo-krakow.astro","pathname":"/marketing/pozycjonowanie-seo-krakow","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/marketing/projekty-graficzne/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/marketing/projekty-graficzne","isIndex":false,"type":"page","pattern":"^\\/marketing\\/projekty-graficzne$","segments":[[{"content":"marketing","dynamic":false,"spread":false}],[{"content":"projekty-graficzne","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/marketing/projekty-graficzne.astro","pathname":"/marketing/projekty-graficzne","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/marketing/startup/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/marketing/startup","isIndex":false,"type":"page","pattern":"^\\/marketing\\/startup$","segments":[[{"content":"marketing","dynamic":false,"spread":false}],[{"content":"startup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/marketing/startup.astro","pathname":"/marketing/startup","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/o-nas/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/o-nas","isIndex":false,"type":"page","pattern":"^\\/o-nas$","segments":[[{"content":"o-nas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/o-nas.astro","pathname":"/o-nas","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/oferta/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/oferta","isIndex":false,"type":"page","pattern":"^\\/oferta$","segments":[[{"content":"oferta","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/oferta.astro","pathname":"/oferta","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/privacy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.md","pathname":"/privacy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/realizacje/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/realizacje","isIndex":false,"type":"page","pattern":"^\\/realizacje$","segments":[[{"content":"realizacje","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/realizacje.astro","pathname":"/realizacje","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/sklepy-internetowe/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sklepy-internetowe","isIndex":false,"type":"page","pattern":"^\\/sklepy-internetowe$","segments":[[{"content":"sklepy-internetowe","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sklepy-internetowe.astro","pathname":"/sklepy-internetowe","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/strony-internetowe/administracja-stron/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/strony-internetowe/administracja-stron","isIndex":false,"type":"page","pattern":"^\\/strony-internetowe\\/administracja-stron$","segments":[[{"content":"strony-internetowe","dynamic":false,"spread":false}],[{"content":"administracja-stron","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/strony-internetowe/administracja-stron.astro","pathname":"/strony-internetowe/administracja-stron","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/strony-internetowe/lead-generation/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/strony-internetowe/lead-generation","isIndex":false,"type":"page","pattern":"^\\/strony-internetowe\\/lead-generation$","segments":[[{"content":"strony-internetowe","dynamic":false,"spread":false}],[{"content":"lead-generation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/strony-internetowe/lead-generation.astro","pathname":"/strony-internetowe/lead-generation","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/strony-internetowe/pre-launch/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/strony-internetowe/pre-launch","isIndex":false,"type":"page","pattern":"^\\/strony-internetowe\\/pre-launch$","segments":[[{"content":"strony-internetowe","dynamic":false,"spread":false}],[{"content":"pre-launch","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/strony-internetowe/pre-launch.astro","pathname":"/strony-internetowe/pre-launch","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/strony-internetowe/proste-strony-internetowe/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/strony-internetowe/proste-strony-internetowe","isIndex":false,"type":"page","pattern":"^\\/strony-internetowe\\/proste-strony-internetowe$","segments":[[{"content":"strony-internetowe","dynamic":false,"spread":false}],[{"content":"proste-strony-internetowe","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/strony-internetowe/proste-strony-internetowe.astro","pathname":"/strony-internetowe/proste-strony-internetowe","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/strony-internetowe/strony-internetowe-z-cms/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/strony-internetowe/strony-internetowe-z-cms","isIndex":false,"type":"page","pattern":"^\\/strony-internetowe\\/strony-internetowe-z-cms$","segments":[[{"content":"strony-internetowe","dynamic":false,"spread":false}],[{"content":"strony-internetowe-z-cms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/strony-internetowe/strony-internetowe-z-cms.astro","pathname":"/strony-internetowe/strony-internetowe-z-cms","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/strony-internetowe/strony-responsywne/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/strony-internetowe/strony-responsywne","isIndex":false,"type":"page","pattern":"^\\/strony-internetowe\\/strony-responsywne$","segments":[[{"content":"strony-internetowe","dynamic":false,"spread":false}],[{"content":"strony-responsywne","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/strony-internetowe/strony-responsywne.astro","pathname":"/strony-internetowe/strony-responsywne","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/strony-internetowe/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/strony-internetowe","isIndex":false,"type":"page","pattern":"^\\/strony-internetowe$","segments":[[{"content":"strony-internetowe","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/strony-internetowe.astro","pathname":"/strony-internetowe","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/strony-internetowe-krakow/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/strony-internetowe-krakow","isIndex":false,"type":"page","pattern":"^\\/strony-internetowe-krakow$","segments":[[{"content":"strony-internetowe-krakow","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/strony-internetowe-krakow.astro","pathname":"/strony-internetowe-krakow","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/terms/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.md","pathname":"/terms","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///workspaces/fachowe-strony/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}}],"site":"https://fachowe-strony.pl","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/workspaces/fachowe-strony/src/utils/blog.ts",{"propagation":"in-tree","containsHead":false}],["/workspaces/fachowe-strony/src/components/blog/RelatedPosts.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/fachowe-strony/src/pages/[...blog]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/fachowe-strony/src/components/widgets/BlogHighlightedPosts.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/fachowe-strony/src/components/widgets/BlogLatestPosts.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/fachowe-strony/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/fachowe-strony/src/pages/[...blog]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/fachowe-strony/src/pages/[...blog]/[category]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/[category]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/fachowe-strony/src/pages/[...blog]/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/fachowe-strony/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["/workspaces/fachowe-strony/src/pages/strony-internetowe/lead-generation.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/strony-internetowe/pre-launch.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/privacy.md",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/terms.md",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/cennik.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/kontakt.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/marketing/pisanie-tekstow.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/marketing/pozycjonowanie-seo-krakow.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/marketing/projekty-graficzne.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/marketing/startup.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/o-nas.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/oferta.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/realizacje.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/sklepy-internetowe.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/strony-internetowe-krakow.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/strony-internetowe.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/strony-internetowe/administracja-stron.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/strony-internetowe/proste-strony-internetowe.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/strony-internetowe/strony-internetowe-z-cms.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/strony-internetowe/strony-responsywne.astro",{"propagation":"none","containsHead":true}],["/workspaces/fachowe-strony/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/cennik@_@astro":"pages/cennik.astro.mjs","\u0000@astro-page:src/pages/kontakt@_@astro":"pages/kontakt.astro.mjs","\u0000@astro-page:src/pages/marketing/pisanie-tekstow@_@astro":"pages/marketing/pisanie-tekstow.astro.mjs","\u0000@astro-page:src/pages/marketing/pozycjonowanie-seo-krakow@_@astro":"pages/marketing/pozycjonowanie-seo-krakow.astro.mjs","\u0000@astro-page:src/pages/marketing/projekty-graficzne@_@astro":"pages/marketing/projekty-graficzne.astro.mjs","\u0000@astro-page:src/pages/marketing/startup@_@astro":"pages/marketing/startup.astro.mjs","\u0000@astro-page:src/pages/o-nas@_@astro":"pages/o-nas.astro.mjs","\u0000@astro-page:src/pages/oferta@_@astro":"pages/oferta.astro.mjs","\u0000@astro-page:src/pages/privacy@_@md":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/realizacje@_@astro":"pages/realizacje.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/sklepy-internetowe@_@astro":"pages/sklepy-internetowe.astro.mjs","\u0000@astro-page:src/pages/strony-internetowe/administracja-stron@_@astro":"pages/strony-internetowe/administracja-stron.astro.mjs","\u0000@astro-page:src/pages/strony-internetowe/lead-generation@_@astro":"pages/strony-internetowe/lead-generation.astro.mjs","\u0000@astro-page:src/pages/strony-internetowe/pre-launch@_@astro":"pages/strony-internetowe/pre-launch.astro.mjs","\u0000@astro-page:src/pages/strony-internetowe/proste-strony-internetowe@_@astro":"pages/strony-internetowe/proste-strony-internetowe.astro.mjs","\u0000@astro-page:src/pages/strony-internetowe/strony-internetowe-z-cms@_@astro":"pages/strony-internetowe/strony-internetowe-z-cms.astro.mjs","\u0000@astro-page:src/pages/strony-internetowe/strony-responsywne@_@astro":"pages/strony-internetowe/strony-responsywne.astro.mjs","\u0000@astro-page:src/pages/strony-internetowe@_@astro":"pages/strony-internetowe.astro.mjs","\u0000@astro-page:src/pages/strony-internetowe-krakow@_@astro":"pages/strony-internetowe-krakow.astro.mjs","\u0000@astro-page:src/pages/terms@_@md":"pages/terms.astro.mjs","\u0000@astro-page:src/pages/[...blog]/[category]/[...page]@_@astro":"pages/_---blog_/_category_/_---page_.astro.mjs","\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro":"pages/_---blog_/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro":"pages/_---blog_/_---page_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/[...blog]/index@_@astro":"pages/_---blog_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_D025sA1a.mjs","/workspaces/fachowe-strony/src/assets/images/app-store.png":"chunks/app-store_CMGigae_.mjs","/workspaces/fachowe-strony/src/assets/images/default.png":"chunks/default_Chv7Jc_h.mjs","/workspaces/fachowe-strony/src/assets/images/development-web-design-4536630.png":"chunks/development-web-design-4536630_DjeTjNWv.mjs","/workspaces/fachowe-strony/src/assets/images/download.jpg":"chunks/download_BEgfGkaF.mjs","/workspaces/fachowe-strony/src/assets/images/google-play.png":"chunks/google-play_CQ1I_dpe.mjs","/workspaces/fachowe-strony/src/assets/images/hero-image.png":"chunks/hero-image_CA54MjO0.mjs","/workspaces/fachowe-strony/src/assets/images/images.jpg":"chunks/images_DMOdC8m4.mjs","/workspaces/fachowe-strony/src/assets/images/professional-web-design-social-ink-professional-web-design-png-1000_813.png":"chunks/professional-web-design-social-ink-professional-web-design-png-1000_813_BO0XfBti.mjs","/workspaces/fachowe-strony/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CiVIdXrA.mjs","/workspaces/fachowe-strony/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/workspaces/fachowe-strony/.astro/content-modules.mjs":"chunks/content-modules_BL-JgJbX.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DQI4nQ6a.mjs","/workspaces/fachowe-strony/src/data/post/jak-stworzyc-skuteczne-strony-internetowe.mdx?astroPropagatedAssets":"chunks/jak-stworzyc-skuteczne-strony-internetowe_3a1ysnum.mjs","/workspaces/fachowe-strony/src/data/post/markdown-elements-demo-post.mdx?astroPropagatedAssets":"chunks/markdown-elements-demo-post_CzkQNYmH.mjs","/workspaces/fachowe-strony/src/data/post/jak-stworzyc-skuteczne-strony-internetowe.mdx":"chunks/jak-stworzyc-skuteczne-strony-internetowe_Bp7F4qh8.mjs","/workspaces/fachowe-strony/src/data/post/markdown-elements-demo-post.mdx":"chunks/markdown-elements-demo-post_DgHGG24Q.mjs","/workspaces/fachowe-strony/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","/workspaces/fachowe-strony/node_modules/@astro-community/astro-embed-youtube/YouTube.astro?astro&type=script&index=0&lang.ts":"_astro/YouTube.astro_astro_type_script_index_0_lang.Dkyb9mLy.js","/workspaces/fachowe-strony/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro?astro&type=script&index=0&lang.ts":"_astro/Vimeo.astro_astro_type_script_index_0_lang.CgRsrQuG.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/workspaces/fachowe-strony/node_modules/@astro-community/astro-embed-youtube/YouTube.astro?astro&type=script&index=0&lang.ts","class i extends HTMLElement{connectedCallback(){this.videoId=this.getAttribute(\"videoid\");let e=this.querySelector(\".lty-playbtn\");if(this.playLabel=e&&e.textContent.trim()||this.getAttribute(\"playlabel\")||\"Play\",this.dataset.title=this.getAttribute(\"title\")||\"\",this.style.backgroundImage||(this.style.backgroundImage=`url(\"https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg\")`,this.upgradePosterImage()),e||(e=document.createElement(\"button\"),e.type=\"button\",e.classList.add(\"lty-playbtn\"),this.append(e)),!e.textContent){const t=document.createElement(\"span\");t.className=\"lyt-visually-hidden\",t.textContent=this.playLabel,e.append(t)}this.addNoscriptIframe(),e.nodeName===\"A\"&&(e.removeAttribute(\"href\"),e.setAttribute(\"tabindex\",\"0\"),e.setAttribute(\"role\",\"button\"),e.addEventListener(\"keydown\",t=>{(t.key===\"Enter\"||t.key===\" \")&&(t.preventDefault(),this.activate())})),this.addEventListener(\"pointerover\",i.warmConnections,{once:!0}),this.addEventListener(\"focusin\",i.warmConnections,{once:!0}),this.addEventListener(\"click\",this.activate),this.needsYTApi=this.hasAttribute(\"js-api\")||navigator.vendor.includes(\"Apple\")||navigator.userAgent.includes(\"Mobi\")}static addPrefetch(e,t,a){const r=document.createElement(\"link\");r.rel=e,r.href=t,a&&(r.as=a),document.head.append(r)}static warmConnections(){i.preconnected||(i.addPrefetch(\"preconnect\",\"https://www.youtube-nocookie.com\"),i.addPrefetch(\"preconnect\",\"https://www.google.com\"),i.addPrefetch(\"preconnect\",\"https://googleads.g.doubleclick.net\"),i.addPrefetch(\"preconnect\",\"https://static.doubleclick.net\"),i.preconnected=!0)}fetchYTPlayerApi(){window.YT||window.YT&&window.YT.Player||(this.ytApiPromise=new Promise((e,t)=>{var a=document.createElement(\"script\");a.src=\"https://www.youtube.com/iframe_api\",a.async=!0,a.onload=r=>{YT.ready(e)},a.onerror=t,this.append(a)}))}async getYTPlayer(){return this.playerPromise||await this.activate(),this.playerPromise}async addYTPlayerIframe(){this.fetchYTPlayerApi(),await this.ytApiPromise;const e=document.createElement(\"div\");this.append(e);const t=Object.fromEntries(this.getParams().entries());this.playerPromise=new Promise(a=>{let r=new YT.Player(e,{width:\"100%\",videoId:this.videoId,playerVars:t,events:{onReady:n=>{n.target.playVideo(),a(r)}}})})}addNoscriptIframe(){const e=this.createBasicIframe(),t=document.createElement(\"noscript\");t.innerHTML=e.outerHTML,this.append(t)}getParams(){const e=new URLSearchParams(this.getAttribute(\"params\")||[]);return e.append(\"autoplay\",\"1\"),e.append(\"playsinline\",\"1\"),e}async activate(){if(this.classList.contains(\"lyt-activated\"))return;if(this.classList.add(\"lyt-activated\"),this.needsYTApi)return this.addYTPlayerIframe(this.getParams());const e=this.createBasicIframe();this.append(e),e.focus()}createBasicIframe(){const e=document.createElement(\"iframe\");return e.width=560,e.height=315,e.title=this.playLabel,e.allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\",e.allowFullscreen=!0,e.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${this.getParams().toString()}`,e}upgradePosterImage(){setTimeout(()=>{const e=`https://i.ytimg.com/vi_webp/${this.videoId}/sddefault.webp`,t=new Image;t.fetchPriority=\"low\",t.referrerpolicy=\"origin\",t.src=e,t.onload=a=>{a.target.naturalHeight==90&&a.target.naturalWidth==120||(this.style.backgroundImage=`url(\"${e}\")`)}},100)}}customElements.define(\"lite-youtube\",i);"],["/workspaces/fachowe-strony/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro?astro&type=script&index=0&lang.ts","class t extends HTMLElement{constructor(){super(...arguments),this.videoId=encodeURIComponent(this.dataset.id)}static{this.preconnected=!1}connectedCallback(){this.addEventListener(\"pointerover\",t.warmConnections,{once:!0}),this.addEventListener(\"click\",e=>this.addIframe(e));const c=this.querySelector(\"a\");if(c){const e=document.createElement(\"button\");e.classList.add(...c.classList.values()),e.setAttribute(\"aria-label\",c.getAttribute(\"aria-label\")),c.replaceWith(e)}}static addPrefetch(c,e){const a=document.createElement(\"link\");a.rel=c,a.href=e,document.head.append(a)}static warmConnections(){t.preconnected||(t.addPrefetch(\"preconnect\",\"https://player.vimeo.com\"),t.addPrefetch(\"preconnect\",\"https://i.vimeocdn.com\"),t.addPrefetch(\"preconnect\",\"https://f.vimeocdn.com\"),t.addPrefetch(\"preconnect\",\"https://fresnel.vimeocdn.com\"),t.preconnected=!0)}addIframe(c){if(this.classList.contains(\"ltv-activated\"))return;c.preventDefault(),this.classList.add(\"ltv-activated\");const e=encodeURIComponent(this.dataset.t||\"0m\"),a=new URLSearchParams(this.dataset.params||[]),n=document.createElement(\"iframe\");n.width=\"640\",n.height=\"360\",n.allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\",n.allowFullscreen=!0,n.src=`https://player.vimeo.com/video/${this.videoId}?${a.toString()}#t=${e}`,this.append(n)}}customElements.get(\"lite-vimeo\")||customElements.define(\"lite-vimeo\",t);"]],"assets":["/file:///workspaces/fachowe-strony/dist/404.html","/file:///workspaces/fachowe-strony/dist/cennik/index.html","/file:///workspaces/fachowe-strony/dist/kontakt/index.html","/file:///workspaces/fachowe-strony/dist/marketing/pisanie-tekstow/index.html","/file:///workspaces/fachowe-strony/dist/marketing/pozycjonowanie-seo-krakow/index.html","/file:///workspaces/fachowe-strony/dist/marketing/projekty-graficzne/index.html","/file:///workspaces/fachowe-strony/dist/marketing/startup/index.html","/file:///workspaces/fachowe-strony/dist/o-nas/index.html","/file:///workspaces/fachowe-strony/dist/oferta/index.html","/file:///workspaces/fachowe-strony/dist/privacy/index.html","/file:///workspaces/fachowe-strony/dist/realizacje/index.html","/file:///workspaces/fachowe-strony/dist/rss.xml","/file:///workspaces/fachowe-strony/dist/sklepy-internetowe/index.html","/file:///workspaces/fachowe-strony/dist/strony-internetowe/administracja-stron/index.html","/file:///workspaces/fachowe-strony/dist/strony-internetowe/lead-generation/index.html","/file:///workspaces/fachowe-strony/dist/strony-internetowe/pre-launch/index.html","/file:///workspaces/fachowe-strony/dist/strony-internetowe/proste-strony-internetowe/index.html","/file:///workspaces/fachowe-strony/dist/strony-internetowe/strony-internetowe-z-cms/index.html","/file:///workspaces/fachowe-strony/dist/strony-internetowe/strony-responsywne/index.html","/file:///workspaces/fachowe-strony/dist/strony-internetowe/index.html","/file:///workspaces/fachowe-strony/dist/strony-internetowe-krakow/index.html","/file:///workspaces/fachowe-strony/dist/terms/index.html","/file:///workspaces/fachowe-strony/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"++Pz5MX9lw7gYuFiAPwka9epZWxnRrGDqg860NmuE14="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
