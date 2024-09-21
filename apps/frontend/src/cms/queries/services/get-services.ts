/**
 * Query to retrieve available services.
 */
const getServicesQuery = `
  *[_type == "service"] | order(_createdAt desc) {
    title,
    description,
    "slug": slug.current,
    "thumbnail": select(defined(thumbnail) => {
        ...thumbnail,
        "asset": thumbnail.asset->
      })
  }
`;

export { getServicesQuery };
