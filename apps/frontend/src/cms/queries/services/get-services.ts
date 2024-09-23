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

/**
 * Query to retrieve title and slug of available services.
 */
const getAvailableServicesQuery = `
  *[_type == "service" && count(*[_type == 'project' && ^._id in services[]->_id]) > 0] | order(_createdAt desc) {
    title,
    "slug": slug.current
  }
`;

export { getServicesQuery, getAvailableServicesQuery };
