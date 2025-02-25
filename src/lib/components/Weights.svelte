<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    // Accept the weights object and the isPopupOpen variable from the parent
    export let weights: Record<string, number>;
    export let isPopupOpen: boolean;
    export let setIsPopupOpen: (value: boolean) => void;

// Dispatch function to send events to parent
    const dispatch = createEventDispatcher();
    
    const closePopup = () => {
        dispatch('updateWeights');
        setIsPopupOpen(false); // Close the popup by setting the state to false
    };

    const closePopup2 = () => {
        setIsPopupOpen(false); // Close the popup by setting the state to false
    };

    const messages: Record<string, string> = {
        "occurrence" : "I want my user to have a lot of similar material ✅✅",
        "similarity_pos": "I want my user to be in love with my product 🥰",
        "similarity_neg": "I want my user to be craving for my product 🤒",
        "similarity_desc": "I want my user to associate with my product 🧚🥷",
        "followers_count": "I want my user to be famous 👑",
        "likes": "I want my user to be liked 📶",
        "rt": "I want my user to be impactful 🌎​"
    }

  </script>
  
  {#if isPopupOpen}
    <div class="popup-backdrop">
      <div class="popup-content">
        <button on:click={closePopup2} class="close-button">×</button>
  
        <h2 class="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 mt-8">Tune your search</h2>
        <div class="mb-6"></div>
        {#each Object.keys(weights) as weightKey}
          <div class="weight-control">
            <label for={weightKey} class="label">{messages[weightKey]}</label>
            <div class="slider-container">
              <input 
                type="range" 
                min="0" max="20" step="0.1"
                bind:value={weights[weightKey]} 
                id={weightKey}
                class="slider" 
              />
              <span class="value">{(weights[weightKey]).toFixed(0)} / 20</span>
            </div>
          </div>
        {/each}
  
        <div class="save-button-container">
            <button 
                class="mt-6 p-3 rounded-lg text-white font-semibold text-xl bg-gradient-to-r from-blue-400 to-pink-400 hover:from-blue-300 hover:to-pink-300 transition-all duration-300 transform hover:scale-105"
            on:click={closePopup} >Save Weights
            </button>
        </div>
      </div>
    </div>
  {/if}
  
  <style>
    .popup-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent dark backdrop */
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
    }
  
    .popup-content {
      background-color: white;
      padding: 30px; /* Increased padding for more space */
      border-radius: 15px; /* Rounded corners */
      width: 80%; /* Made the width larger */
      max-width: 800px; /* Increase max width */
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Bigger shadow for a more floating effect */
      position: relative;
    }
  
    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 2rem;
      background: none;
      border: none;
      color: #333;
      cursor: pointer;
    }
  
    .close-button:hover {
      color: #ff0000;
    }
  
    .weight-control {
      margin-bottom: 20px; /* Increased bottom margin between fields */
    }
  
    .label {
      font-size: 1.2rem;
      color: #333;
      margin-bottom: 5px; /* Space between label and slider */
    }
  
    .slider-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
    }
  
    .slider {
    -webkit-appearance: none;  /* Removes default styles on Webkit browsers (Chrome, Safari) */
    width: 90%;
    height: 8px;  /* Adjust the height of the slider */
    border-radius: 5px;  /* Rounded corners */
    background: linear-gradient(to right, #3b82f6, #9333ea);  /* Gradient background of blue */
    outline: none;  /* Remove focus outline */
    transition: background 0.3s ease;  /* Smooth transition when interacting with the slider */
    }
    .slider:hover::-webkit-slider-thumb {
     background: #2563eb;  /* Darker blue when hovered */
    }
    .value {
      font-size: 1rem;
      color: #333;
    }
  
    .save-button-container {
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }
  
  </style>
  