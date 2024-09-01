import { DEFAULT_PAGINATION_OFFSET } from '~/shared/constants';

/**
 * Callback function to calculate `start` and `end` values for Sanity queries.
 * @param page Current page
 * @param offset Number of results for each page
 */
function getPagination(page = 1, offset = DEFAULT_PAGINATION_OFFSET) {
  return {
    start: (page - 1) * offset,
    end: page * offset,
  };
}

export { getPagination };
