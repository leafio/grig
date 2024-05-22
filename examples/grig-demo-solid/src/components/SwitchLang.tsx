import { lang, setLang, tMessages } from "../lang/init";

const SwitchLang = () => {
  const t = tMessages({
    zh: {
      lang: "中文",
    },
    en: {
      lang: "English",
    },
  });
  return (
    <div class="lang-switch card">
      <div>child: SwitchLang.tsx</div>
      <button
        onClick={() => {
          setLang(lang() === "en" ? "zh" : "en");
        }}
      >
        {lang()} {t("lang")}
      </button>
    </div>
  );
};
export default SwitchLang;
