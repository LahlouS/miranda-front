<script lang="ts">
	import type { PageData } from './$types';
	import Weights from '$lib/components/Weights.svelte';
	import UserDetails from '$lib/components/UserDetails.svelte';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { User } from '$lib/interfaces';

	export let data: PageData;
	const product = data.product;
	$: users = []
	$: engineStats = null
	$: url = $page.url.href;
	let error = null;
	let loading = {engine: true, users: true};

	onMount(async () => {
		try {
			const engineResponse = await fetch(`${product.pid}/engine`, {
				method: 'GET',
			});
			if (!engineResponse.ok) {
				throw new Error(`Failed to start engine : ${engineResponse.status}`);
			}
			engineStats = await engineResponse.json();
			loading.engine = false
			const usersResponse = await fetch(`${product.pid}/users`, {
				method: 'GET',
			});
			if (!usersResponse.ok) {
				throw new Error(`Failed to fetch users data : ${usersResponse.status}`);
			}
			users = await usersResponse.json()
			loading.users = false
		} catch (err) {
			error = err.message;
			console.error('Fetch error:', err);
		} finally {
			loading.engine = false
			loading.users = false
		}
	});

	let weights = {
		"occurrence" : 1.0,
		"similarity_pos" : 1.0,
		"similarity_neg" : 1.0,
		"similarity_desc" : 1.0,
		"followers_count": 1.0,
		"likes": 1.0,
		"rt": 1.0
	};

	let isWeightPopUpOpen = false;
	let isUserDetailComponentOpen = false;
	let selectedUser: User | null = null;

	const setIsWeightPopUpOpen = (value: boolean) => {
		isWeightPopUpOpen = value;
	};
	
	const setisUserDetailComponentOpen = (value: boolean) => {
		isUserDetailComponentOpen = value;
	};

	const openComponentUserDetail = (user: any) => {
		selectedUser = user
		isUserDetailComponentOpen = true
	}
	

  // Query my api for new weights
const handleNewWeights = async () => {
	loading.users = true
	const formData = new FormData();
	Object.entries(weights).forEach(([key, value]) => formData.append(key, value.toString()));
	
	const response = await fetch(`${product.pid}/users`, {
		method: 'POST',
		body: formData
	});
	const ret = await response.json()
	if (ret.message.includes('OK')) {
		const usersResponse = await fetch(`${product.pid}/users`, {
			method: 'GET',
		});
		users = await usersResponse.json()
	} else {
		error = "Error computing users scores"
	}
	loading.users = false
};

</script>

<h1 class="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 mt-8">
	User search
</h1>
{#if isWeightPopUpOpen}
	<Weights {weights} isPopupOpen={isWeightPopUpOpen} setIsPopupOpen={setIsWeightPopUpOpen} on:updateWeights={handleNewWeights}/>
{/if}

<hr class="my-6 border-t-2 border-gray-300">
<!-- Page Layout -->
<div class="flex flex-row items-start justify-between w-full px-6 py-8 space-x-6">

  <div class="w-1/2 p-6 rounded-lg shadow-lg bg-white sticky top-0">

	<!-- Flexbox container for the button and heading on the same row -->
	<div class="flex items-center justify-between space-x-4">
	  <!-- Product Type Heading -->
	  <h2 class="text-2xl font-bold text-gray-900">({product.pid}) {product.type}</h2>
  
	  <!-- Button aligned to the right -->
	  <button 
		on:click={() => (isWeightPopUpOpen = true)}
		class="p-3 rounded-lg text-white font-semibold text-xl bg-gradient-to-r from-blue-400 to-pink-400 hover:from-blue-300 hover:to-pink-300 transition-all duration-300 transform hover:scale-105"
	  >
		Tune your search 🧭
	  </button>
	</div>
  
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
  
	
  <!-- Vertical Scrolling Separator (Now Fully Functional) -->
  <div class="relative flex items-center h-screen w-16 overflow-hidden">
	<div class="absolute inset-0 flex items-center justify-center">
	  <p class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 whitespace-nowrap tracking-wide animate-scroll" style="writing-mode: vertical-lr;">
		お や す み な さ い 、 優 し く し な い で く だ さ い - お や す み な さ い、 優 し く し な い で く だ さ い
	  </p>
	</div>
   </div>
	
	<!-- Users List on the Right (scrollable) -->
<!-- Main container with relative positioning -->
<div class="relative w-1/2 h-screen">
	<!-- Users list container -->
	<div class="h-full overflow-y-auto space-y-4">
	  {#if loading.users == true}
		<!-- Animated Loading Placeholder -->
		<div class="flex items-center justify-center h-full">
		  <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-500"></div>
		  <p class="ml-3 text-gray-700 font-semibold">Loading users...</p>
		</div>
	  {:else if error}
		<p class="text-red-500 text-center">{error}</p>
	  {:else}
		{#each users as user}
		  <button 
			on:click={() => openComponentUserDetail(user)} 
			class="w-full text-left p-4 bg-white shadow-md rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
			
			<h3 class="text-lg font-semibold text-gray-900">
			  {user.user_data.username}
			  <span class="text-red-500">
				{user.scores.sementic.toFixed(3)}
			  </span>
			</h3>
			<p class="text-gray-600">{user.user_data.description[user.uid][0]}</p>
			<h4 class="mt-2 font-medium text-gray-700">Tweets:</h4>
			<ul class="list-disc pl-5 space-y-2 text-gray-600">
			  <li>😍 How deep in love he is with your product: {user.scores.tweet_pos.toFixed(3)}</li>
			  <li>😭 How badly he craves for your product: {user.scores.tweet_neg.toFixed(3)}</li>
			  <li>👮 How close he associates: {user.scores.desc.toFixed(3)}</li>
			  <li>👯 Occurrence score: {user.scores.occurence.toFixed(3)}</li>
			  <li>🫶 Average likes: {user.scores.likes.toFixed(3)}</li>
			  <li>🐣 Average retweets: {user.scores.rt.toFixed(3)}</li>
			  <li>🌏 Followers: {user.scores.followers_count.toFixed(3)}</li>
			</ul>
		  </button>
		{/each}
	  {/if}
	</div>
  
	<!-- User Details Overlay -->
	{#if isUserDetailComponentOpen && selectedUser}
	  <div class="absolute top-0 right-0 w-full h-full bg-white/95 backdrop-blur-sm shadow-lg overflow-y-auto transition-transform duration-300 {isUserDetailComponentOpen ? 'translate-x-0' : 'translate-x-full'}">
		<UserDetails user={selectedUser} setIsPopupOpen={setisUserDetailComponentOpen}/>
	  </div>
	{/if}
  </div>
  </div>

  <style>
	@keyframes scroll {
	  from { transform: translateY(-100%); }
	  to { transform: translateY(100%); }
	}
   
	.animate-scroll {
	  animation: scroll 10s linear infinite;
	}

	button {
	font-size: 1.25rem;
	transition: background-color 0.3s, transform 0.3s;
  }

  </style>
