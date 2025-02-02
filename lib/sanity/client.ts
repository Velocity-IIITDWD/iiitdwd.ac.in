import { createClient, type QueryParams } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-11-28',
  useCdn: false,
});

export const FetchSanity = async (
  query: string,
  params?: QueryParams
): Promise<any> => {
  try {
    const res = await client.fetch(query, params ?? {});
    return res;
  } catch (err) {
    console.error('Error fetching data:', err);
    return [];
  }
};
