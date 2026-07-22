<script setup lang="ts">
const open = defineModel<boolean>('open', { required: true })
</script>

<template>
  <USlideover
    v-model:open="open"
    title="Корзина"
    description="Товары, добавленные в корзину"
    side="right"
    :close="false"
    :ui="{
      content: 'h-dvh w-screen max-w-none rounded-none',
      body: 'min-h-0 p-0',
    }"
  >
    <template #body>
      <HeaderCartContent mode="panel" @close="open = false" />
    </template>
  </USlideover>
</template>
