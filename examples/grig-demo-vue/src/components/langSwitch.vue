<template>
    <div class="lang-switch card">
        <div>child:   langSwitch.vue</div>
        <button @click="handleToggle">{{ t("lang") }} {{ lang }}</button>
    </div>
</template>
<script setup lang="ts">
import { lang, tMessages } from "../lang";

const handleToggle = () => {
    if (lang.value == "zh") {
        lang.value = "en";
    } else {
        lang.value = "zh";
    }
};
const t = tMessages({
    zh: {
        lang: "中文",
    },
    en: {
        lang: "English",
    },
});
</script>
<style>
.lang-switch{
    background-color: lightpink;
    text-align: right;
}</style>
