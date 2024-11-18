/**
 * Query to retrieve related
 * @param `$slug` Project slug to exclude from the search
 * @param `$serviceSlugs` List of service slugs
 * @param `$start` Offset (how many results should skip)
 * @param `$end` Limit (how much results retrieve)
 */
const getRelatedProjectsByServiceQuery = `
    *[_type == "project" && slug.current != $slug && array::intersects(services[]->slug.current, $serviceSlugs)] [$start...$end] | order(_createdAt desc) {
        _id,
        "slug": slug.current,
        "thumbnail": {
            ...thumbnail,
            "asset": thumbnail.asset->
        },
        "services": coalesce(services[]->{
            _id,
            title,
            'slug': slug.current
        }, [])
    }
`;

export { getRelatedProjectsByServiceQuery };
