import { useState } from "react";
import { useMessages } from "../lang/init";

export default function Content() {
    const t = useMessages({
        zh: {
            world: "世界",
            appleNum: "苹果的数量",
            keepState: "保持状态",
            list: {
                apple: "苹果",
                orange: "橘子",
                pear: "梨",
            },
            own: (count: number) => `我有${count}个苹果`,
            eat: (appleNum: number, pearNum: number) =>
                `我吃了${appleNum}个苹果和${pearNum}个梨`,
        },
        en: {
            world: "World",
            appleNum: "The quantity of apples",
            keepState: "Keep state",
            list: {
                apple: "Apple",
                orange: "Orange",
                pear: "Pear",
            },
            own: (count: number) =>
                count === 1 ? "I have an apple" : `I have ${count} apples`,
            eat: (appleNum: number, pearNum: number) => {
                return (
                    (appleNum === 1
                        ? "I have an apple"
                        : `I have ${appleNum} apples`) +
                    " and " +
                    (pearNum === 1 ? "a pear" : ` ${pearNum} pears`)
                );
            },
        },
    });

    const options = [
        {
            label: t("list.apple"),
            value: 0,
        },
        {
            label: t("list.orange"),
            value: 1,
        },
        {
            label: t("list.pear"),
            value: 2,
        },
    ];

    const [appleNum, setAppleNum] = useState(1);
    return (
        <div className="content card">
            <div>child: Content.tsx</div>
            <span>{t("g_welcome")}</span>

            <div className="state card">
                <div>{t("keepState")}</div>
                <div>
                    {t("appleNum")}:
                    <input
                        type="number"
                        value={appleNum}
                        onChange={(e) => setAppleNum(Number(e.target.value))}
                        min="0"
                        max="10"
                    />
                </div>
                <div>{t("own", appleNum)}</div>
            </div>

            <div>{t("eat", 1, 2)}</div>
            <select>
                {options.map((p) => (
                    <option v-for="item in options">{p.label}</option>
                ))}
            </select>
        </div>
    );
}
