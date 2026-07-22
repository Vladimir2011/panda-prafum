<script setup lang="ts">
const open = defineModel<boolean>('open', { required: true })
const query = ref('')
</script>

<template>
  <USlideover
    v-model:open="open"
    title="Поиск"
    description="Поиск по каталогу Panda Parfum"
    side="left"
    :ui="{
      content: 'h-dvh w-screen max-w-none rounded-none',
      header: 'min-h-16 px-4',
      body: 'px-4 py-5',
      close: 'top-2.5 right-3 rounded-lg',
    }"
  >
    <template #body>
      <HeaderSearchBox v-model:query="query" mode="panel" autofocus @close="open = false" />
    </template>
  </USlideover>
</template>
