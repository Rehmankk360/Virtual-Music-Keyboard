<script>
  import { Piano, Drums, Controls } from "./Index";
  import Speaker from "../SharedComponents/Speaker.svelte";
</script>

<div class="keyboard_wrapper">
  <div class="keyboard">
    <div class="top">
      <Speaker />
      <Controls />
      <Drums />
      <Speaker />
    </div>
    <Piano />
  </div>
</div>

<style>
    
</style>
