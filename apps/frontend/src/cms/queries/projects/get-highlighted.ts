/**
 * Query to retrieve all the higlighted projetos.
 * @description The purpose of this query is retrieve all the posts marked as highlighted.
 * @param `$start` Offset (how many results should skip).
 * @param `$end` Limit (how much results retrieve)
 */
const getHighlightedProjectsQuery = `
    *[_type == 'project' && isHighlighted == true] [$start...$end] | order(_createdAt desc) {
        title,
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

/**
 * Query to retrieve highlighted projetos from a certain service, excluding a slug.
 * @description The purpose of this query is to be used on the project details page, showing possible related projetos.
 * @param `$serviceSlug` Service slug
 * @param `$start` Offset (how many results should skip).
 * @param `$end` Limit (how much results retrieve)
 */
const getHightlightedProjectsFromServiceQuery = `
    *[_type == 'project' && isHighlighted == true && $serviceSlug in services[]->slug.current] [$start...$end] | order(_createdAt desc) {
        title,
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

export { getHighlightedProjectsQuery, getHightlightedProjectsFromServiceQuery };
