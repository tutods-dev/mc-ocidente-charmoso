/**
 * Helper function to build the information with base on the number of results and the current page.
 * @param start Beginning of the results
 * @param end End of the reuslts
 * @param numberOfResults Number of results
 * @param name Label for the results
 */
function getPaginationInfo(end: number, numberOfResults: number, name = 'resultados') {
  // const startResults = start > numberOfResults ? numberOfResults : start;
  const endResults = end > numberOfResults ? numberOfResults : end;

  // ${startResults}-
  return `${endResults} de ${numberOfResults} ${name}`;
}

export { getPaginationInfo };
