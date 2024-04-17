const LOCALE_EN = 'en'
// const LOCALE_ZH = 'zh-Hans'
// In order to maintain consistency with the online site (which is good for SEO), 
// continue to use the `zh`.
const LOCALE_ZH = 'zh'

export const locale_config = {
  locales: [LOCALE_EN, LOCALE_ZH],
  default: LOCALE_EN,
  fallback: {
    [LOCALE_ZH]: LOCALE_EN
  },
  locale_list: [{
    locale: LOCALE_EN,
    label: 'English'
  }, {
    locale: LOCALE_ZH,
    label: '中文'
  }],
} as const

