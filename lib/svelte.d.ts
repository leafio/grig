/// <reference types="svelte" />
import { type AllPaths, type GetParams, type GetValue } from "./common";
import { type Readable } from "svelte/store";
export declare const createGrigSvelte: <N>(config: {
    lang: string;
    fallbackLang: string;
}, globalMessages?: Record<string, N> | undefined) => {
    tMessages: <P>(messages?: Record<string, P> | undefined) => Readable<(<ID extends AllPaths<N> | AllPaths<P>>(id: ID, ...arg: GetParams<GetValue<P, ID> | GetValue<N, ID>>) => string)>;
    addMessages: (messages?: Record<string, any>) => void;
    lang: import("svelte/store").Writable<string>;
};
