<script setup lang="ts">
interface StoreBenefit {
  title: string
  description: string
  icon: string
  metric: string
}

interface CustomerReview {
  name: string
  initials: string
  text: string
  date: string
  dateTime: string
  accentClass: string
}

const title = 'Panda Parfum — оригинальная парфюмерия и косметика'
const description =
  'Panda Parfum — интернет-магазин оригинальной парфюмерии с проверенным ассортиментом, честными ценами и бережной доставкой.'

const benefits: StoreBenefit[] = [
  {
    title: 'Надёжность',
    description:
      'Работаем только с проверенными поставщиками и внимательно контролируем каждую поставку. Вы получаете оригинальный товар с понятной историей происхождения.',
    icon: 'i-lucide-shield-check',
    metric: '100% оригинальная продукция',
  },
  {
    title: 'Выбор с характером',
    description:
      'Собираем в одном каталоге легендарные ароматы, новинки и нишевые композиции. Коллекция регулярно пополняется интересными находками.',
    icon: 'i-lucide-sparkles',
    metric: 'Популярные и нишевые бренды',
  },
  {
    title: 'Честные цены',
    description:
      'Онлайн-формат помогает нам не переплачивать за торговые площади. Экономию направляем в выгодные цены, сервис и бережную упаковку заказов.',
    icon: 'i-lucide-badge-percent',
    metric: 'Без лишних наценок',
  },
]

const reviews: CustomerReview[] = [
  {
    name: 'Мария Волкова',
    initials: 'МВ',
    text: 'Заказывала аромат в подарок. Всё пришло аккуратно упакованным, флакон и коробка в идеальном состоянии. Особенно понравилось, что заказ привезли точно в выбранный день.',
    date: '18 июля 2026',
    dateTime: '2026-07-18',
    accentClass: 'from-brand-100 to-rose-50 text-brand-800',
  },
  {
    name: 'Анна Лебедева',
    initials: 'АЛ',
    text: 'Первый заказ в Panda Parfum оставил отличное впечатление. Быстро нашла любимый аромат, оформление заняло пару минут, а доставка оказалась даже быстрее ожидаемого.',
    date: '17 июля 2026',
    dateTime: '2026-07-17',
    accentClass: 'from-violet-100 to-brand-50 text-violet-800',
  },
  {
    name: 'Никита Орлов',
    initials: 'НО',
    text: 'Брал два аромата — себе и жене. Консультант помог определиться с объёмом, упаковка надёжная, оба аромата стойкие. Обязательно вернусь за новинками.',
    date: '16 июля 2026',
    dateTime: '2026-07-16',
    accentClass: 'from-cyan-100 to-stone-50 text-cyan-900',
  },
  {
    name: 'Светлана Романова',
    initials: 'СР',
    text: 'Долго искала этот аромат в нужном объёме и нашла здесь. Понравились понятные описания и спокойное оформление заказа. Получила всё вовремя, аромат оригинальный.',
    date: '14 июля 2026',
    dateTime: '2026-07-14',
    accentClass: 'from-amber-100 to-orange-50 text-amber-900',
  },
  {
    name: 'Илья Соколов',
    initials: 'ИС',
    text: 'Выбирал парфюм без затеста и ориентировался на описание нот. Попадание получилось точным. Отдельный плюс за надёжную упаковку и аккуратную доставку.',
    date: '12 июля 2026',
    dateTime: '2026-07-12',
    accentClass: 'from-emerald-100 to-teal-50 text-emerald-900',
  },
  {
    name: 'Екатерина Миронова',
    initials: 'ЕМ',
    text: 'Заказываю уже второй раз. Удобно сравнивать объёмы, цены и быстро находить нужный бренд. Оба заказа приехали без задержек, обязательно буду пользоваться магазином дальше.',
    date: '10 июля 2026',
    dateTime: '2026-07-10',
    accentClass: 'from-sky-100 to-indigo-50 text-sky-900',
  },
]

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
  <div class="overflow-hidden bg-white">
    <section
      class="relative isolate border-b border-stone-200 bg-stone-50/80 py-16 sm:py-20 lg:py-24"
    >
      <div
        class="absolute top-0 left-1/2 -z-10 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div class="container-page">
        <div class="mx-auto max-w-2xl text-center">
          <UBadge variant="soft" class="mb-4 tracking-[0.16em] uppercase">Наш подход</UBadge>
          <h1 class="font-serif text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            Panda Parfum — это
          </h1>
          <p class="mt-5 text-base leading-7 text-stone-600 sm:text-lg">
            Место, где выбирать парфюмерию приятно, спокойно и по-настоящему интересно.
          </p>
        </div>

        <div class="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
          <article
            v-for="benefit in benefits"
            :key="benefit.title"
            class="group relative overflow-hidden rounded-[18px] border border-stone-200 bg-white p-6 shadow-[0_12px_35px_rgb(28_25_23/0.06)] transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_45px_rgb(103_35_55/0.10)] sm:p-8"
          >
            <div class="flex items-start justify-between gap-5">
              <span
                class="grid size-13 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-700 group-hover:text-white"
              >
                <UIcon :name="benefit.icon" class="block size-6" aria-hidden="true" />
              </span>
              <UIcon
                name="i-lucide-panda"
                class="size-9 text-stone-100 transition-colors group-hover:text-brand-100"
                aria-hidden="true"
              />
            </div>

            <h2 class="mt-7 font-serif text-2xl font-semibold text-stone-950">
              {{ benefit.title }}
            </h2>
            <p class="mt-4 text-sm leading-7 text-stone-600">
              {{ benefit.description }}
            </p>
            <p
              class="mt-7 flex items-center gap-2 border-t border-stone-100 pt-5 text-xs font-bold tracking-wide text-brand-700 uppercase"
            >
              <UIcon name="i-lucide-check" class="size-4" aria-hidden="true" />
              {{ benefit.metric }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="py-16 sm:py-20 lg:py-24" aria-labelledby="reviews-heading">
      <div class="container-page">
        <div class="max-w-2xl">
          <p class="text-sm font-bold tracking-[0.14em] text-brand-700 uppercase">
            Покупатели о нас
          </p>
          <h2
            id="reviews-heading"
            class="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl"
          >
            Отзывы, которыми мы дорожим
          </h2>
          <p class="mt-5 text-base leading-7 text-stone-600">
            Спасибо, что делитесь впечатлениями о заказах, ароматах и нашем сервисе.
          </p>
        </div>

        <UCarousel
          v-slot="{ item: review }"
          :items="reviews"
          arrows
          dots
          :slides-to-scroll="1"
          :ui="{
            container: 'items-stretch',
            item: 'basis-[92%] sm:basis-1/2 lg:basis-1/3',
            prev: 'start-2 sm:-start-5 lg:-start-6 inline-flex size-11 items-center justify-center rounded-full bg-white p-0 shadow-md',
            next: 'end-2 sm:-end-5 lg:-end-6 inline-flex size-11 items-center justify-center rounded-full bg-white p-0 shadow-md',
            dots: '-bottom-9',
            dot: 'size-2.5 data-[state=active]:bg-brand-700',
          }"
          class="mt-12 pb-9"
          aria-label="Отзывы покупателей"
        >
          <article
            class="flex h-full min-h-80 flex-col rounded-[18px] border border-stone-200 bg-stone-50/70 p-6 sm:p-8"
          >
            <div class="flex items-center justify-between gap-4">
              <div class="flex items-center gap-4">
                <span
                  class="grid size-12 shrink-0 place-items-center rounded-full bg-linear-to-br text-sm font-bold ring-4 ring-white"
                  :class="review.accentClass"
                  aria-hidden="true"
                >
                  {{ review.initials }}
                </span>
                <h3 class="font-bold text-stone-950">{{ review.name }}</h3>
              </div>
              <UIcon name="i-lucide-quote" class="size-7 text-brand-200" aria-hidden="true" />
            </div>

            <blockquote class="mt-7 flex-1 text-sm leading-7 text-stone-700">
              «{{ review.text }}»
            </blockquote>
            <time
              :datetime="review.dateTime"
              class="mt-7 border-t border-stone-200 pt-5 text-xs font-semibold text-stone-500"
            >
              {{ review.date }}
            </time>
          </article>
        </UCarousel>
      </div>
    </section>
  </div>
</template>
