import type { paths } from './photo-api';
import createClient from 'openapi-fetch';

const client = createClient<paths>({
  baseUrl: '/api',
});

export async function getExamples() {
  const { data, error } = await client.GET('/public/v1/get-examples');

  if (error) {
    throw error;
  }

  return data;
}
