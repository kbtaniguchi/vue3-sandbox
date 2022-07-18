<script setup lang="ts">
import SBStack from '@/components/layouts/SBStack.vue'
import SBTooltip from '@/components/parts/SBTooltip.vue'

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
        <SBTooltip :message="hint" v-if="hint"> (?) </SBTooltip>
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
