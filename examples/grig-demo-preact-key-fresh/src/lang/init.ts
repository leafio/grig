import { createGrig } from "grig";
const zh_global = {
    g_welcome: "全局_欢迎",
} as const 
const en_global = {
    g_welcome: "Global Welcome",
} as const
const global_messages = {
    zh: zh_global,
    en: en_global,
}
export const {
    tMessages,
    addLangChangeCallback,
    removeLangChangeCallback,
    getLang,
    setLang,
} = createGrig({ lang: "zh", fallbackLang: "en" }, global_messages);



