import Content from "./components/Content";

import "./App.css";

import SwitchLang from "./components/SwitchLang";
import { GrigProvider } from "./lang/init";


function App() {
    return (
        <GrigProvider>
            <div className="app card">
                <div>app.tsx</div>
                <SwitchLang />
                <Content />
            </div>
        </GrigProvider>
    );
}

export default App;
