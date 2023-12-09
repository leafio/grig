import { getLang, setLang, tMessages } from "../lang/init";

const SwitchLang = () => {
    const t = tMessages({
        zh: { lang: "中文", }, en: { lang: "English", },
    });
    return (
        <div className="lang-switch card">
            <div>child: SwitchLang.tsx</div>
            <button
                onClick={() => {
                    setLang(getLang() === "en" ? "zh" : "en");
                }}
            >
                {getLang()} {t("lang")}
            </button>
        </div>
    );
};
export default SwitchLang;


