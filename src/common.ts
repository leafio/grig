export const formatString = (str: string, obj: Record<string, any>) => {
    if (str.indexOf("{") === -1) {
        return str;
    }
    let result = str;
    const pattern = /\{(.*?)\}/g;
    const matches = str.match(pattern);
    if (matches)
        matches.forEach((word) => {
            if (word.length > 2) {
                const key = word.slice(1, word.length - 1);
                result = result.replace(new RegExp(word, "gm"), obj[key] ?? "");
            }
        });
    return result;
};

export type AllPaths<T> = T extends {} // 如果 T 是一个对象类型
    ? {
        [K in keyof T]-?: K extends string // 对于 T 中的每个属性 K，如果 K 是字符串类型
        ?
        | T[K] extends string ? `${K}` : // 将 K 转换成字符串字面量类型
        | T[K] extends (...args: any) => any ? `${K}` :
        | `${K}.${AllPaths<T[K]> extends string
        ? AllPaths<T[K]>
        : never}` // 递归地获取 T[K] 的所有路径，并将它们拼接在 K 后面
        : never; // 否则返回 never 类型（表示不存在）
    }[keyof T] // 最后将所有属性的结果合并为联合类型
    : never; // 如果 T 不是一

// .链式key值 如{a:{b:{c:3}}} 转换成 {a.b.c:3}
export const flatTreeKey = (
    obj: Record<string, any>,
    curKey = "",
    result: Record<string, any> = {}
) => {
    for (const key of Object.keys(obj)) {
        // console.log(e)(key, curKey);
        const new_key = `${curKey ? curKey + "." : ""}${key}`;
        if (typeof obj[key] !== "object") {
            result[new_key] = obj[key];
        } else {
            flatTreeKey(obj[key], new_key, result);
        }
    }
    return result;
};


export type GetValue<data, path> = path extends `${infer Key}.${infer Right}` ? (Key extends keyof data ? GetValue<data[Key], Right> : never) : path extends keyof data ? data[path] : never

export type GetParamsOfStr<Str> = Str extends `${string}{${infer Key}}${infer Right}` ? | `${Key}` | GetParamsOfStr<`${Right}`> : never
export type OptionParams<Params> = Partial<Params> extends Params
    ? [obj?: Params]
    : [obj: Params]
export type GetParamsOfFun<Fun extends (...args: any) => any> = Parameters<Fun>
export type GetParams<T>=T extends (...args: any) =>any ?GetParamsOfFun<T>: OptionParams<{
    [key in GetParamsOfStr<T>]: string | number;
  }>
