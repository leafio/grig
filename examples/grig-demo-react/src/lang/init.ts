import { createGrig } from "grig";
import { useGrigContext } from "grig/react";
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


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useMessages<const T extends Record<string, any> | undefined>(messages?: T) {
    useGrigContext();
    type P = T extends Record<string, infer P> ? P : T
    return tMessages(messages as Record<string, P>)
}

