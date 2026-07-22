<script setup lang="ts">
import { navigationItems } from '~/data/navigation'

type HeaderPanel =
  | 'desktop-menu'
  | 'desktop-auth'
  | 'desktop-cart'
  | 'mobile-search'
  | 'mobile-menu'
  | 'mobile-profile'
  | 'mobile-cart'
  | null

const route = useRoute()
const activePanel = ref<HeaderPanel>(null)
const desktopSearchQuery = ref('')

function panelModel(panel: Exclude<HeaderPanel, null>) {
  return computed({
    get: () => activePanel.value === panel,
    set: (open: boolean) => {
      activePanel.value = open ? panel : null
    },
  })
}

const desktopMenuOpen = panelModel('desktop-menu')
const desktopAuthOpen = panelModel('desktop-auth')
const desktopCartOpen = panelModel('desktop-cart')
const mobileSearchOpen = panelModel('mobile-search')
const mobileMenuOpen = panelModel('mobile-menu')
const mobileProfileOpen = panelModel('mobile-profile')
const mobileCartOpen = panelModel('mobile-cart')

const mobileBottomActive = computed<'menu' | 'profile' | 'cart' | null>(() => {
  if (activePanel.value === 'mobile-menu') return 'menu'
  if (activePanel.value === 'mobile-profile') return 'profile'
  if (activePanel.value === 'mobile-cart') return 'cart'
  return null
})

function togglePanel(panel: Exclude<HeaderPanel, null>) {
  activePanel.value = activePanel.value === panel ? null : panel
}

watch(
  () => route.fullPath,
  () => {
    activePanel.value = null
  },
)
</script>

<template>
  <header
    class="sticky top-0 z-40 bg-white/95 shadow-[0_3px_14px_rgb(28_25_23/0.09)] backdrop-blur-xl"
  >
    <div
      class="container-page hidden min-h-20 grid-cols-[auto_minmax(20rem,1fr)_auto] items-center gap-7 py-3 lg:grid"
    >
      <AppLogo />

      <HeaderSearchBox v-model:query="desktopSearchQuery" />

      <div class="ml-auto flex items-center gap-1">
        <UButton
          color="neutral"
          variant="ghost"
          size="xl"
          class="rounded-xl px-3"
          icon="i-lucide-user-round"
          aria-label="Войти в аккаунт"
          @click="togglePanel('desktop-auth')"
        >
          <span class="hidden xl:inline">Войти</span>
        </UButton>

        <HeaderCartPopover v-model:open="desktopCartOpen" />

        <UButton
          color="neutral"
          variant="ghost"
          size="xl"
          class="rounded-xl px-3"
          :icon="desktopMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
          :aria-label="desktopMenuOpen ? 'Закрыть меню' : 'Открыть меню'"
          :aria-expanded="desktopMenuOpen"
          aria-controls="desktop-catalog-menu"
          @click="togglePanel('desktop-menu')"
        />
      </div>
    </div>

    <div class="container-page flex min-h-17 items-center justify-between gap-3 py-2 lg:hidden">
      <AppLogo />
      <UButton
        color="neutral"
        variant="ghost"
        size="xl"
        class="shrink-0 rounded-xl px-3"
        icon="i-lucide-search"
        aria-label="Открыть поиск"
        @click="togglePanel('mobile-search')"
      />
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out motion-reduce:transition-none"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in motion-reduce:transition-none"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <nav
        v-if="desktopMenuOpen"
        id="desktop-catalog-menu"
        class="absolute top-full right-0 left-0 hidden border-t border-stone-100 bg-white lg:block"
        aria-label="Каталог"
      >
        <ul class="container-page flex min-h-14 items-stretch justify-between gap-1">
          <li v-for="item in navigationItems" :key="item.label" class="flex">
            <NuxtLink
              :to="item.href"
              class="group relative inline-flex min-h-11 items-center gap-2 px-3 py-2 text-sm font-semibold whitespace-nowrap transition-colors after:absolute after:right-3 after:bottom-0 after:left-3 after:h-0.5 after:origin-center after:scale-x-0 after:bg-brand-600 after:transition-transform hover:text-brand-700 hover:after:scale-x-100 focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 xl:text-base"
              :class="item.accent ? 'text-brand-700' : 'text-stone-800'"
            >
              <UIcon
                v-if="item.label === 'Подарки'"
                :name="item.icon"
                class="size-5 text-brand-600 transition-transform group-hover:-rotate-6"
                aria-hidden="true"
              />
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </Transition>

    <HeaderAuthModal v-model:open="desktopAuthOpen" />
    <HeaderAuthModal v-model:open="mobileProfileOpen" display="panel" />
    <HeaderMobileSearchPanel v-model:open="mobileSearchOpen" />
    <HeaderMobileMenuPanel v-model:open="mobileMenuOpen" />
    <HeaderMobileCartPanel v-model:open="mobileCartOpen" />
  </header>

  <HeaderMobileBottomNav
    :active-panel="mobileBottomActive"
    @open-menu="togglePanel('mobile-menu')"
    @open-profile="togglePanel('mobile-profile')"
    @open-cart="togglePanel('mobile-cart')"
  />
</template>
