<script setup lang="ts">
import { demoCartItems } from '~/data/cart'

const open = defineModel<boolean>('open', { required: true })
const itemsCount = computed(() => demoCartItems.reduce((total, item) => total + item.quantity, 0))
</script>

<template>
  <UPopover
    v-model:open="open"
    :content="{ align: 'end', side: 'bottom', sideOffset: 12 }"
    :ui="{ content: 'w-[min(25rem,calc(100vw-1.5rem))] rounded-2xl p-0' }"
  >
    <UButton
      color="neutral"
      variant="ghost"
      size="xl"
      class="px-3"
      :aria-label="`Открыть корзину, ${itemsCount} товара`"
    >
      <span class="relative" aria-hidden="true">
        <UIcon name="i-lucide-shopping-bag" class="block size-6" />
        <span
          class="absolute -top-2 -left-2 grid min-w-5 place-items-center rounded-full bg-brand-600 px-1 text-[0.68rem] leading-5 font-bold text-white"
        >
          {{ itemsCount }}
        </span>
      </span>
      <span class="hidden xl:inline">Корзина</span>
    </UButton>

    <template #content="{ close }">
      <HeaderCartContent @close="close" />
    </template>
  </UPopover>
</template>
