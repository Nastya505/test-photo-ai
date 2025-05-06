import type { paths } from './photo-api';
import createClient from 'openapi-fetch';

const baseUrl = import.meta.env.DEV
  ? '/api'
  : 'https://api.photoai.artlogo.co';

const client = createClient<paths>({
  baseUrl,
});

export async function getExamples({
  limit = null,
  shuffle = false,
  prompt_pack_id = null,
}: {
  limit?: number | null;
  shuffle?: boolean;
  prompt_pack_id?: string | null;
} = {}) {
  const queryParams: Record<string, any> = {};

  if (limit !== null) queryParams.limit = limit;
  if (shuffle !== false) queryParams.shuffle = shuffle; 
  if (prompt_pack_id !== null) queryParams.prompt_pack_id = prompt_pack_id;


  const { data, error } = await client.GET('/public/v1/get-examples', {
    params: {
      query:queryParams,
    }
  });

  if (error) {
    throw error;
  }
console.log(data)
  return data;
}

export async function getExampleById(id: string) {
  const { data, error } = await client.GET(`/public/v1/get-example/{photo_id}`, {
    params: { path: { photo_id: id } },
  });

  if (error) {
    throw error;
  }
  console.log(data)

  return data;
}

export async function getPacks() {
  const { data, error } = await client.GET('/public/v1/get-packs');

  if (error) {
    throw error;
  }
  console.log(data)

  return data;
}
