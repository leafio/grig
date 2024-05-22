import { createSignal } from "solid-js";
import {
  type AllPaths,
  type GetParams,
  type GetValue,
  combineMessages,
  flatMessages,
  formatObjKey,
} from "./common";

export const createGrigSolid = <N>(
  config: {
    lang: string;
    fallbackLang: string;
  },
  globalMessages?: Record<string, N>
) => {
  // let _lang = "";
  let _fallback_lang = "";
  const _messages: Record<string, any> = {};
  const addMessages = (messages?: Record<string, any>) => {
    combineMessages(_messages, messages);
  };
  const [lang, setLang] = createSignal(config.lang ?? "");
  // _lang = config.lang;
  _fallback_lang = config.fallbackLang;
  addMessages(globalMessages);


  const tMessages =<P>(messages?: Record<string, P>) => {
    const flat_messages = flatMessages(messages);
    // console.log('flat_messages',flat_messages)
    return ((id: string, ...obj: any) => {
      const lang_messages = {
        ..._messages[_fallback_lang],
        ...flat_messages[_fallback_lang],
        ..._messages[lang()],
        ...flat_messages[lang()],
      };
      // console.log('lang-messages',lang_messages)
      return formatObjKey(lang_messages, id, ...obj);
    }) as <ID extends AllPaths<P> | AllPaths<N>>(
      id: ID,
      ...arg: GetParams<GetValue<P, ID> | GetValue<N, ID>>
    ) => string;
  };

  return {
   
    tMessages,
    addMessages,
    lang,
    setLang,
  };
};
