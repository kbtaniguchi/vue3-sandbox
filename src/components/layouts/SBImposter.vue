<script setup lang="ts">
withDefaults(
  defineProps<{
    breakout?: boolean
    fixed?: boolean
  }>(),
  {
    breakout: false,
    fixed: false,
  }
)
</script>

<template>
  <div
    class="top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
    :class="[
      breakout ? '' : 'max-h-[95%] max-w-[90%] overflow-auto',
      fixed ? 'fixed' : 'absolute',
    ]"
  >
    <slot />
  </div>
</template>
