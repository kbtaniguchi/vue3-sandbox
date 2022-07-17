<script setup lang="ts">
withDefaults(
  defineProps<{
    space?: 'none' | 'small' | 'medium' | 'large'
  }>(),
  {
    space: 'small',
  }
)
</script>

<template>
  <div
    class="flex flex-col justify-start"
    :class="
      {
        none: 'space-y-0',
        small: 'space-y-1',
        medium: 'space-y-2',
        large: 'space-y-3',
      }[space]
    "
  >
    <slot />
    <div v-if="$slots.bottom" style="margin-top: auto">
      <slot name="bottom" />
    </div>
  </div>
</template>
