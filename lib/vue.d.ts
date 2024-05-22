import { AllPaths, GetParams, GetValue } from "./common";
export declare const createGrigVue: <N>(config: {
    lang: string;
    fallbackLang: string;
}, globalMessages?: Record<string, N> | undefined) => {
    tMessages: <P>(messages?: Record<string, P> | undefined) => <ID extends AllPaths<P> | AllPaths<N>>(id: ID, ...arg: GetParams<GetValue<P, ID> | GetValue<N, ID>>) => string;
    lang: import("vue").Ref<string>;
    addMessages: (messages?: Record<string, any>) => void;
};
