<script setup lang="ts">
const title = 'Panda Parfum — оригинальная парфюмерия'
const description = 'Frontend-витрина интернет-магазина оригинальной парфюмерии и косметики.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebPage({
    name: title,
    description,
  }),
])
</script>

<template>
  <section class="relative isolate overflow-hidden">
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(154,52,82,0.18),transparent_45%)]"
    />

    <div
      class="container-page grid min-h-[calc(100vh-10rem)] items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28"
    >
      <div class="max-w-3xl">
        <p class="mb-5 text-sm font-semibold tracking-[0.2em] text-brand-700 uppercase">
          Новый проект
        </p>
        <h1
          class="font-serif text-5xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          Парфюмерная витрина, созданная с вниманием к деталям
        </h1>
        <p class="mt-7 max-w-2xl text-lg leading-8 text-stone-600">
          Основа проекта готова. Следующий этап — дизайн-система, каталог, карточки товаров, поиск,
          фильтры и frontend-сценарии корзины.
        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <a
            href="#foundation"
            class="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-700 px-7 py-3 font-semibold text-white transition-colors hover:bg-brand-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-700"
          >
            Посмотреть основу
          </a>
          <a
            href="https://nuxt.com"
            class="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-300 bg-white px-7 py-3 font-semibold text-stone-900 transition-colors hover:border-stone-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            Документация Nuxt
            <span class="sr-only"> (откроется в новой вкладке)</span>
          </a>
        </div>
      </div>

      <div
        id="foundation"
        class="rounded-3xl border border-stone-200 bg-white/90 p-7 shadow-xl shadow-stone-950/5 backdrop-blur sm:p-9"
      >
        <h2 class="font-serif text-2xl font-semibold">Техническая основа</h2>
        <ul class="mt-6 grid gap-4" aria-label="Подключённые технологии">
          <li
            v-for="item in [
              'Nuxt 4 и Vue 3',
              'Tailwind CSS',
              'Vitest и Nuxt Test Utils',
              'SSR, sitemap, robots и Schema.org',
              'ESLint, TypeScript и GitHub Actions',
            ]"
            :key="item"
            class="flex items-start gap-3 text-stone-700"
          >
            <span
              class="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-brand-100 text-xs font-bold text-brand-800"
              aria-hidden="true"
              >✓</span
            >
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
