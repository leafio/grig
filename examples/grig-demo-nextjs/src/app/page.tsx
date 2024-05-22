
'use client'
import Content from "@/components/Content";



import SwitchLang from "@/components/SwitchLang";
import { GrigProvider } from "@/lang/init";;

export default function Home() {
  return (
    <GrigProvider>
    <div className="app card ">
        <div>app.tsx</div>
        <SwitchLang />
        <Content />
    </div>
</GrigProvider>
  );
}
