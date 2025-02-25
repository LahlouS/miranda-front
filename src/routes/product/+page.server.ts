import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { faker } from '@faker-js/faker';
import type { Product, GetProductValidation, ListId, IsRunning } from '$lib/interfaces';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Replace with your actual API base URL

export const load: PageServerLoad = async ({ fetch }) => {
  try {
    // Step 1: Fetch the list of product IDs
    const listIdResponse = await fetch(`${API_BASE_URL}/product/all`);
    if (!listIdResponse.ok) {
      throw error(listIdResponse.status, 'Failed to fetch product IDs');
    }
    const listIdData: ListId = await listIdResponse.json();
    const productIds = listIdData.list_id;

    // Step 2: Fetch each product's details in parallel
    const productRequests = productIds.map(async (pid) => {
      const productResponse = await fetch(`${API_BASE_URL}/product/${pid}`);
      if (!productResponse.ok) {
        throw error(productResponse.status, `Failed to fetch product with id ${pid}`);
      }
      return productResponse.json();
    });
    
    const runningEngineResponse = await fetch(`${API_BASE_URL}/engine/runningengines`)
    if (!runningEngineResponse.ok) {
      throw error(runningEngineResponse.status, `Failed to fetch running engines`);
    }
    const list_running_engine: ListId = await runningEngineResponse.json()
    // Wait for all product requests to complete
    const productData : GetProductValidation[] = await Promise.all(productRequests);
    // Step 3: Transform API response to match Product interface
    const products: (Product & IsRunning)[] = productData.map((data) => ({
      pid: data.pid,
      type: data.product_type,
      description: data.description,
      gen_description: Object.values(data.gen_description).map(([sentence]) => sentence),
      gen_tweets_pos: Object.values(data.gen_tweets_pos).map(([sentence]) => sentence),
      gen_tweets_neg: Object.values(data.gen_tweets_neg).map(([sentence]) => sentence),
      isRunning: (list_running_engine.list_id.includes(data.pid)) ? true : false
    }));


    return { products };
  } catch (err) {
    throw error(500, `Error fetching products: ${err}`);
  }
};
