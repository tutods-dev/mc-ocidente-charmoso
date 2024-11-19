import{b as e,c as r}from"./env.mjs";import{c}from"./index3.mjs";import"solid-js/web";import"solid-js/web/storage";import"./fetchEvent.mjs";import"h3";import"node:async_hooks";import"solid-js";import"./routing.mjs";import"@sanity/client";const t=`
    *[_type == "archives"] [0].projects
`,i=`
    *[_type == "archives"] [0].services
`,g=e(r(o,"c_11160","$$function0"),"projects-archive"),j=e(r(n,"c_11160","$$function1"),"services-archive");async function o(){try{return c.fetch(t)}catch{return}}async function n(){try{return c.fetch(i)}catch{return}}export{o as $$function0,n as $$function1,g as getProjectsArchive,j as getServicesArchive};
