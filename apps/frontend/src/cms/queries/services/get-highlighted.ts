/**
 * Query to retrieve all the higlighted servicos.
 * @description The purpose of this query is retrieve all the posts marked as highlighted.
 * @param `$start` Offset (how many results should skip).
 * @param `$end` Limit (how much results retrieve)
 */
const getHighlightedServicesQuery = `
    *[_type == 'service' && isHighlighted == true] [$start...$end] | order(_createdAt desc) {
        title,
        "slug": slug.current,
        "thumbnail": {
            ...thumbnail,
            "asset": thumbnail.asset->
        },
    }
`;

export { getHighlightedServicesQuery };
