import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_l27wifRy.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
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
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
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
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/static","routes":[{"file":"file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/blog/post-1/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-1","isIndex":false,"type":"page","pattern":"^\\/blog\\/post-1\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-1.md","pathname":"/blog/post-1","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/blog/post-2/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-2","isIndex":false,"type":"page","pattern":"^\\/blog\\/post-2\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-2.md","pathname":"/blog/post-2","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/blog/post-3/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-3","isIndex":false,"type":"page","pattern":"^\\/blog\\/post-3\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-3.md","pathname":"/blog/post-3","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/blog/post-4/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-4","isIndex":false,"type":"page","pattern":"^\\/blog\\/post-4\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-4.md","pathname":"/blog/post-4","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/blog/post-5/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-5","isIndex":false,"type":"page","pattern":"^\\/blog\\/post-5\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-5","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-5.md","pathname":"/blog/post-5","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/blog/post-6/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-6","isIndex":false,"type":"page","pattern":"^\\/blog\\/post-6\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-6","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-6.md","pathname":"/blog/post-6","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://astro-blog-cip.netlify.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Astro/astro-blog-tutorial/src/pages/blog/post-1.md",{"propagation":"none","containsHead":true}],["D:/Astro/astro-blog-tutorial/src/pages/rss.xml.js",{"propagation":"none","containsHead":true}],["D:/Astro/astro-blog-tutorial/src/pages/blog/[...page].astro",{"propagation":"none","containsHead":true}],["D:/Astro/astro-blog-tutorial/src/pages/author/[...author].astro",{"propagation":"none","containsHead":true}],["D:/Astro/astro-blog-tutorial/src/pages/category/[category].astro",{"propagation":"none","containsHead":true}],["D:/Astro/astro-blog-tutorial/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/Astro/astro-blog-tutorial/src/pages/blog/post-2.md",{"propagation":"none","containsHead":true}],["D:/Astro/astro-blog-tutorial/src/pages/blog/post-3.md",{"propagation":"none","containsHead":true}],["D:/Astro/astro-blog-tutorial/src/pages/blog/post-4.md",{"propagation":"none","containsHead":true}],["D:/Astro/astro-blog-tutorial/src/pages/blog/post-5.md",{"propagation":"none","containsHead":true}],["D:/Astro/astro-blog-tutorial/src/pages/blog/post-6.md",{"propagation":"none","containsHead":true}],["D:/Astro/astro-blog-tutorial/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/Astro/astro-blog-tutorial/src/pages/about.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/author/[...author]@_@astro":"pages/author/_---author_.astro.mjs","\u0000@astro-page:src/pages/blog/post-1@_@md":"pages/blog/post-1.astro.mjs","\u0000@astro-page:src/pages/blog/post-2@_@md":"pages/blog/post-2.astro.mjs","\u0000@astro-page:src/pages/blog/post-3@_@md":"pages/blog/post-3.astro.mjs","\u0000@astro-page:src/pages/blog/post-4@_@md":"pages/blog/post-4.astro.mjs","\u0000@astro-page:src/pages/blog/post-5@_@md":"pages/blog/post-5.astro.mjs","\u0000@astro-page:src/pages/blog/post-6@_@md":"pages/blog/post-6.astro.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"pages/blog/_---page_.astro.mjs","\u0000@astro-page:src/pages/category/[category]@_@astro":"pages/category/_category_.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DpStksHD.mjs","D:/Astro/astro-blog-tutorial/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/src/pages/404.astro":"chunks/404_BFOPzYkD.mjs","/src/pages/about.astro":"chunks/about_JtDTvkJB.mjs","/src/pages/author/[...author].astro":"chunks/_...author__DLaAo63t.mjs","/src/pages/blog/[...page].astro":"chunks/_...page__TPHRsJqn.mjs","/src/pages/category/[category].astro":"chunks/_category__D-vTB5Lc.mjs","/src/pages/rss.xml.js":"chunks/rss.xml_BMpSpsQp.mjs","/src/pages/index.astro":"chunks/index_Bio5zbQw.mjs","D:/Astro/astro-blog-tutorial/node_modules/@astrojs/image/dist/loaders/sharp.js":"chunks/sharp_CTRqsncb.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DCSBIVGz.js","@astrojs/react/client.js":"_astro/client.Df8ih4qs.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/404.html","/file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/about/index.html","/file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/blog/post-1/index.html","/file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/blog/post-2/index.html","/file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/blog/post-3/index.html","/file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/blog/post-4/index.html","/file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/blog/post-5/index.html","/file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/blog/post-6/index.html","/file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/rss.xml","/file:///D:/Astro/astro-blog-tutorial/.vercel/output/static/index.html"],"buildFormat":"directory","checkOrigin":false});

export { manifest };
