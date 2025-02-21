<script lang="ts">
	import type { PageData } from './$types';
  import type { Product } from '$lib/interfaces';

	export let data: PageData;
    const products: Product[] = data.products

</script>
<!-- Page Title -->
<h1 class="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 mt-8">
  Products Cards
</h1>

<a
  href="/product/new-product"
  class="rounded-md bg-gradient-to-r from-blue-500 to-pink-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-6"
>
  + New product
</a>


<!-- Horizontal Delimiter -->
<hr class="my-6 border-t-2 border-gray-300">

<!-- Displaying the product list in a grid layout -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 gap-8 px-6 mt-6">
    {#each products as product}
      <a href={`/product/explore/${product.pid}`} class="block">
        <div class="group rounded-lg shadow-lg p-6 bg-white hover:bg-gray-50 transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl">
          <h2 class="text-xl font-semibold text-gray-900">({product.pid}) {product.type}</h2>
          <p class="mt-2 text-gray-600">{product.description}</p>
    
          <!-- Likes Section -->
          <div class="mt-4">
            <h3 class="font-medium text-gray-700">Who are they ?</h3>
            <ul class="list-disc pl-5 space-y-2 text-gray-600">
              {#each product.gen_description as gd}
                <li>{gd}</li>
              {/each}
            </ul>
          </div>
    
          <!-- Dislikes Section -->
          <div class="mt-4">
            <h3 class="font-medium text-gray-700">Life is a bless with your product:</h3>
            <ul class="list-disc pl-5 space-y-2 text-gray-600">
              {#each product.gen_tweets_pos as tp}
                <li>{tp}</li>
              {/each}
            </ul>
          </div>
    
          <!-- Usage Section -->
          <div class="mt-4">
            <h3 class="font-medium text-gray-700">Life is hard without your product:</h3>
            <ul class="list-disc pl-5 space-y-2 text-gray-600">
              {#each product.gen_tweets_neg as tn}
                <li>{tn}</li>
              {/each}
            </ul>
          </div>
        </div>
      </a>
    {/each}
  </div>
  
  <!-- Background Gradient for the Page -->
  <div
    class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    aria-hidden="true"
  >
    <div
      class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
    ></div>
  </div>
