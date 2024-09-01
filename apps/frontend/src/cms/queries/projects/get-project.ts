import groq from 'groq';

/**
 * Query to treive a specific project by slug.
 * @param `$slug` Project slug
 */
const getProjectQuery = groq`
    *[_type == "project" && slug.current == $slug] [0] {
      ...,
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
      "gallery": coalesce(gallery[]{
        ...,
        "asset": asset->
      }, null)
    }
`;

export { getProjectQuery };
