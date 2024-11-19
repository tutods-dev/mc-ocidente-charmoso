import{b as r,c as l}from"./env.mjs";import{c}from"./index3.mjs";const a=`
  count(*[_type == 'project'])
`,g=`
  count(*[_type == 'project' && $serviceSlug in services[]->slug.current])
`,s=`
    *[_type == "project"] | order(_createdAt desc) [$start...$end] {
      _id,
      title,
      "slug": slug.current,
      headline,
      "thumbnail": {
          ...thumbnail,
          "asset": thumbnail.asset->
      },
      "services": coalesce(services[]->{
          _id,
          title,
          'slug': slug.current
      }, []),
    }
`,d=`
  {
    "total": ${a},
    "data": ${s}
  }
`,n=12;function o(t=1,e=n){return{start:(t-1)*e,end:t*e}}const h=r(async t=>{try{let e=0;return t?e=await c.fetch(g,{serviceSlug:t}):e=await c.fetch(a),e}catch{return 0}},"total-projects"),p=r(l(f,"c_10961","$$function0"),"projects"),P=r(async(t=1,e=n)=>{try{const{start:i,end:u}=o(t,e);return c.fetch(d,{start:i,end:u})}catch{return{total:0,data:[]}}},"paginated-projects");async function f(t=1){try{return c.fetch(s,{...o(t)})}catch{return[]}}export{f as $,n as D,p as a,h as b,P as g};
