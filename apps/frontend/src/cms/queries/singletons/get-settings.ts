/**
 * Query to retrieve all settings.
 * @description This query is focused on retrieve all the existing settings on the dataset.
 */
const getAllSettingsQuery = `
    *[_type == "settings"] [0] {
        ...,
        "thumbnail": {
            ...thumbnail,
            "asset": thumbnail.asset->
        },
        "contacts": coalesce(contacts, []),
        "social": coalesce(social, [])
    }
`;

/**
 * Query to retrieve settings used for SEO purposes.
 */
const getSeoSettingsQuery = `
    *[_type == "settings"] [0] {
        title,
        description,
        "thumbnail": {
            ...thumbnail,
            "asset": thumbnail.asset->
        },
    }
`;

/**
 * Query to retrieve CTA settings only.
 */
const getCtaSettingsQuery = `
    *[_type == "settings"] [0] {
        ...cta,
        "points": cta.points
    }
`;

export { getAllSettingsQuery, getSeoSettingsQuery, getCtaSettingsQuery };
