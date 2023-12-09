import { ReactNode, createContext, useState, useContext } from "react";

const grigContext = createContext<{
    lang: string;
    setLang: (lang: string) => void;
}>({
    lang: "",
    setLang: () => { },
});

export const useGrigContext = () => {
    return useContext(grigContext);
};

export function GrigContextWrapper({
    children,
    grigGetLang,
    grigSetLang,
}: {
    children: ReactNode;
    grigGetLang: () => string;
    grigSetLang: (lang: string) => void;
}) {
    const [lang, setLang] = useState(grigGetLang());
    return (
        <grigContext.Provider
            value={{
                lang,
                setLang: (_lang) => {
                    grigSetLang(_lang);
                    setLang(_lang);
                },
            }}
        >
            {children}
        </grigContext.Provider>
    );
}
