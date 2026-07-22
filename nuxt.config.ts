import tailwindcss from '@tailwindcss/vite'
import { defineOrganization } from 'nuxt-schema-org/schema'

const siteUrl = process.env.NUXT_SITE_URL || 'https://panda-parfum.example'

export default defineNuxtConfig({
  compatibilityDate: '2026-07-22',

  devtools: {
    enabled: true,
  },

  modules: ['@nuxtjs/seo', '@nuxt/fonts', '@nuxt/eslint'],

  fonts: {
    provider: 'google',
    families: [
      {
        name: 'Cormorant Garamond',
        provider: 'google',
        weights: [500, 600, 700],
        styles: ['normal'],
        subsets: ['cyrillic', 'latin'],
        global: true,
      },
      {
        name: 'Manrope',
        provider: 'google',
        weights: [400, 500, 600, 700],
        styles: ['normal'],
        subsets: ['cyrillic', 'latin'],
        global: true,
      },
    ],
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  typescript: {
    strict: true,
    // Vite 8 dev overlay is currently incompatible with vite-plugin-checker.
    // Keep dev fast and run the same strict check through `pnpm typecheck` and CI.
    typeCheck: false,
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '',
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#7f2942' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  site: {
    url: siteUrl,
    name: 'Panda Parfum',
    description: 'Интернет-магазин оригинальной парфюмерии и косметики.',
    defaultLocale: 'ru',
    indexable: process.env.NUXT_SITE_INDEXABLE === 'true',
    trailingSlash: false,
  },

  robots: {
    blockNonSeoBots: true,
  },

  sitemap: {
    zeroRuntime: true,
    exclude: ['/cart', '/checkout', '/favorites', '/search'],
  },

  schemaOrg: {
    identity: defineOrganization({
      name: 'Panda Parfum',
      url: siteUrl,
    }),
  },

  ogImage: {
    enabled: false,
  },

  routeRules: {
    '/': { prerender: true },
    '/cart': { robots: 'noindex, nofollow', sitemap: false },
    '/checkout': { robots: 'noindex, nofollow', sitemap: false },
    '/favorites': { robots: 'noindex, nofollow', sitemap: false },
    '/search': { robots: 'noindex, follow', sitemap: false },
  },
})
