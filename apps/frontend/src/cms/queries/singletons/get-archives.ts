/**
 * Query to retrieve projects archive settings.
 */
const getProjectsArchive = `
    *[_type == "archives"] [0].projects
`;

/**
 * Query to retrieve services archive settings.
 */
const getServicesArchive = `
    *[_type == "archives"] [0].services
`;

export { getServicesArchive, getProjectsArchive };
