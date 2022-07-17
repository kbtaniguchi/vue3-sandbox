<script setup lang="ts">
withDefaults(
  defineProps<{
    mood?: 'positive' | 'weakPositive' | 'neutral' | 'weakNegative' | 'negative'
  }>(),
  {
    mood: 'neutral',
  }
)
</script>

<template>
  <button
    class="transform break-words rounded px-2 py-1 shadow transition-colors duration-200 focus:outline-none focus:ring focus:ring-opacity-80 disabled:cursor-not-allowed disabled:opacity-25"
    :class="
      {
        positive:
          'bg-green-600 text-white focus:ring-green-300 enabled:hover:bg-green-500',
        weakPositive:
          'bg-green-200 text-green-900 focus:ring-green-300 enabled:hover:bg-green-300',
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
