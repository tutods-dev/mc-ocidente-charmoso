import { query } from '@solidjs/router';
import { client } from '~/cms';
import {
  getHighlightedServicesQuery,
  getPaginatedServicesQuery,
  getTotalOfServicesQuery,
} from '~/cms/queries/services';
import { getPagination } from '~/cms/utils';
import { DEFAULT_PAGINATION_OFFSET } from '~/shared/constants';
import type { PaginatedServices, ServiceCard } from '~/shared/types';

/**
 * Service to retrieve the highlighted services.
 */
const getHighlightedServices = query<(page?: number, offset?: number) => Promise<ServiceCard[]>>(
  async (page = 1, offset = DEFAULT_PAGINATION_OFFSET) => {
    'use server';

    try {
      const { start, end } = getPagination(page, offset);

      return client.fetch<ServiceCard[]>(getHighlightedServicesQuery, {
        start,
        end,
      });
    } catch {
      return [];
    }
  },
  'highlighted-services',
);

/**
 * Service to retrieve the total of services.
 */
const getTotalOfServices = query(async (): Promise<number> => {
  try {
    const total = await client.fetch<number>(getTotalOfServicesQuery);

    return total;
  } catch {
    return 0;
  }
}, 'total-services');

/**
 * Service to retrieve paginated services, returning the total of services and the list of services for the current page.
 * @param page Page number
 * @param offset Number of results per page
 */
const getPaginatedServices = query<(page?: number, offset?: number) => Promise<PaginatedServices>>(
  async (page = 1, offset = DEFAULT_PAGINATION_OFFSET) => {
    'use server';

    try {
      const { start, end } = getPagination(page, offset);

      return client.fetch<PaginatedServices>(getPaginatedServicesQuery, {
        start,
        end,
      });
    } catch {
      return {
        total: 0,
        data: [],
      };
    }
  },
  'paginated-services',
);

export { getTotalOfServices, getPaginatedServices, getHighlightedServices };
