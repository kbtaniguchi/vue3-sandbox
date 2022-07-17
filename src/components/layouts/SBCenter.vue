<script setup lang="ts">
withDefaults(
  defineProps<{
    andText: boolean
  }>(),
  {
    andText: false,
  }
)
</script>

<template>
  <div
    class="mx-auto max-w-full [&>*]:max-w-full"
    :class="andText ? 'text-center' : ''"
  >
    <slot />
  </div>
</template>
