<script lang="ts">
	import type { User, UserRankingMaterial } from '$lib/interfaces';
	
	export let user: User;
	export let setIsPopupOpen: (value: boolean) => void;
	
	const closePopup = () => setIsPopupOpen(false);
  
	function extractTexts(dict: Record<number, [string, number[]]>, ids: number[]): string[] {
	  return ids.map(id => dict[id]?.[0]).filter(Boolean);
	}
  
	function extractNonMatchingTexts(dict: Record<number, [string, number[]]>, ids: number[]): string[] {
	  return Object.entries(dict)
		.filter(([key]) => !ids.includes(Number(key)))
		.map(([_, value]) => value[0]);
	}
  
	const userMaterial: UserRankingMaterial = user.ranking_material;
  
	let similarPosTweets = extractTexts(user.user_data.tweets, userMaterial.tweet_pos);
	let similarNegTweets = extractTexts(user.user_data.tweets, userMaterial.tweet_neg);
	let similarDescriptions = extractTexts(user.user_data.description, userMaterial.description);
	let otherMaterial = extractNonMatchingTexts(user.user_data.tweets, [...userMaterial.tweet_pos, ...userMaterial.tweet_neg]);
	
  </script>

<!-- UserDetails.svelte -->
<div class="h-full overflow-y-auto">
	<div class="p-6">
	  <button on:click={closePopup} class="text-gray-500 hover:text-gray-700 mb-4">
		⬅️ Back to list
	  </button>
	  
	  <h3 class="text-xl font-bold text-gray-900 mb-2">{user.user_data.username}</h3>
	  <p class="text-gray-600">{user.user_data.description[user.uid]?.[0] || 'No description available'}</p>
	  
	  <div class="mt-4">
		<h4 class="font-medium text-gray-700">User Stats</h4>
		<ul class="list-disc pl-5 space-y-1 text-gray-600">
		  <li>Overall Score: <span class="font-semibold">{user.scores.sementic.toFixed(3)}</span></li>
		  <li>Avg. Likes: <span class="font-semibold">{user.scores.likes.toFixed(3)}</span></li>
		  <li>Avg. Retweets: <span class="font-semibold">{user.scores.rt.toFixed(3)}</span></li>
		  <li>Followers: <span class="font-semibold">{user.scores.followers_count.toFixed(3)}</span></li>
		</ul>
	  </div>
	  
	  {#if similarDescriptions.length > 0}
		<div class="mt-4">
		  <h4 class="font-medium text-blue-600">Similar Descriptions</h4>
		  <ul class="list-disc pl-5 space-y-1 text-gray-600">
			{#each similarDescriptions as desc}
			  <li>{desc}</li>
			{/each}
		  </ul>
		  <p>Avg. Similarity: <span class="font-semibold">{user.scores.desc.toFixed(3)}</span></p>
		</div>
	  {/if}
	  
	  {#if similarPosTweets.length > 0}
		<div class="mt-4">
		  <h4 class="font-medium text-green-600">Most Positive Tweets</h4>
		  <ul class="list-disc pl-5 space-y-1 text-gray-600">
			{#each similarPosTweets as posTweet, index}
			  <li>#{index + 1}: {posTweet}</li>
			{/each}
		  </ul>
		  <p>Avg. Similarity: <span class="font-semibold">{user.scores.tweet_pos.toFixed(3)}</span></p>
		</div>
	  {/if}
	  
	{#if similarNegTweets.length > 0}
		<div class="mt-4">
		  <h4 class="font-medium text-red-600">Most Negative Tweets</h4>
		  <ul class="list-disc pl-5 space-y-1 text-gray-600">
			{#each similarNegTweets as negTweet, index}
			  <li>#{index + 1}: {negTweet}</li>
			{/each}
		  </ul>
		  <p>Avg. Similarity: <span class="font-semibold">{user.scores.tweet_neg.toFixed(3)}</span></p>
		</div>
	{/if}
	 	<div class="mt-4">
			<h4 class="font-medium text-gray-700">Other Tweets</h4>
			<ul class="list-disc pl-5 space-y-1 text-gray-600">
				{#each otherMaterial as material}
					<li>{material}</li>
				{/each}
			</ul>
	  	</div>
	</div>
  </div>