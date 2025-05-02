import type { paths } from './photo-api';
import createClient from 'openapi-fetch';

const client = createClient<paths>({
  baseUrl: 'https://api.photoai.artlogo.co',
});

export async function getExamples() {
  const { data, error } = await client.GET('/public/v1/get-examples');

  if (error) {
    throw error;
  }

  return data;
}
export async function getPacks() {
  const { data, error } = await client.GET('/public/v1/get-packs');

  if (error) {
    throw error;
  }

  return data;
}
