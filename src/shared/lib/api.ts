import type { paths } from './photo-api';
import createClient from 'openapi-fetch';

const baseUrl = import.meta.env.DEV
  ? '/api'
  : 'https://api.photoai.artlogo.co';

const client = createClient<paths>({
  baseUrl,
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
