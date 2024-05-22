import {
    AllPaths,
    GetParams,
    GetValue,
    combineMessages,
    flatMessages,
    formatObjKey,
} from "./common";
import { ref } from "vue";

export const createGrigVue = <N>(
    config: {
        lang: string;
        fallbackLang: string;
    },
    globalMessages?: Record<string, N>
) => {
    const _lang = ref("");
    const _fallback_lang = ref("");
    const _messages: Record<string, any> = {};
    const addMessages = (messages?: Record<string, any>) => {
      combineMessages(_messages, messages);
    };
    _lang.value = config.lang;
    _fallback_lang.value = config.fallbackLang;
    addMessages(globalMessages);
    const tMessages = <P>(messages?: Record<string, P>) => {
        const flat_messages = flatMessages(messages);
        addMessages(messages);
        return ((id: string, ...obj: any) => {
            const lang_messages = {
                ..._messages[_fallback_lang.value],
                ...flat_messages[_fallback_lang.value],
                ..._messages[_lang.value],               
                ...flat_messages[_lang.value],
            };
            // console.log('lang-messages',lang_messages)
            return formatObjKey(lang_messages, id, ...obj);
        }) as <ID extends AllPaths<P> | AllPaths<N>>(
            id: ID,
            ...arg: GetParams<GetValue<P, ID> | GetValue<N, ID>>
        ) => string;
    };
    return {
        tMessages,
        lang: _lang,
        addMessages,
    };
};
