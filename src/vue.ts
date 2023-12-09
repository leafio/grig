import { AllPaths, GetParams, GetValue, flatTreeKey, formatString } from "./common";
import { ref } from "vue";

export const createGrigVue = <N>(
  config: {
    lang: string;
    fallbackLang: string;
  },
  globalMessages?: Record<string, N>
) => {
  const _lang = ref('');
  const _fallback_lang = ref('');
  const _messages: Record<string, any> = {}
  const addMessages = (messages?: Record<string, any>) => {
    if (messages) {
      //第一层语言保留，
      Object.keys(messages).forEach((key) => {
        //后面的拍平合并
        _messages[key] = Object.assign(
          {},
          _messages[key] ?? {},
          flatTreeKey(messages[key])
        );
      });
    }
  };
  _lang.value = config.lang;
  _fallback_lang.value = config.fallbackLang;
  addMessages(globalMessages);
  const tMessages = <P>(messages?: Record<string, P>) => {
    addMessages(messages);
    return ((id: string, ...obj: any) => {
      if (!_messages || !_messages[_lang.value] || !_messages[_fallback_lang.value])
        return "";
      const str =
        _messages[_lang.value][id] || _messages[_fallback_lang.value][id] || id;
      if (!obj.length) return str;
      if (typeof str === 'function') return str(...obj)
      return formatString(str, obj[0])
    }) as (<ID extends AllPaths<P> | AllPaths<N>>(id: ID, ...arg: GetParams<GetValue<P, ID> | GetValue<N, ID>>) => string)
  };
  return {
    tMessages,
    lang: _lang,
    addMessages,
  };
};