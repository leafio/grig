import Content from "./components/Content";
import { GrigContextWrapper } from "grig/react";
import "./App.css";

import { getLang, setLang } from "./lang/init";
import SwitchLang from "./components/SwitchLang";

function App() {
    return (
        <>
            <GrigContextWrapper grigGetLang={getLang} grigSetLang={setLang}>
                <div className="app card">
                    <div>app.tsx</div>
                    <SwitchLang />
                    <Content />
                  
                </div>

            </GrigContextWrapper>
        </>
    );
}

export default App;
