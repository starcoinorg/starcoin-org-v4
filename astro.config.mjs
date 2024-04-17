import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import yaml from '@rollup/plugin-yaml';

import { locale_config } from './src/i18n/config';


// https://astro.build/config
export default defineConfig({
  site: 'https://starcoin.org/',
  integrations: [
    react()
  ],
  vite: {
    plugins: [yaml()]
  },
  i18n: {
    defaultLocale: locale_config.default,
    locales: locale_config.locales,
    fallback: locale_config.fallback,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    }
  }
});