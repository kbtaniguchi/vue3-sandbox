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
    large?: boolean
  }>(),
  {
    isVisible: false,
    large: false,
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
      :class="large ? 'w-full' : ''"
    >
      <DialogPanel>
        <SBStack>
          <DialogTitle class="font-bold">
            <slot name="title" />
          </DialogTitle>
          <DialogDescription
            class="text-sm text-gray-700"
            v-if="$slots.description"
          >
            <slot name="description" />
          </DialogDescription>
          <slot name="content" />
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
