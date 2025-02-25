// +page.server.ts
import type { Actions, PageServerLoad } from './$types';
import { error, json } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import type { SendProduct } from '$lib/interfaces';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Replace with your actual API base URL

function validateProductTypes(input: string) {
	// Trim the entire string first
	const trimmed = input.trim();
	
	// Check if string is empty
	if (!trimmed) {
	  return {
		isValid: false,
		value: '',
		error: 'Product types cannot be empty'
	  };
	}
  
	// Check for invalid characters (only allow letters, numbers, spaces, and commas)
	const validCharacterRegex = /^[a-zA-Z0-9, ]+$/;
	if (!validCharacterRegex.test(trimmed)) {
	  return {
		isValid: false,
		value: trimmed,
		error: 'Product types can only contain letters, numbers, spaces, and commas'
	  };
	}
  
	// Check for invalid comma patterns
	const invalidCommaPatterns = [
	  /^,/,           // Comma at start
	  /,$/, // Comma at end
	  /,,/,          // Consecutive commas
	  /, ,/          // Empty item (just spaces between commas)
	];
  
	for (const pattern of invalidCommaPatterns) {
	  if (pattern.test(trimmed)) {
		return {
		  isValid: false,
		  value: trimmed,
		  error: 'Invalid comma formatting. Ensure no empty items or consecutive commas'
		};
	  }
	}
  
	return {
	  isValid: true,
	  value: trimmed
	};
}

const simulateProcessing = async (ms: number = 3000) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// Removing every engine in memory to prepare for heavy lifting
export const load: PageServerLoad = async ( ) => {
	try {
		const runningEngineResponse = await fetch(`${API_BASE_URL}/engine/runningengines`)
		const runningEngineList = await runningEngineResponse.json()
		for (const delete_pid of runningEngineList.list_id) {
			const deleteEngineResponse = await fetch(`${API_BASE_URL}/engine/${delete_pid}/kill`, { method: 'DELETE', })
			if (!deleteEngineResponse.ok) {
				throw error(deleteEngineResponse.status, `there has been a problem trying to delete in memory engine id:${delete_pid}`);
			}
		}
		return { "status":"ok" }
	} catch (err) {
		throw error(500, `Error fetching products: ${err}`);
	}
};

export const actions = {
  default: async ({ request }) => {
	try {
		await simulateProcessing(Math.random() * 5000 + 2000); // Random 2-7 seconds
		const formData = await request.formData();
		const productType = formData.get('productType')?.toString() || '';
		const description = formData.get('description')?.toString() || '';

		// Validate inputs
		if (!productType || !description) {
			return fail(400, {
				error: 'All fields are required'
			});
		}

		const productTypeValidation = validateProductTypes(productType);
		if (!productTypeValidation.isValid) {
		return fail(400, {
			error: productTypeValidation.error
		});
		}

		// Here you would typically save to your database
		const product: SendProduct = {
			ptype: productTypeValidation.value,
			description: description,
		};
		
		const url = `${API_BASE_URL}/product`
		const postProductResponse = await fetch(url, {
			method: 'POST', 
			headers: {
				"Accept": "application/json",         // Tells the server you expect JSON response
				"Content-Type": "application/json"   // Specifies that you're sending JSON data
			},
			body: JSON.stringify(product) 
		})

		if (!postProductResponse.ok) {
			throw error(postProductResponse.status, `Failed to push new product`);
		}
		const data = await postProductResponse.json()
		return {
			success: true,
			message: 'Product registered successfully',
			...data
		};
	} catch (error) {
		console.error('Error registering product:', error);
		return fail(500, {
		error: 'Failed to register product'
		});
	}
  }
} satisfies Actions;