<script setup lang="ts">
import { demoCartItems } from '~/data/cart'
import { formatCurrency } from '~/utils/currency'

const { mode = 'popover' } = defineProps<{
  mode?: 'popover' | 'panel'
}>()

const emit = defineEmits<{
  close: []
}>()

const toast = useToast()
const itemsCount = computed(() => demoCartItems.reduce((total, item) => total + item.quantity, 0))
const totalPrice = computed(() =>
  demoCartItems.reduce((total, item) => total + item.price * item.quantity, 0),
)

function checkout() {
  emit('close')
  toast.add({
    title: 'Корзина работает в демо-режиме',
    description: 'Оформление заказа добавим после подключения backend.',
    color: 'info',
    icon: 'i-lucide-shopping-bag',
  })
}
</script>

<template>
  <section
    class="flex min-h-0 flex-col"
    :class="mode === 'panel' ? 'h-full' : ''"
    aria-labelledby="mini-cart-title"
  >
    <div class="flex shrink-0 items-center justify-between border-b border-stone-100 px-5 py-4">
      <div>
        <h2 id="mini-cart-title" class="text-lg font-bold text-stone-950">Корзина</h2>
        <p class="text-sm text-stone-500">{{ itemsCount }} товара</p>
      </div>
      <UButton
        color="neutral"
        variant="ghost"
        icon="i-lucide-x"
        class="rounded-lg"
        aria-label="Закрыть корзину"
        @click="emit('close')"
      />
    </div>

    <ul
      class="divide-y divide-stone-100 px-5"
      :class="mode === 'panel' ? 'flex-1 overflow-y-auto' : ''"
    >
      <li v-for="item in demoCartItems" :key="item.id" class="flex gap-4 py-4">
        <div
          class="grid size-20 shrink-0 place-items-center rounded-xl bg-linear-to-br"
          :class="item.colorClass"
          aria-hidden="true"
        >
          <UIcon name="i-lucide-sparkles" class="size-7 text-stone-700/70" />
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-xs font-semibold tracking-wide text-stone-500 uppercase">
            {{ item.brand }}
          </p>
          <h3 class="mt-1 truncate font-bold text-stone-950">{{ item.name }}</h3>
          <p class="mt-1 text-sm text-stone-500">{{ item.variant }}</p>
          <div class="mt-2 flex items-center justify-between gap-3">
            <span class="text-sm text-stone-500">{{ item.quantity }} шт.</span>
            <strong class="text-sm text-stone-950">{{ formatCurrency(item.price) }}</strong>
          </div>
        </div>
      </li>
    </ul>

    <div class="shrink-0 bg-stone-50 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
      <div class="mb-4 flex items-baseline justify-between gap-4">
        <span class="font-semibold text-stone-600">Итого</span>
        <strong class="text-xl text-stone-950">{{ formatCurrency(totalPrice) }}</strong>
      </div>
      <UButton size="xl" block icon="i-lucide-credit-card" @click="checkout">
        Оформить заказ
      </UButton>
    </div>
  </section>
</template>
