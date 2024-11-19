import{b as s,c as i}from"./env.mjs";import{c as o}from"./index3.mjs";import"solid-js/web";import"solid-js/web/storage";import"./fetchEvent.mjs";import"h3";import"node:async_hooks";import"solid-js";import"./routing.mjs";import"@sanity/client";const n=`
    *[_type == "project" && slug.current != $slug && array::intersects(services[]->slug.current, $serviceSlugs)] [$start...$end] | order(_createdAt desc) {
        _id,
        "slug": slug.current,
        "thumbnail": {
            ...thumbnail,
            "asset": thumbnail.asset->
        },
        "services": coalesce(services[]->{
            _id,
            title,
            'slug': slug.current
        }, [])
    }
`,h=s(i(u,"c_12805","$$function0"),"related-projects");async function u(e,t,r=0,c=6){try{return o.fetch(n,{slug:e,serviceSlugs:t,start:r,end:c})}catch{return[]}}export{u as $$function0,h as getRelatedProjectsByService};
