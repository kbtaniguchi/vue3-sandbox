<script setup lang="ts">
import SBStack from '@/components/layouts/SBStack.vue'
import SBCenter from '@/components/layouts/SBCenter.vue'
import SBBox from '@/components/layouts/SBBox.vue'
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
  }>(),
  {
    isVisible: false,
  }
)

const emit = defineEmits<{
  (e: 'close'): void
}>()

const fireCloseEvent = () => {
  emit('close')
}
</script>

<template>
  <Dialog :open="isVisible" @close="fireCloseEvent">
    <SBImposter fixed class="shadow">
      <DialogPanel class="rounded">
        <SBStack class="">
          <DialogTitle>
            <slot name="title" />
          </DialogTitle>
          <DialogDescription v-if="$slots.description">
            <slot name="description" />
          </DialogDescription>
          <slot name="content" />
          <slot name="control">
            <SBCenter>
              <SBBox>
                <SBButton @click="fireCloseEvent">OK</SBButton>
              </SBBox>
            </SBCenter>
          </slot>
        </SBStack>
      </DialogPanel>
    </SBImposter>
  </Dialog>
</template>
