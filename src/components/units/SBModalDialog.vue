<script setup lang="ts">
import SBStack from '@/components/layouts/SBStack.vue'
import SBCenter from '@/components/layouts/SBCenter.vue'
import SBImposter from '@/components/layouts/SBImposter.vue'
import SBButton from '@/components/parts/SBButton.vue'

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from '@headlessui/vue'

withDefaults(
  defineProps<{
    isVisible: boolean
    title: string
    wide?: boolean
    description?: string
  }>(),
  {
    isVisible: false,
    title: '',
    wide: false,
    description: '',
  }
)

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <Dialog :open="isVisible" @close="emit('close')">
    <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
    <SBImposter
      fixed
      class="rounded bg-white p-2 shadow"
      :class="wide ? 'w-full' : ''"
    >
      <DialogPanel>
        <SBStack>
          <DialogTitle class="font-bold">
            {{ title }}
          </DialogTitle>
          <DialogDescription v-if="description" class="text-sm text-gray-700">
            {{ description }}
          </DialogDescription>
          <slot />
          <slot name="control">
            <SBCenter>
              <SBButton @click="emit('close')">OK</SBButton>
            </SBCenter>
          </slot>
        </SBStack>
      </DialogPanel>
    </SBImposter>
  </Dialog>
</template>
