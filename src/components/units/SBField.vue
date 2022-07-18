<script setup lang="ts">
import SBStack from '@/components/layouts/SBStack.vue'

withDefaults(
  defineProps<{
    label: string
    hint?: string
    errors?: string[]
  }>(),
  {
    label: '',
    hint: '',
    errors: () => [],
  }
)
</script>

<template>
  <label>
    <SBStack>
      <span class="font-bold">
        {{ label }}
      </span>
      <span class="text-sm text-gray-700">
        {{ hint }}
      </span>
      <div v-if="errors" class="text-sm text-red-600">
        <ul class="list-disc pl-4">
          <li v-for="error in errors" :key="error">
            {{ error }}
          </li>
        </ul>
      </div>
      <slot />
    </SBStack>
  </label>
</template>
