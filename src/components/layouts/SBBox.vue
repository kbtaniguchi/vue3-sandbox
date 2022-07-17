<script setup lang="ts">
withDefaults(
  defineProps<{
    padding?: 'none' | 'small' | 'medium' | 'large'
  }>(),
  {
    padding: 'medium',
  }
)
</script>

<template>
  <div
    :class="[
      {
        none: 'p-0',
        small: 'p-1',
        medium: 'p-2',
        large: 'p-3',
      }[padding],
    ]"
  >
    <slot />
  </div>
</template>
