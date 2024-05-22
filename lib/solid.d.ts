import { type AllPaths, type GetParams, type GetValue } from "./common";
export declare const createGrigSolid: <N>(config: {
    lang: string;
    fallbackLang: string;
}, globalMessages?: Record<string, N> | undefined) => {
    tMessages: <P>(messages?: Record<string, P> | undefined) => <ID extends AllPaths<P> | AllPaths<N>>(id: ID, ...arg: GetParams<GetValue<P, ID> | GetValue<N, ID>>) => string;
    addMessages: (messages?: Record<string, any>) => void;
    lang: import("solid-js").Accessor<string>;
    setLang: import("solid-js").Setter<string>;
};
