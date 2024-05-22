import { ReactNode } from "react";
export declare function createGrigReact<N>(config: {
    lang: string;
    fallbackLang: string;
}, globalMessages?: Record<string, N>): {
    useMessages: <const T extends Record<string, any>>(messages?: T | undefined) => <ID extends import("./common").AllPaths<T extends Record<string, infer P> ? P : T> | import("./common").AllPaths<N>>(id: ID, ...arg: import("./common").GetParams<import("./common").GetValue<T extends Record<string, infer P> ? P : T, ID> | import("./common").GetValue<N, ID>>) => string;
    useGrigContext: () => {
        lang: string;
        setLang: (lang: string) => void;
    };
    GrigProvider: ({ children }: {
        children: ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    tMessages: <P>(messages?: Record<string, P> | undefined) => <ID extends import("./common").AllPaths<N> | import("./common").AllPaths<P>>(id: ID, ...arg: import("./common").GetParams<import("./common").GetValue<P, ID> | import("./common").GetValue<N, ID>>) => string;
    addLangChangeCallback: (name: string, callback: (lang: string) => void) => void;
    removeLangChangeCallback: (name: string) => void;
    addMessages: (messages?: Record<string, any> | undefined) => void;
    getLang: () => string;
};
