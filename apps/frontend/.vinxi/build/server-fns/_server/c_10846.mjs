import{b as n,c as a}from"./env.mjs";import{c as i}from"./index3.mjs";import"solid-js/web";import"solid-js/web/storage";import"./fetchEvent.mjs";import"h3";import"node:async_hooks";import"solid-js";import"./routing.mjs";import"@sanity/client";function c(r,e=302){let t,s;typeof e=="number"?t={status:e}:({revalidate:s,...t}=e,typeof t.status>"u"&&(t.status=302));const o=new Headers(t.headers);return o.set("Location",r),s&&o.set("X-Revalidate",s.toString()),new Response(null,{...t,headers:o})}const l=`
    *[_type == "project" && slug.current == $slug] [0] {
      ...,
      "slug": slug.current,
      "thumbnail": {
          ...thumbnail,
          "asset": thumbnail.asset->
      },
      "services": coalesce(services[]->{
          _id,
          title,
          'slug': slug.current
      }, []),
      "gallery": coalesce(gallery[]{
        ...,
        "asset": asset->
      }, null)
    }
`,$=n(a(u,"c_10846","$$function0"),"project");async function u(r){try{const e=await i.fetch(l,{slug:r});if(!e)throw c("/projetos");return e}catch{throw c("/projetos")}}export{u as $$function0,$ as getProject};
