<template>
  <div>
    <vxe-button content="点击弹出1" @click="showPopup1 = true"></vxe-button>
    <vxe-modal
      show-footer
      show-cancel-button
      show-confirm-button
      v-model="showPopup1"
      :width="600"
      :height="400">
      <template #default>
        <div>{{ myConten1 }}显示内容</div>
      </template>
    </vxe-modal>

    <vxe-button content="点击弹出2（预加载）" @click="showPopup2 = true"></vxe-button>
    <vxe-modal
      show-footer
      show-cancel-button
      show-confirm-button
      preload
      v-model="showPopup2"
      :width="600"
      :height="400">
      <template #default>
        <div>{{ myConten2 }}显示内容</div>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const showPopup1 = ref(false)
const showPopup2 = ref(false)

const myConten1 = computed(() => {
  console.log('加载弹窗内容1')
  return '加载弹窗内容1'
})

const myConten2 = computed(() => {
  console.log('加载弹窗内容2')
  return '加载弹窗内容2'
})
</script>
