<script lang="ts">
    import { enhance, type SubmitFunction } from '$app/forms';
    import type { ActionData } from './$types';
    export let form: ActionData;
    
    let isSubmitting = false;
    let product_id = ''
    const handleSubmit: SubmitFunction = () => {
      isSubmitting = true;
      console.log('Form submission started');
      
      return async ({ result, update }) => {
        await update();
        isSubmitting = false;
        product_id = await result.data.pid
        console.log('Form submission completed:', product_id);
      };
    };
  </script>
  
  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div class="mx-auto max-w-2xl py-32">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 animate-gradient-text">
          Register New Product
        </h1>
      </div>
  
      {#if isSubmitting}
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white p-8 rounded-lg shadow-xl text-center">
            <img 
                src="/swag-fire.gif"
                alt="Loading animation" 
                class="w-32 h-32 mx-auto mb-4"
            />
            <p class="text-gray-700">Go get coffee while my GPU is burning</p>
            <p class="text-sm text-gray-500 mt-2">This might take a few moments</p>
            </div>
        </div>
      {/if}
  
      <form
        method="POST"
        use:enhance={handleSubmit}
        class="space-y-6 bg-white p-8 rounded-lg shadow-lg relative"
      >
        {#if form?.error}
          <div class="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
            <p class="text-red-700">{form.error}</p>
          </div>
        {/if}
  
        {#if form?.success}
          <div class="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
            <p class="text-green-700">Product registered successfully with id {product_id} !</p>
          </div>
        {/if}
  
        <div>
          <label for="productType" class="block text-sm font-medium text-gray-700 mb-2">
            Product Type
          </label>
          <input
            type="text"
            name="productType"
            id="productType"
            required
            disabled={isSubmitting}
            placeholder="e.g. electronics, fashion, accessories"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          <p class="mt-1 text-sm text-gray-500">Separate multiple types with commas</p>
        </div>
  
        <div>
          <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
            Product Description
          </label>
          <textarea
            name="description"
            id="description"
            required
            disabled={isSubmitting}
            rows="4"
            placeholder="Enter a detailed description of your product..."
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          ></textarea>
        </div>
  
        <button
          type="submit"
          disabled={isSubmitting}
          class="w-full rounded-md bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Processing...' : 'Register Product'}
        </button>
      </form>
    </div>
  </div>
  
  <style>
    @keyframes gradient-move {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  
    .animate-gradient-text {
      background-size: 200% auto;
      animation: gradient-move 3s ease infinite;
    }
  </style>