/**
 * Query to retrieve the total of services.
 */
const getTotalOfServicesQuery = `
  count(*[_type == 'service'])
`;

/**
 * Query to retrieve a list of services.
 * @param `$start` Offset (how many results should skip).
 * @param `$end` Limit (how much results retrieve)
 */
const getServicesQuery = `
    *[_type == "service"] | order(_createdAt asc) [$start...$end] {
      _id,
      title,
      "slug": slug.current,
      headline,
      "thumbnail": {
          ...thumbnail,
          "asset": thumbnail.asset->
      },
    }
`;

/**
 * Query to retrieve paginated services, with the number of services available.
 * @param `$start` Offset (how many results should skip)
 * @param `$end` Limit
 */
const getPaginatedServicesQuery = `
  {
    "total": ${getTotalOfServicesQuery},
    "data": ${getServicesQuery}
  }
`;

export { getServicesQuery, getPaginatedServicesQuery, getTotalOfServicesQuery };
