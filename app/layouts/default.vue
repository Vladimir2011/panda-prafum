<template>
  <div class="flex min-h-screen flex-col bg-stone-50 text-stone-950">
    <a
      href="#main-content"
      class="sr-only z-50 rounded-md bg-white px-4 py-3 text-sm font-semibold shadow focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
    >
      Перейти к содержимому
    </a>

    <HeaderAppHeader />

    <main id="main-content" class="flex-1">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>
