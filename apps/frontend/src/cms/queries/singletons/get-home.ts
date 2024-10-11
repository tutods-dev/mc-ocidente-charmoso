/**
 * Query to retrieve the data for the home page.
 */
const getHomeQuery = `
  *[_type == "home"] [0] {
    "projects": select(defined(projects) => {
        ...projects,
        "data": *[_type == "project" && isHighlighted == true] | order(_createdAt desc) [0...6] {
            title,
            headline,
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
        }
    }),
    "aboutUs": *[_type == "about-us"][0].aboutUs
  }
`;

export { getHomeQuery };
