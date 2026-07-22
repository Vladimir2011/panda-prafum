<script setup lang="ts">
import { navigationItems } from '~/data/navigation'

const open = defineModel<boolean>('open', { required: true })
</script>

<template>
  <USlideover
    v-model:open="open"
    title="Каталог"
    description="Разделы магазина Panda Parfum"
    side="left"
    :ui="{
      content: 'h-dvh w-screen max-w-none rounded-none',
      header: 'min-h-16 px-4',
      body: 'px-3 py-4 pb-[calc(5.25rem+env(safe-area-inset-bottom))]',
      close: 'top-2.5 right-3 rounded-lg',
    }"
  >
    <template #body>
      <nav aria-label="Меню каталога">
        <ul class="grid gap-1">
          <li v-for="item in navigationItems" :key="item.label">
            <NuxtLink
              :to="item.href"
              class="flex min-h-14 items-center gap-4 rounded-xl px-4 py-3 text-base font-semibold transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-brand-700"
              :class="item.accent ? 'text-brand-700' : 'text-stone-800'"
              @click="open = false"
            >
              <span
                class="grid size-10 shrink-0 place-items-center rounded-full"
                :class="item.accent ? 'bg-brand-50' : 'bg-stone-100'"
              >
                <UIcon
                  :name="item.icon"
                  class="block size-5 shrink-0 text-current"
                  aria-hidden="true"
                />
              </span>
              {{ item.label }}
              <UIcon name="i-lucide-chevron-right" class="ml-auto size-5" aria-hidden="true" />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </template>
  </USlideover>
</template>
