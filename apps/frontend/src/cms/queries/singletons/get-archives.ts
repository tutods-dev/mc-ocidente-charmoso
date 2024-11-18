/**
 * Query to retrieve services archive settings.
 */
const getServicesArchiveQuery = `
    *[_type == "archives"] [0].services
`;

export { getServicesArchiveQuery };
