<script lang="ts">
    import { tMessages, lang } from "../lang/init";

    const t = tMessages({
        zh: { lang: "中文", }, en: { lang: "English", },
    });
  </script>
  
  <div class="lang-switch card">
    <div>child: SwitchLang.svelte</div>
    <button
        on:click={() => {
            lang.update(_lang=>(_lang=== "en" ? "zh" : "en"));
        }}
    >
        {$lang} {$t("lang")}
    </button>
</div>
  