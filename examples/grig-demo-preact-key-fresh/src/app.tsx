import "./app.css";
import SwitchLang from "./components/SwitchLang";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import {
    addLangChangeCallback,
    getLang,
    removeLangChangeCallback,
} from "./lang/init";

export function App() {
    const [lang, setLang] = useState(getLang());
    useEffect(() => {
        addLangChangeCallback("langChange", (_lang) => {
            setLang(_lang);
        });
        return () => {
            removeLangChangeCallback("langChange");
        };
    }, []);

    return (
        <>
            <div className="app card" key={lang}>
                <div>app.tsx</div>
                <SwitchLang />
                <Content />
            </div>
        </>
    );
}
