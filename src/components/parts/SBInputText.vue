<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: string
    disabled?: boolean
  }>(),
  {
    modelValue: '',
    disabled: false,
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <input
    type="text"
    class="rounded-md border border-gray-200 bg-white px-2 py-1 text-gray-700 shadow focus:border-blue-200 focus:outline-none focus:ring focus:ring-opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
    :value="modelValue"
    :disabled="disabled"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<style module></style>
