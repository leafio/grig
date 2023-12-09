<template>
    <div class="content card">
        <div>child: content.vue</div>
        <div>{{ t("g_welcome") }}</div>

        <div class="state card">
            <div>{{t('keepState')}}</div>
            <div>
                {{t('appleNum')}}:
                <input type="number" v-model="appleNum" min="0" max="10" />
            </div>
            <div>{{ t("own", appleNum) }}</div>
        </div>

        <select>
            <option v-for="item in options">{{ item.label }}</option>
        </select>

        <div>{{ t("eat", 1, 2) }}</div>
        <div>{{ t("eat", 2, 3) }}</div>
    </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { tMessages } from "../lang";
import { ref } from "vue";
const appleNum = ref(1);
const t = tMessages({
    zh: {
        world: "世界",
        appleNum:'苹果的数量',
        keepState: '保持状态',
        list: {
            apple: "苹果",
            orange: "橘子",
            pear: "梨",
        },
        own: (count: number) => `我有${count}个苹果`,
        eat: (appleNum: number, pearNum: number) =>
            `我吃了${appleNum}个苹果和${pearNum}个梨`,
    },
    en: {
        world: "World",
        appleNum:'The quantity of apples',
        keepState: 'Keep state',
        list: {
            apple: "Apple",
            orange: "Orange",
            pear: "Pear",
        },
        own: (count: number) =>
            count === 0
                ? "I have no apples"
                : count === 1
                ? "I have an apple"
                : `I have ${count} apples`,
        eat: (appleNum: number, pearNum: number) => {
            return (
                (appleNum === 1
                    ? "I have an apple"
                    : `I have ${appleNum} apples`) +
                " and " +
                (appleNum === 1 ? "a pear" : ` ${pearNum} pears`)
            );
        },
    },
});
console.log(t("own", 1));
const options = computed(() => [
    {
        label: t("list.apple"),
        value: 0,
    },
    {
        label: t("list.orange"),
        value: 1,
    },
    {
        label: t("list.pear"),
        value: 2,
    },
]);
</script>
<style>
.content {
    background-color: aquamarine;
}
.state {
    background-color: darksalmon;
}
</style>
