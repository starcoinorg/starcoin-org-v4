import { get, template, isString } from 'radash'

import { locale_config } from './config';

import lr_en from './resources/en.yaml';
import lr_zh from './resources/zh.yaml';

export type LocaleCode = typeof locale_config.locales[number]

const lang_resources: Record<LocaleCode, any> = {
  en: lr_en,
  zh: lr_zh
}

/**
 * 
 * @param lng 
 * @param key 
 * @param data 
 * @returns
 * 
 * ```ts
 *  t('home.title') -> '首页'
 *  t('hello_world') -> 'Hello {{world}} !'
 *  t('hello_world', {world: 'World🌍'}) -> 'Hello World🌍 !'
 * ```
 */
function t(
  lng: LocaleCode,
  key: string = '',
  data?: Record<string, string | number>
) {
  let ret: string | number = ''

  const keys = key.split('.')
  if (!keys.length) {
    return ret  
  }
  
  let r = get<string | number>(lang_resources[lng], key)
  
  if (!r && r !== 0 && locale_config.default !== lng) {
    r = get<string | number>(lang_resources[locale_config.default], key)
  }

  if (r || r === 0) {
    ret = r
  }
  
  if (data && isString(ret)) {
    ret = template(ret, data)
  }

  return ret
}

function useTrans(local: LocaleCode = locale_config.default) {
  return t.bind(null, local)
}

const I18n = {
  resources: lang_resources,
  config: locale_config,
  useTrans,
}

export default I18n