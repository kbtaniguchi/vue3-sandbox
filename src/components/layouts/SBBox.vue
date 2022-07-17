<script setup lang="ts">
withDefaults(
  defineProps<{
    padding?: 'none' | 'small' | 'medium' | 'large'
    breakWords?: boolean
    overflow?: boolean
  }>(),
  {
    padding: 'medium',
    breakWords: false,
    overflow: false,
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
      breakWords ? 'break-words' : '',
      overflow ? 'max-h-[60vh] overflow-auto' : '',
    ]"
  >
    <slot />
  </div>
</template>
