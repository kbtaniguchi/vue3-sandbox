<script setup lang="ts">
withDefaults(
  defineProps<{
    mood?: 'positive' | 'weakPositive' | 'neutral' | 'weakNegative' | 'negative'
    disabled?: boolean
  }>(),
  {
    mood: 'neutral',
    disabled: false,
  }
)
</script>

<template>
  <button
    class="transform break-words rounded px-2 py-1 shadow transition-colors duration-200 focus:outline-none focus:ring focus:ring-opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
    :disabled="disabled"
    :class="
      {
        positive:
          'bg-blue-600 text-white focus:ring-blue-300 enabled:hover:bg-blue-500',
        weakPositive:
          'bg-blue-200 text-blue-900 focus:ring-blue-300 enabled:hover:bg-blue-300',
        neutral:
          'border border-gray-200 bg-white text-gray-700 focus:ring-gray-200 enabled:hover:bg-gray-100',
        weakNegative:
          'bg-red-200 text-red-900 focus:ring-red-300 enabled:hover:bg-red-300',
        negative:
          'bg-red-600 text-white focus:ring-red-300 enabled:hover:bg-red-500',
      }[mood]
    "
  >
    <slot />
  </button>
</template>

<style module></style>
