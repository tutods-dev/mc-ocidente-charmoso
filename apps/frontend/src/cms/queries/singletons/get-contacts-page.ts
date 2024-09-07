/**
 * Query to retrieve the contacts page information.
 */
const getContactsQuery = `
  *[_type == 'contacts'] [0]
`;

export { getContactsQuery };
