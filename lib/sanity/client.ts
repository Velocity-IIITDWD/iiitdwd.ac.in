import { createClient, QueryWithoutParams } from '@sanity/client';

export const client = createClient({
  projectId: '3hussc2p',
  dataset: 'production',
  apiVersion: '2024-11-28',
  useCdn: false,
});

export const FetchSanity = async (
  query: string,
  params?: QueryWithoutParams
): Promise<any> => {
  try {
    const res = await client.fetch(query);
    return res;
  } catch (err) {
    console.error('Error fetching data:', err);
    return [];
  }
};
