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

function create_trans(locale: LocaleCode = locale_config.default) {
  return t.bind(null, locale)
}

function pick_current_locale(locale?: LocaleCode) {
  let ret: LocaleCode = locale_config.default
  if (!locale) {
    return ret
  }
  if (locale_config.locales.indexOf(locale)) {
    ret = locale
  }
  return ret
}

function set_locale_path(lc: LocaleCode, cur_lc?: LocaleCode) {
  const locales = locale_config.locales
  if (!lc || !locales.includes(lc)) {
    return
  }
  if (cur_lc && cur_lc === lc) {
    return
  }

  let pathname = location.pathname
  const locale_path = `/${lc}`
  const locale_in_path = locales.find(c => pathname.indexOf(`/${c}`) === 0)
  if (locale_in_path) {
    if (locale_in_path === lc) {
      return
    }
    pathname = pathname.replace(`/${locale_in_path}`, locale_path)
  } else if (pathname === '/') {
    pathname = locale_path 
  } else {
    pathname = locale_path + pathname
  }
  
  location.pathname = pathname
}

const I18n = {
  resources: lang_resources,
  config: locale_config,
  pick_current_locale,
  create_trans,
  set_locale_path,
}

export default I18n