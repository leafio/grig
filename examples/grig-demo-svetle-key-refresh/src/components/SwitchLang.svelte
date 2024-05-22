<script lang="ts">
    import { tMessages, setLang, getLang } from "../lang/init";

    const t = tMessages({
        zh: { lang: "中文", }, en: { lang: "English", },
    });
  </script>
  
  <div class="lang-switch card">
    <div>child: SwitchLang.svelte</div>
    <button
        on:click={() => {
            setLang(getLang() === "en" ? "zh" : "en");
        }}
    >
        {getLang()} {t("lang")}
    </button>
</div>
  