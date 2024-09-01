/**
 * Query to retrieve the total of projects.
 */
const getTotalOfProjectsQuery = `
  count(*[_type == 'project'])
`;

/**
 * Query to retrieve the total of projects from a specific service.
 * @param `$serviceSlug` Service slug
 */
const getTotalOfProjectsFromServiceQuery = `
  count(*[_type == 'project' && $serviceSlug in services[]->slug.current])
`;

/**
 * Query to retrieve a list of projects.
 * @param `$start` Offset (how many results should skip).
 * @param `$end` Limit (how much results retrieve)
 */
const getProjectsQuery = `
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
`;

export {
  getProjectsQuery,
  getTotalOfProjectsQuery,
  getTotalOfProjectsFromServiceQuery,
};
