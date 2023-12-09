**grig**：轻量易用的 i18n 库，含 TS 智能提示。  
 **grig**: a lightweight and easy-to-use i18n library, with TS **smart prompts**
![截图](https://raw.githubusercontent.com/leafio/grig/main/snap.png "snap.png")
<!-- ![截图](./snap.png "snap.png") -->

- [直接使用 Use as a formatter](#直接使用-use-as-a-formatter)
- [通用用法 General Instance Usage](#通用用法-general-instance-usage)
  - [1.创建 grig 实例 (Create a grig Instance)](#1创建grig实例-create-a-grig-instance)
  - [2.在任意组件中使用 (Use it anywhere)](#2在任意组件中使用-use-it-anywhere)
  - [3.切换语言 (Switch the lang)](#3切换语言-switch-the-lang)
  - [4.通过 key 刷新 DOM (Refresh DOM by key)](#4通过key刷新dom--refresh--dom-by-key)
- [Vue3](#vue3)
- [React](#react)
- [安装 Installation](#安装-installation)
- [示例代码 Demos](#代码示例-demos)
  - react
  - vue
  - general

#### 直接使用 Use as a formatter

```typescript
import { grig } from "grig";
const message = {
  name: "姓名",
  form: { status: "状态" },
  welcome: "欢迎来到{city}！",
  own: (count: number) => `我有${count}个苹果`,
} as const;
const t = grig(message);
console.log(t("name")); // 姓名
console.log(t("form.status")); // 状态
console.log(t("welcome", { city: "上海" })); // 欢迎来到上海！
console.log(t("own", 2)); //我有2个苹果
```

#### 通用用法 General Instance Usage

###### 1.创建 grig 实例 (Create a grig Instance)

```typescript
//./lang/init
import { createGrig } from "grig";
const zh_global = { g_welcome: "全局_欢迎" } as const;
const en_global = { g_welcome: "Global Welcome" } as const;
const global_messages = { zh: zh_global, en: en_global };
export const {
  tMessages,
  addLangChangeCallback,
  removeLangChangeCallback,
  getLang,
  setLang,
} = createGrig({ lang: "zh", fallbackLang: "en" }, global_messages);
```

###### 2.在任意组件中使用 (Use it anywhere)

```tsx
import { useState } from "react";
import { tMessages } from "../lang/init";
export function Content() {
  const t = tMessages({
    zh: { world: "世界" },
    en: { world: "World" },
  });
  return (
    <div className="content card">
      <div>child: Content.tsx</div>
      <span>{t("g_welcome")}</span>
      <span>{t("world")}</span>
    </div>
  );
}
```

###### 3.切换语言 (Switch the lang)

```tsx
import { getLang, setLang, tMessages } from "../lang/init";
export default function SwitchLang() {
  const t = tMessages({
    zh: { lang: "中文" },
    en: { lang: "English" },
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
}
```

###### 4.通过 key 刷新 DOM (Refresh DOM by key)

```tsx
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
```

#### Vue3

```typescript
import { createGrigVue } from "grig/vue";
```

#### React

```typescript
import { GrigContextWrapper, useGrigContext ,createGrig } from "grig/react";
```

#### 代码示例 Demos
```bash
npx degit https://github.com/leafio/grig/examples grig-examples
```

#### 安装 Installation

```bash
npm install grig
```