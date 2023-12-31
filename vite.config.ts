import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import dts from "vite-plugin-dts";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            // rollupTypes: true,
        }),
    ],
    build: {
        // 打包输出的目录
        outDir: "lib",
        // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制
        cssTarget: "chrome61",
        lib: {
            // 组件库源码的入口文件
            entry: [resolve("src/index"), resolve("src/vue"), resolve("src/react")],
            // 组件库名称
            name: "grig",
            // // 文件名称, 打包结果举例: my-packages.umd.cjs
            // fileName: "index",
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ["react", "react-dom", "vue"],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'vue',
                    react: "react",
                    "react-dom": "react-dom",
                },
            },
        },
    },define: { 'process.env.NODE_ENV': '"production"' }
});
