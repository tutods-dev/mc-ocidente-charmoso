/**
 * Query to treive a specific project by slug.
 * @param `$slug` Project slug
 */
const getServiceQuery = `
  *[_type == "service" && slug.current == $slug] [0] {
    ...,
    "description": pt::text(content),
    "slug": slug.current,
    "thumbnail": {
        ...thumbnail,
        "asset": thumbnail.asset->
    },
    "gallery": coalesce(gallery[]{
      ...,
      "asset": asset->
    }, null)
  }
`;

export { getServiceQuery };
