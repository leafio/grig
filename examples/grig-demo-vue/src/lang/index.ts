
import { createGrigVue } from "grig/vue";

const zh_global = {
    g_welcome: '全局_欢迎'
}
const en_global = {
    g_welcome: 'Global Welcome'
}
const global_messages = {
    zh: zh_global,
    en: en_global
}
export const { tMessages, lang } =
    createGrigVue({ lang: 'zh', fallbackLang: 'en' }, global_messages)


