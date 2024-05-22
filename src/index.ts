import {
    AllPaths,
    GetParams,
    GetValue,
    combineMessages,
    flatMessages,
    formatObjKey,
} from "./common";

export const grig = <const T extends Record<string, any>>(messages: T) => {
    return ((id: string, ...obj: any) => {
        return formatObjKey(messages, id, ...obj);
    }) as <ID extends AllPaths<T>>(
        id: ID,
        ...arg: GetParams<GetValue<T, ID>>
    ) => string;
};

export const createGrig = <N>(
    config: {
        lang: string;
        fallbackLang: string;
    },
    globalMessages?: Record<string, N>
) => {
    let _lang = "";
    let _fallback_lang = "";
    const _messages: Record<string, any> = {};
    const addMessages = (messages?: Record<string, any>) => {
        combineMessages(_messages, messages);
    };
    _lang = config.lang;
    _fallback_lang = config.fallbackLang;
    addMessages(globalMessages);
    type LangChangeCallback = (lang: string) => void;
    const langChangeCallbacks: {
        name: string;
        callback: LangChangeCallback;
    }[] = [];
    const addLangChangeCallback = (
        name: string,
        callback: LangChangeCallback
    ) => {
        langChangeCallbacks.push({ name, callback });
    };
    const removeLangChangeCallback = (name: string) => {
        langChangeCallbacks.splice(
            langChangeCallbacks.findIndex((l) => l.name == name),
            1
        );
    };

    const getLang = () => {
        return _lang;
    };
    const setLang = (value: string) => {
        _lang = value;
        langChangeCallbacks.forEach((l) => {
            l.callback(value);
        });
    };
    const tMessages = <P>(messages?: Record<string, P>) => {
        const flat_messages = flatMessages(messages);
        // console.log('flat_messages',flat_messages)
        return ((id: string, ...obj: any) => {
            const lang_messages = {
                ..._messages[_fallback_lang],
                ...flat_messages[_fallback_lang],
                ..._messages[_lang],               
                ...flat_messages[_lang],
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
        addMessages,
        addLangChangeCallback,
        removeLangChangeCallback,
        getLang,
        setLang,
    };
};

// const message = {
//     name: "姓名",
//     form: {
//         label: "标签",
//         status: "状态",
//     },
//     welcome: "欢迎来到{city}！",
//     apple: (count: number) => {
//         if (count === 1) return `I have an apple`;
//         return `I have ${count} apples`;
//     },
//     'user.name':'yes {age}',
//     user:{
//         name:'{name}'
//     }
// }  as const
// const t = grig(message);
// t('form.status')
// type R=GetValue<typeof message, 'user.name'>

// const myGrig = createGrig(
//     {
//         lang: "zh",
//         fallbackLang: "zh",
//     },
//     {
//         zh: message,
//         en: {
//             name: "姓名",
//             form: {
//                 label: "标签",
//                 status: "状态",
//             },
//             welcome: "欢迎来到{city}！",
//             apple: (count: number) => {
//                 if (count === 1) return `I have an apple`;
//                 return `I have ${count} apples`;
//             },
//         },
//     } as const
// );
// const t = myGrig.tMessages();
// console.log(t("name")); // 姓名
// console.log(t("form.status")); // 状态
// console.log(t("welcome", { city: 1 })); // 欢迎来到上海！

// console.log(t("apple", 1));
// type test = ((name: string) => string) | ((name: string) => string);
