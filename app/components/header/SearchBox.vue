<script setup lang="ts">
import { demoSearchProducts } from '~/data/search-products'
import { filterSearchProducts } from '~/utils/search-products'
import { formatCurrency } from '~/utils/currency'

const { mode = 'desktop', autofocus = false } = defineProps<{
  mode?: 'desktop' | 'panel'
  autofocus?: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const query = defineModel<string>('query', { required: true })
const toast = useToast()
const active = ref(false)
const root = useTemplateRef<HTMLElement>('root')

const normalizedQuery = computed(() => query.value.trim())
const results = computed(() => filterSearchProducts(demoSearchProducts, query.value))
const showResults = computed(
  () => normalizedQuery.value.length >= 2 && (mode === 'panel' || active.value),
)
const resultAnnouncement = computed(() => {
  if (!showResults.value) return ''
  return results.value.length ? `Найдено товаров: ${results.value.length}` : 'Товары не найдены'
})

function focusInput() {
  nextTick(() => root.value?.querySelector('input')?.focus())
}

function clearSearch() {
  query.value = ''
  focusInput()
}

function submitSearch() {
  if (normalizedQuery.value.length < 2) {
    focusInput()
    return
  }

  toast.add({
    title: `Поиск: «${normalizedQuery.value}»`,
    description: 'Полная страница результатов появится после подключения каталога.',
    color: 'info',
    icon: 'i-lucide-search',
  })
}

function onFocusOut(event: FocusEvent) {
  const currentTarget = event.currentTarget as HTMLElement
  const nextTarget = event.relatedTarget as Node | null

  if (!nextTarget || !currentTarget.contains(nextTarget)) {
    active.value = false
  }
}

function onEscape() {
  if (active.value && mode === 'desktop') {
    active.value = false
    return
  }

  if (query.value) {
    clearSearch()
    return
  }

  if (mode === 'panel') {
    emit('close')
  }
}

onMounted(() => {
  if (autofocus) focusInput()
})
</script>

<template>
  <div
    ref="root"
    class="relative"
    @focusin="active = true"
    @focusout="onFocusOut"
    @keydown.esc="onEscape"
  >
    <form role="search" @submit.prevent="submitSearch">
      <UInput
        v-model="query"
        type="text"
        autocomplete="off"
        placeholder="Найти аромат, бренд или средство"
        icon="i-lucide-search"
        size="xl"
        class="w-full"
        :ui="{
          base: 'min-h-13 rounded-[14px] bg-stone-50 pr-24 ring-1 ring-stone-300 outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700',
        }"
      >
        <template #trailing>
          <div class="flex items-center gap-0.5">
            <UButton
              v-if="query"
              type="button"
              color="neutral"
              variant="ghost"
              size="sm"
              icon="i-lucide-x"
              class="min-h-10 rounded-lg"
              aria-label="Очистить поиск"
              @click="clearSearch"
            />
            <UButton
              type="submit"
              color="primary"
              variant="ghost"
              size="sm"
              icon="i-lucide-search"
              class="min-h-10 rounded-lg"
              aria-label="Найти"
            />
          </div>
        </template>
      </UInput>
    </form>

    <p class="sr-only" aria-live="polite">{{ resultAnnouncement }}</p>

    <div
      v-if="showResults"
      class="z-50 overflow-hidden border border-stone-200 bg-white"
      :class="
        mode === 'desktop'
          ? 'absolute top-[calc(100%+0.5rem)] right-0 left-0 rounded-[14px] shadow-[0_10px_28px_rgb(28_25_23/0.14)]'
          : 'mt-5 rounded-xl'
      "
    >
      <ul v-if="results.length" aria-label="Результаты поиска">
        <li v-for="product in results" :key="product.id" class="border-b border-stone-100">
          <NuxtLink
            :to="`/?product=${product.id}`"
            class="group flex min-h-20 items-center gap-3 px-4 py-3 transition-colors hover:bg-stone-50 focus-visible:bg-stone-50 focus-visible:outline-none"
            @click="emit('close')"
          >
            <span
              class="grid size-14 shrink-0 place-items-center rounded-xl bg-linear-to-br"
              :class="product.colorClass"
              aria-hidden="true"
            >
              <UIcon name="i-lucide-sparkles" class="size-5 text-stone-600" />
            </span>
            <span class="min-w-0 flex-1">
              <span
                class="block text-[0.68rem] font-semibold tracking-wide text-stone-500 uppercase"
              >
                {{ product.brand }}
              </span>
              <span
                class="mt-0.5 block truncate text-sm font-bold text-stone-950 group-hover:text-brand-700"
              >
                {{ product.name }}
              </span>
              <span class="mt-0.5 block truncate text-xs text-stone-500">{{
                product.variant
              }}</span>
            </span>
            <strong class="shrink-0 text-sm text-stone-950">{{
              formatCurrency(product.price)
            }}</strong>
          </NuxtLink>
        </li>
      </ul>

      <div v-else class="px-5 py-8 text-center">
        <UIcon name="i-lucide-search-x" class="mx-auto size-7 text-stone-400" aria-hidden="true" />
        <p class="mt-3 font-semibold text-stone-800">Ничего не нашли</p>
        <p class="mt-1 text-sm text-stone-500">Попробуйте изменить запрос.</p>
      </div>

      <button
        type="button"
        class="flex min-h-12 w-full items-center justify-center gap-2 bg-stone-50 px-4 text-sm font-bold text-brand-700 transition-colors hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-brand-700"
        @click="submitSearch"
      >
        Показать все результаты
        <UIcon name="i-lucide-arrow-right" class="size-4" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
