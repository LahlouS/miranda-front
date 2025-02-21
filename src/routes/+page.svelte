<script>

  let showEmail = false

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

  <div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
    <div class="text-center">
      <h1 class="text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 mt-8 font-orbitron animate-gradient-text">
        Miranda
      </h1>

      <p class="mt-6 text-xl font-medium text-gray-900">
        Find the one | elevate your brand 🤍
      </p>
      
      <div class="mt-8 text-lg leading-8 text-gray-600 space-y-4">
        <p class="italic">"In the future, everyone will be world-famous for 15 minutes" - Andy Warhol</p>
        <p>
          Everyone can represent something meaningful.
          Let Miranda help you harness the power of micro-influencer marketing.
        </p>
      </div>

      <div class="mt-10 space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <!-- AI Analysis Card -->
          <div class="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900">Vector Analysis</h3>
            <p class="mt-2 text-gray-600">
            </p>
            <ul class="mt-2 space-y-1 text-sm text-gray-600">
              <li>• Emotional matching: paraphrase-multilingual-mpnet-base-v2</li>
              <li>• Factual matching: all-MiniLM-L12-v2</li>
              <li>• IVFFlat for efficient vector search</li>
            </ul>
          </div>

          <!-- Content Generation Card -->
          <div class="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900">AI Content Generation</h3>
            <p class="mt-2 text-gray-600">
            </p>
            <ul class="mt-2 space-y-1 text-sm text-gray-600">
              <li>• LLaMA 3.1 for dynamic content generation</li>
              <li>• Multi-platform content adaptation</li>
              <li>• Transformer-based content analysis</li>
            </ul>
          </div>

          <!-- Tech Stack Card -->
          <div class="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900">Tech Stack</h3>
            <p class="mt-2 text-gray-600">
             
            </p>
            <ul class="mt-2 space-y-1 text-sm text-gray-600">
              <li>• FastAPI + Python backend</li>
              <li>• PostgreSQL with pgvector for vector search</li>
              <li>• Pandas for data processing</li>
              <li>• SvelteKit frontend for reactive UI</li>
            </ul>
          </div>
        </div>
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
      font-size: 5rem;
    }
  }
</style>