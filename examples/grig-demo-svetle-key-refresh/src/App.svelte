<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import Content from "./components/Content.svelte";
  import SwitchLang from "./components/SwitchLang.svelte";
  import {
    getLang,
    addLangChangeCallback,
    removeLangChangeCallback,
  } from "./lang/init";
  import { onDestroy, onMount } from "svelte";
  let lang: string = getLang();
  onMount(() => {
    addLangChangeCallback("langChange", (_lang: string) => {
      lang = _lang;
    });
  });
  onDestroy(() => {
    removeLangChangeCallback("langChange");
  });
</script>

<div class="app card">
  {#key lang}
  <div>app.sevelte</div>
  <SwitchLang />
    <Content />
 
  {/key}
</div>

<style>
</style>
