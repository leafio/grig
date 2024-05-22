/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useState, useContext } from "react"
import { createGrig } from "."
export function createGrigReact<N>(
    config: {
        lang: string
        fallbackLang: string
    },
    globalMessages?: Record<string, N>
) {
    const {
        tMessages,
        getLang: grigGetLang,
        setLang: grigSetLang,
        addLangChangeCallback,
        removeLangChangeCallback,
        addMessages,
    } = createGrig(config, globalMessages)
    const grigContext = createContext<{
        lang: string
        setLang: (lang: string) => void
    }>({
        lang: "",
        setLang: () => {},
    })

    const useGrigContext = () => {
        return useContext(grigContext)
    }
    const GrigProvider = ({ children }: { children: ReactNode }) => {
        const [lang, setLang] = useState(grigGetLang())
        return (
            <grigContext.Provider
                value={{
                    lang,
                    setLang: (_lang) => {
                        grigSetLang(_lang)
                        setLang(_lang)
                    },
                }}
            >
                {children}
            </grigContext.Provider>
        )
    }
    const useMessages = <const T extends Record<string, any>>(messages?: T) => {
        useGrigContext()
        type P = T extends Record<string, infer P> ? P : T
        return tMessages(messages as Record<string, P>)
    }
    return {
        useMessages,
        useGrigContext,
        GrigProvider,
        tMessages,
        addLangChangeCallback,
        removeLangChangeCallback,
        addMessages,
        getLang: grigGetLang,
    }
}
