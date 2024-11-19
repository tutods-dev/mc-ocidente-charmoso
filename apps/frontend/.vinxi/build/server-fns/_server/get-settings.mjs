const t=`
    *[_type == "settings"] [0] {
        ...cta,
        "points": cta.points
    }
`,s=`
  *[_type == "settings"] [0] {
    "contacts": coalesce(contacts, []),
    "social": coalesce(social, [])
  }
`;export{t as a,s as g};
