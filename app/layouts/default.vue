<template>
  <div class="flex min-h-screen flex-col bg-stone-50 text-stone-950">
    <a
      href="#main-content"
      class="sr-only z-50 rounded-md bg-white px-4 py-3 text-sm font-semibold shadow focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
    >
      Перейти к содержимому
    </a>

    <header class="border-b border-stone-200 bg-white">
      <div class="container-page flex min-h-20 items-center justify-between gap-3 sm:gap-6">
        <AppLogo />

        <nav aria-label="Основная навигация">
          <ul class="flex items-center gap-3 text-sm font-medium text-stone-700 sm:gap-5">
            <li>
              <NuxtLink
                class="transition-colors hover:text-brand-700 focus-visible:outline-brand-700"
                to="/"
              >
                Главная
              </NuxtLink>
            </li>
            <li class="hidden sm:list-item">
              <span class="text-stone-400" aria-disabled="true">Каталог скоро</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main id="main-content" class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-stone-200 bg-white py-8">
      <div class="container-page text-sm text-stone-600">
        © {{ new Date().getFullYear() }} Panda Parfum. Учебный frontend-проект.
      </div>
    </footer>
  </div>
</template>
