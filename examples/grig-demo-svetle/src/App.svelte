<script lang="ts">
  import Content from "./components/Content.svelte";
  import SwitchLang from "./components/SwitchLang.svelte";
  import { tMessages } from "./lang/init";
  const t = tMessages();
</script>

<div class="app card">
  <div>app.svelte</div>
  <SwitchLang />
  <Content />
</div>

<style>
</style>
