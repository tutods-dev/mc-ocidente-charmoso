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
        "title": coalesce(title, "MC Ocidente Charmoso"),
        description,
        "keywords": coalesce(keywords, ['design de interiores', 'móveis', 'cozinhas', 'quartos']),
        "thumbnail": select(defined(thumbnail) => {
            ...thumbnail,
            "asset": thumbnail.asset->
        }),
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

/**
 * Query to retrieve only social networks and contacts from settings.
 */
const getSocialNetworksAndContactsQuery = `
  *[_type == "settings"] [0] {
    "contacts": coalesce(contacts, []),
    "social": coalesce(social, [])
  }
`;

export {
  getAllSettingsQuery,
  getSeoSettingsQuery,
  getCtaSettingsQuery,
  getSocialNetworksAndContactsQuery,
};
