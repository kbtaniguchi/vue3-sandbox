<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: string
    disabled?: boolean
    invalid?: boolean
  }>(),
  {
    modelValue: '',
    disabled: false,
    invalid: false,
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <input
    type="text"
    class="rounded-md border bg-white px-2 py-1 text-gray-700 shadow focus:outline-none focus:ring focus:ring-opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
    :class="
      invalid
        ? 'border-red-600 focus:ring-red-200'
        : 'border-gray-200 focus:ring-blue-200'
    "
    :value="modelValue"
    :disabled="disabled"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<style module></style>
