<script>
// @ts-nocheck


import { Midi } from '@tonejs/midi'
import midifile from "../assets/MoonlightSonataNo.mid"
  // import { svelte } from '@sveltejs/vite-plugin-svelte'
  async function getMidiFile(){
   const m =  await Midi.fromUrl('../assets/MoonlightSonataNo.mid').catch(e=> console.log(e))
   console.log({m})
   }

  let count = 0
  const increment = () => {
    getMidiFile()
  }
</script>

<button on:click={increment}>
  Clicks: {count}
</button>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
