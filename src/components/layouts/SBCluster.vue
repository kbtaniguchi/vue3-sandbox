<script setup lang="ts">
withDefaults(
  defineProps<{
    space?: 'none' | 'small' | 'medium' | 'large'
    justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
    align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  }>(),
  {
    space: 'medium',
    justify: 'center',
    align: 'center',
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
      {
        start: 'justify-start',
        end: 'justify-end',
        center: 'justify-center',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      }[justify],
      {
        start: 'items-start',
        end: 'items-end',
        center: 'items-center',
        baseline: 'items-baseline',
        stretch: 'items-stretch',
      }[align],
    ]"
  >
    <slot />
  </div>
</template>
