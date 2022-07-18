<script setup lang="ts">
withDefaults(
  defineProps<{
    side?: 'left' | 'right'
    space?: 'none' | 'small' | 'medium' | 'large'
    noStretch?: boolean
  }>(),
  {
    side: 'left',
    space: 'small',
    noStretch: false,
  }
)
</script>

<template>
  <div
    class="flex flex-wrap"
    :class="[
      {
        none: 'gap-0',
        small: 'gap-1',
        medium: 'gap-2',
        large: 'gap-3',
      }[space],
      noStretch ? 'items-start' : 'items-stretch',
      side === 'left'
        ? 'first:grow first:basis-auto last:min-w-[50%] last:grow-[999] last:basis-0'
        : 'first:min-w-[50%] first:grow-[999] first:basis-0 last:grow last:basis-auto',
    ]"
  >
    <slot />
  </div>
</template>
