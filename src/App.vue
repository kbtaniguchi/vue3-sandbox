<script setup lang="ts">
import SBButton from '@/components/parts/SBButton.vue'
import SBStack from '@/components/layouts/SBStack.vue'
import SBCluster from '@/components/layouts/SBCluster.vue'
import SBCenter from '@/components/layouts/SBCenter.vue'
import SBDialog from '@/components/units/SBModalDialog.vue'
import { ref } from 'vue'
import SBBox from '@/components/layouts/SBBox.vue'
import SBInputText from '@/components/parts/SBInputText.vue'
import SBField from '@/components/units/SBField.vue'

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

const inputValue = ref('')
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
    <SBCluster>
      <SBButton disabled mood="positive" @click="test">編集</SBButton>
      <SBButton disabled mood="weakPositive" @click="test">編集</SBButton>
      <SBButton disabled @click="test">キャンセル</SBButton>
      <SBButton disabled mood="weakNegative" @click="test">削除</SBButton>
      <SBButton disabled mood="negative" @click="test">削除</SBButton>
    </SBCluster>
    <SBCluster>
      <SBField label="TEST" hint="test test test">
        <SBInputText v-model="inputValue" invalid />
      </SBField>
      <SBField label="TEST">
        <SBInputText v-model="inputValue" />
      </SBField>
    </SBCluster>
    <template #bottom>
      <SBCenter and-text>
        <p>test bottom</p>
      </SBCenter>
    </template>
    <SBDialog :is-visible="visible" large @close="closeDialog">
      <template #title>テストダイアログ</template>
      <template #description>これはテストのダイアログです</template>
      <template #content>
        <SBBox class="max-h-[60vh] overflow-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
        </SBBox>
      </template>
    </SBDialog>
  </SBStack>
</template>
