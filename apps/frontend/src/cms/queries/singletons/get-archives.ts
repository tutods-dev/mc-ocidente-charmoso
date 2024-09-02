/**
 * Query to retrieve projects archive settings.
 */
const getProjectsArchiveQuery = `
    *[_type == "archives"] [0].projects
`;

/**
 * Query to retrieve services archive settings.
 */
const getServicesArchiveQuery = `
    *[_type == "archives"] [0].services
`;

export { getServicesArchiveQuery, getProjectsArchiveQuery };
