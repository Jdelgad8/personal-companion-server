import { buildUrlPath } from 'src/helpers';
import {
  SERVICE_BASE_PATH,
  USER_SERVICE_PORT,
  GRAPHQL_URL_COMPLEMENT,
} from '.';

export const subgraphs = [
  {
    name: 'user',
    url: buildUrlPath({
      basePath: SERVICE_BASE_PATH,
      port: USER_SERVICE_PORT,
      complement: GRAPHQL_URL_COMPLEMENT,
    }),
  },
];
