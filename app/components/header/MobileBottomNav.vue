<script setup lang="ts">
import { demoCartItems } from '~/data/cart'

const { activePanel = null } = defineProps<{
  activePanel?: 'menu' | 'profile' | 'cart' | null
}>()

const emit = defineEmits<{
  openMenu: []
  openProfile: []
  openCart: []
}>()

const itemsCount = computed(() => demoCartItems.reduce((total, item) => total + item.quantity, 0))
</script>

<template>
  <nav
    class="fixed right-0 bottom-0 left-0 z-50 border-t border-stone-200 bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-3px_16px_rgb(28_25_23/0.09)] lg:hidden"
    aria-label="Мобильная навигация"
  >
    <ul class="grid min-h-17 grid-cols-4">
      <li>
        <NuxtLink
          to="/"
          class="flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-semibold text-brand-700 focus-visible:outline-2 focus-visible:outline-brand-700"
        >
          <UIcon
            name="i-lucide-house"
            class="block size-6 shrink-0 text-current"
            aria-hidden="true"
          />
          Главная
        </NuxtLink>
      </li>
      <li>
        <button
          type="button"
          class="flex min-h-16 w-full flex-col items-center justify-center gap-1 text-xs font-semibold focus-visible:outline-2 focus-visible:outline-brand-700"
          :class="activePanel === 'menu' ? 'text-brand-700' : 'text-stone-600'"
          :aria-expanded="activePanel === 'menu'"
          @click="emit('openMenu')"
        >
          <UIcon
            name="i-lucide-layout-grid"
            class="block size-6 shrink-0 text-current"
            aria-hidden="true"
          />
          Каталог
        </button>
      </li>
      <li>
        <button
          type="button"
          class="flex min-h-16 w-full flex-col items-center justify-center gap-1 text-xs font-semibold focus-visible:outline-2 focus-visible:outline-brand-700"
          :class="activePanel === 'profile' ? 'text-brand-700' : 'text-stone-600'"
          :aria-expanded="activePanel === 'profile'"
          @click="emit('openProfile')"
        >
          <UIcon
            name="i-lucide-user-round"
            class="block size-6 shrink-0 text-current"
            aria-hidden="true"
          />
          Профиль
        </button>
      </li>
      <li>
        <button
          type="button"
          class="flex min-h-16 w-full flex-col items-center justify-center gap-1 text-xs font-semibold focus-visible:outline-2 focus-visible:outline-brand-700"
          :class="activePanel === 'cart' ? 'text-brand-700' : 'text-stone-600'"
          :aria-expanded="activePanel === 'cart'"
          :aria-label="`Корзина, ${itemsCount} товара`"
          @click="emit('openCart')"
        >
          <span class="relative" aria-hidden="true">
            <UIcon name="i-lucide-shopping-cart" class="block size-6 shrink-0 text-current" />
            <span
              class="absolute -top-2 -left-2 grid min-w-5 place-items-center rounded-full bg-brand-600 px-1 text-[0.68rem] leading-5 font-bold text-white"
            >
              {{ itemsCount }}
            </span>
          </span>
          <span aria-hidden="true">Корзина</span>
        </button>
      </li>
    </ul>
  </nav>
</template>
