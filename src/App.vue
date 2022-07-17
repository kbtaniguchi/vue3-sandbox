<script setup lang="ts">
import SBButton from '@/components/parts/SBButton.vue'
import SBStack from '@/components/layouts/SBStack.vue'
import SBCluster from '@/components/layouts/SBCluster.vue'
import SBCenter from '@/components/layouts/SBCenter.vue'
import SBDialog from '@/components/units/SBModalDialog.vue'
import { ref } from 'vue'

const test = () => {
  console.log('hi! test!!!')
}

const visible = ref(false)
const openDialog = () => {
  return (visible.value = true)
}
const closeDialog = () => {
  return (visible.value = false)
}
</script>

<template>
  <SBStack space="large" class="h-screen">
    <SBCenter>
      <SBButton @click="openDialog"> OPEN</SBButton>
    </SBCenter>
    <SBCluster>
      <SBButton mood="positive" @click="test">編集</SBButton>
      <SBButton mood="weakPositive" @click="test">編集</SBButton>
      <SBButton @click="test">キャンセル</SBButton>
      <SBButton mood="weakNegative" @click="test">削除</SBButton>
      <SBButton mood="negative" @click="test">削除</SBButton>
    </SBCluster>
    <template #bottom>
      <SBCenter and-text>
        <p>test bottom</p>
      </SBCenter>
    </template>
    <SBDialog :is-visible="visible" @close="closeDialog">
      <template #title>title</template>
      <template #description>description</template>
      <template #content>content</template>
    </SBDialog>
  </SBStack>
</template>
