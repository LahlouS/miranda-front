<script>
  let showEmail = false;
  let activeTab = "about"; // Track the active tab: "about", "howToUse", or "howItWorks"
  
</script>

<!-- +page.svelte -->
<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400&display=swap" rel="stylesheet">
</svelte:head>

<div class="relative isolate px-6 pt-14 lg:px-8">
  <!-- Top gradient blob -->
  <div
    class="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    aria-hidden="true"
  >
    <div
      class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
    ></div>
  </div>

  <!-- Changed to a more moderate padding and added min-height to ensure consistent space -->
  <div class="mx-auto max-w-4xl py-5 sm:py-12 min-h-screen flex flex-col justify-start">
    <div class="text-center flex-grow">
      <h1 class="text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 mt-8 font-orbitron animate-gradient-text">
        Miranda
      </h1>

      <p class="mt-4 text-xl font-medium text-gray-900">
        Influancer AI-powered search algorithm 🤍
      </p>
      <!-- Tab Navigation - Added z-index and made buttons more explicitly interactive -->
      <div class="mt-10 flex justify-center space-x-4 border-b border-gray-200 relative z-10">
        <button 
          class="px-4 py-2 font-medium transition-colors duration-200 cursor-pointer {activeTab === 'about' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'}"
          on:click={() => { activeTab = 'about'; }}
        >
          About
        </button>
        <button 
          class="px-4 py-2 font-medium transition-colors duration-200 cursor-pointer {activeTab === 'howToUse' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'}"
          on:click={() => { activeTab = 'howToUse'; }}
        >
          How to Use
        </button>
        <button 
          class="px-4 py-2 font-medium transition-colors duration-200 cursor-pointer {activeTab === 'howItWorks' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'}"
          on:click={() => { activeTab = 'howItWorks'; }}
        >
          How It Works
        </button>
      </div>

      <!-- Tab Content - Added z-index to ensure it's clickable -->
      <div class="mt-8 bg-white rounded-lg p-6 shadow-sm relative z-10">
        {#if activeTab === 'about'}
          <div class="space-y-4 text-left">
            <h2 class="text-2xl font-semibold text-gray-800">Find the perfect brand ambassador</h2>
            <p class="text-gray-600">
              Miranda AI generated content and retrieval technologies to match your product with influencers who align perfectly with your brand values and target audience. 
              Save time and maximize your marketing impact with precisely targeted ambassador recommendations.
            </p>
          </div>
        {:else if activeTab === 'howToUse'}
          <div class="space-y-6 text-left">
            <h2 class="text-2xl font-semibold text-gray-800">How to Use Miranda</h2>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold">1</div>
                <div class="ml-4">
                  <p class="text-gray-600">Click <strong>Try it out</strong></p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold">2</div>
                <div class="ml-4">
                  <p class="text-gray-600"><strong>Register your own product</strong> AND OR <strong>click on product card</strong></p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold">3</div>
                <div class="ml-4">
                  <p class="text-gray-600">Wait for <strong>20 to 30 seconds</strong></p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold">4</div>
                <div class="ml-4">
                  <p class="text-gray-600"><strong>Let MIRANDA suggest influencers that best fit your product.</strong></p>
                </div>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 class="text-lg font-medium text-blue-800">Pro Tip:</h3>
              <p class="text-blue-700">
                When registering a new product, be specific about your target audience and your brand's marketing editorial line. 
                The more detailed information you provide, the better Miranda can match you with the perfect ambassador.
              </p>
            </div>
          </div>
        {:else if activeTab === 'howItWorks'}
        <div class="space-y-6 text-left">
          <h2 class="text-2xl font-semibold text-gray-800">How Miranda Works</h2>
          
          <div class="space-y-6">
            <div class="rounded-lg bg-gradient-to-r from-blue-50 to-pink-50 p-4 border border-blue-100">
              <h3 class="text-lg font-medium text-gray-800 flex items-center">
                <span class="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white mr-2">1</span>
                AI Content Generation
              </h3>
              <p class="mt-2 text-gray-600 pl-10">
                Miranda uses your product description to generate platform-specific content (X only at this time). 
                This generated content allows Miranda to target user clusters in the database.
              </p>
            </div>
            
            <div class="rounded-lg bg-gradient-to-r from-pink-50 to-blue-50 p-4 border border-pink-100">
              <h3 class="text-lg font-medium text-gray-800 flex items-center">
                <span class="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white mr-2">2</span>
                Vector Analysis
              </h3>
              <p class="mt-2 text-gray-600 pl-10">
                Based on the generated content, Miranda uses vector search and statistics to score users that best match your product based on different metrics:
              </p>
              <ul class="mt-3 space-y-2 pl-10">
                <li class="flex items-center">
                  <span class="w-2 h-2 rounded-full bg-pink-400 mr-2"></span>
                  <span class="text-gray-600"><strong>Emotional resemblance</strong> (model: paraphrase-multilingual-mpnet-base-v2)</span>
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                  <span class="text-gray-600"><strong>Factual resemblance</strong> (model: all-MiniLM-L12-v2)</span>
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 rounded-full bg-pink-400 mr-2"></span>
                  <span class="text-gray-600"><strong>platform-specific stats: Followers, Likes, Retweets</strong></span>
                </li>
              </ul>
            </div>
            
            <div class="rounded-lg bg-gradient-to-r from-blue-50 to-pink-50 p-4 border border-blue-100 flex items-center">
              <p class="text-gray-700">
                <strong>Explore Miranda:</strong> This project is open source! 
                <a href="https://github.com/LahlouS/miranda/tree/main/program_v2" class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  View on GitHub
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>
        {/if}
      </div>

      {#if showEmail}
        <div class="mt-4 text-center text-lg font-semibold text-gray-800">
          📧 lahlousacha@gmail.com
        </div>
      {/if}
      
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/product"
          class="rounded-md bg-gradient-to-r from-blue-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
        >
          Try it out
        </a>
        
        <button
          on:click={() => showEmail = !showEmail}
          class="rounded-md bg-gradient-to-r from-blue-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
        >
          Get in touch
        </button>
      </div>
    </div>
  </div>
  
  <!-- Bottom gradient blob -->
  <div
    class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    aria-hidden="true"
  >
    <div
      class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
    ></div>
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

  :global(.font-orbitron) {
    font-family: 'Orbitron', sans-serif;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3.5rem;
    }
  }
</style>