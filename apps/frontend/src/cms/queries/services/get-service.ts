/**
 * Query to treive a specific service by slug.
 * @param `$slug` Service slug
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
