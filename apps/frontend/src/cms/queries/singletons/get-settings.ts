import groq from 'groq';

/**
 * Query to retrieve all settings.
 * @description This query is focused on retrive all the existing settings on the dataset.
 */
const getAllSettingsQuery = groq`
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
const getSeoSettingsQuery = groq`
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
 * Query to retrive CTA settings only.
 */
const getCtaSettingsQuery = groq`
    *[_type == "settings"] [0] {
        ...cta,
        "points": cta.points
    }
`;

export { getAllSettingsQuery, getSeoSettingsQuery, getCtaSettingsQuery };
