const LOCALE_EN = "en";
// const LOCALE_ZH = 'zh-Hans'
// In order to maintain consistency with the online site (which is good for SEO),
// continue to use the `zh`.
const LOCALE_ZH = "zh";

export const locale_config = {
  locales: [LOCALE_EN, LOCALE_ZH],
  default: LOCALE_EN,
  // fallback: {
  //   [LOCALE_ZH]: LOCALE_EN,
  // },
  locale_list: [
    {
      code: LOCALE_EN,
      label: "English",
    },
    {
      code: LOCALE_ZH,
      label: "中文",
    },
  ],
  locale_dict: {
    [LOCALE_EN]: {
      code: LOCALE_EN,
      label: "English",
    },
    [LOCALE_ZH]: {
      code: LOCALE_ZH,
      label: "中文",
    },
  },
} as const;
