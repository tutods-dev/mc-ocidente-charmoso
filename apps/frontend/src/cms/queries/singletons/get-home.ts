/**
 * Query to retrieve the data for the home page.
 */
const getHomeQuery = `
  {
    "aboutUs": *[_type == "about-us"][0].aboutUs
  }
`;
// *[_type == "home"] [0] {
//   ...,
//   "aboutUs": *[_type == "about-us"][0].aboutUs
// }

export { getHomeQuery };
