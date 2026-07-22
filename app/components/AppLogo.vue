<script setup lang="ts">
import markUrl from '~/assets/images/panda-parfum-mark.svg'
</script>

<template>
  <NuxtLink
    to="/"
    class="inline-flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-700"
    aria-label="Panda Parfum — на главную"
  >
    <img :src="markUrl" alt="" width="180" height="215" class="h-10 w-auto sm:h-14" />
    <span class="flex flex-col">
      <span
        class="font-logo text-[1.2rem] leading-[0.85] font-semibold tracking-[0.015em] text-stone-950 sm:text-[1.75rem]"
      >
        Panda Parfum
      </span>
      <span
        class="mt-1 text-[0.52rem] leading-none font-semibold tracking-[0.045em] text-brand-700 sm:text-[0.7rem]"
      >
        Парфюмерия и косметика
      </span>
    </span>
  </NuxtLink>
</template>
