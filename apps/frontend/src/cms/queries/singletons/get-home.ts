/**
 * Query to retrieve the data for the home page.
 */
const getHomeQuery = `
  *[_type == "home"] [0] {
    "services": select(defined(services) => {
        ...services,
        "data": *[_type == "service" && isHighlighted == true] | order(_createdAt desc) [0...6] {
            title,
            headline,
            "slug": slug.current,
            "thumbnail": {
                ...thumbnail,
                "asset": thumbnail.asset->
            },
        }
    }),
    "testimonials": select(defined(testimonials) => {
        ...testimonials,
        "data": *[_type == "testimonial"] | order(_createdAt asc) [0...6] {
            _id,
            client,
            content,
            "url": coalesce(url, null),
            _createdAt,
            _updatedAt
        }
    }),
    "aboutUs": *[_type == "about-us"][0].aboutUs
  }
`;

export { getHomeQuery };
