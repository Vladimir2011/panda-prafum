<script setup lang="ts">
interface FooterLink {
  label: string
  href: string
}

interface PaymentMethod {
  name: string
  src: string
  width: number
}

const serviceLinks: FooterLink[] = [
  { label: 'Доставка и оплата', href: '/?info=delivery' },
  { label: 'Качество и гарантии', href: '/?info=quality' },
  { label: 'Возврат и обмен', href: '/?info=returns' },
  { label: 'Конфиденциальность', href: '/?info=privacy' },
  { label: 'Публичная оферта', href: '/?info=offer' },
  { label: 'Как сделать заказ', href: '/?info=how-to-order' },
  { label: 'Вопросы и ответы', href: '/?info=faq' },
]

const companyLinks: FooterLink[] = [
  { label: 'О магазине', href: '/?info=about' },
  { label: 'Контакты', href: '/?info=contacts' },
  { label: 'Отзывы', href: '/?info=reviews' },
  { label: 'Обратная связь', href: '/?info=feedback' },
  { label: 'Полезные статьи', href: '/?view=articles' },
  { label: 'Новинки', href: '/?view=new' },
]

const paymentMethods: PaymentMethod[] = [
  { name: 'МИР', src: '/payments/mir.png', width: 79 },
  { name: 'Яндекс Пэй', src: '/payments/yapay.png', width: 89 },
  { name: 'ЮMoney', src: '/payments/umoney.png', width: 134 },
  { name: 'СБП', src: '/payments/sbp.png', width: 82 },
  { name: 'SberPay', src: '/payments/sberpay.png', width: 101 },
  { name: 'Visa', src: '/payments/visa.png', width: 69 },
  { name: 'Mastercard', src: '/payments/master.png', width: 58 },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    class="border-t border-stone-200 bg-white pb-[calc(4.25rem+env(safe-area-inset-bottom))] lg:pb-0"
  >
    <div class="container-page py-10 sm:py-12 lg:py-14">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.35fr] lg:gap-16">
        <nav aria-labelledby="footer-service-heading">
          <h2 id="footer-service-heading" class="font-display text-xl text-stone-950">
            Сервис и помощь
          </h2>
          <ul class="mt-5 grid gap-3 text-sm text-stone-600">
            <li v-for="link in serviceLinks" :key="link.label">
              <NuxtLink
                :to="link.href"
                class="inline-flex min-h-6 items-center transition-colors hover:text-brand-700 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <nav aria-labelledby="footer-company-heading">
          <h2 id="footer-company-heading" class="font-display text-xl text-stone-950">
            О компании
          </h2>
          <ul class="mt-5 grid gap-3 text-sm text-stone-600">
            <li v-for="link in companyLinks" :key="link.label">
              <NuxtLink
                :to="link.href"
                class="inline-flex min-h-6 items-center transition-colors hover:text-brand-700 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <section aria-labelledby="footer-contact-heading" class="md:col-span-2 lg:col-span-1">
          <h2 id="footer-contact-heading" class="font-display text-xl text-stone-950">
            Контактная информация
          </h2>
          <address class="mt-5 grid gap-4 text-sm leading-6 text-stone-600 not-italic">
            <p class="flex gap-3">
              <UIcon
                name="i-lucide-map-pin"
                class="mt-1 block size-4 shrink-0 text-brand-700"
                aria-hidden="true"
              />
              <span>г. Москва, ул. Ароматная, д. 12<br />Ежедневно с 09:00 до 21:00</span>
            </p>
            <p class="flex gap-3">
              <UIcon
                name="i-lucide-phone"
                class="mt-1 block size-4 shrink-0 text-brand-700"
                aria-hidden="true"
              />
              <span>
                <a
                  class="font-semibold text-stone-900 transition-colors hover:text-brand-700"
                  href="tel:+78005553535"
                >
                  8 800 555-35-35
                </a>
                <br />Бесплатно по России
              </span>
            </p>
            <p class="flex gap-3">
              <UIcon
                name="i-lucide-mail"
                class="mt-1 block size-4 shrink-0 text-brand-700"
                aria-hidden="true"
              />
              <a
                class="font-semibold text-stone-900 transition-colors hover:text-brand-700"
                href="mailto:hello@pandaparfum.ru"
              >
                hello@pandaparfum.ru
              </a>
            </p>
          </address>
        </section>
      </div>
    </div>

    <div class="border-y border-stone-200 bg-stone-50/80">
      <div class="container-page flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:gap-10">
        <p class="shrink-0 text-sm font-semibold text-stone-700">Принимаем к оплате</p>
        <ul class="flex flex-wrap items-center gap-x-6 gap-y-4" aria-label="Способы оплаты">
          <li v-for="method in paymentMethods" :key="method.name" class="flex h-8 items-center">
            <img
              :src="method.src"
              :alt="method.name"
              :width="method.width"
              height="48"
              loading="lazy"
              decoding="async"
              class="h-8 w-auto object-contain"
            />
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-brand-800 text-brand-50">
      <div
        class="container-page flex flex-col gap-3 py-6 text-xs leading-5 sm:flex-row sm:items-end sm:justify-between"
      >
        <p>© {{ currentYear }} Panda Parfum. Все права защищены.</p>
        <p class="max-w-xl text-brand-100">Информация на сайте не является публичной офертой.</p>
      </div>
    </div>
  </footer>
</template>
