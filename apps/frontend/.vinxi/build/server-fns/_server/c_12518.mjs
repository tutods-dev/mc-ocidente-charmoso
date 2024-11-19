import{b as e,c as r}from"./env.mjs";import{c as o}from"./index3.mjs";import"solid-js/web";import"solid-js/web/storage";import"./fetchEvent.mjs";import"h3";import"node:async_hooks";import"solid-js";import"./routing.mjs";import"@sanity/client";const c=`
    *[_type == "testimonial" && project->slug.current == $slug] [0] {
      _id,
      client,
      content,
      "url": coalesce(url, null),
      _createdAt,
      _updatedAt
    }
`,$=e(r(i,"c_12518","$$function0"),"cta-settings");async function i(t){return o.fetch(c,{slug:t})}export{i as $$function0,$ as getProjectTestimonial};
