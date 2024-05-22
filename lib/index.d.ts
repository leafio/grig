import { AllPaths, GetParams, GetValue } from "./common";
export declare const grig: <const T extends Record<string, any>>(messages: T) => <ID extends AllPaths<T>>(id: ID, ...arg: GetParams<GetValue<T, ID>>) => string;
export declare const createGrig: <N>(config: {
    lang: string;
    fallbackLang: string;
}, globalMessages?: Record<string, N> | undefined) => {
    tMessages: <P>(messages?: Record<string, P> | undefined) => <ID extends AllPaths<P> | AllPaths<N>>(id: ID, ...arg: GetParams<GetValue<P, ID> | GetValue<N, ID>>) => string;
    addMessages: (messages?: Record<string, any>) => void;
    addLangChangeCallback: (name: string, callback: (lang: string) => void) => void;
    removeLangChangeCallback: (name: string) => void;
    getLang: () => string;
    setLang: (value: string) => void;
};
