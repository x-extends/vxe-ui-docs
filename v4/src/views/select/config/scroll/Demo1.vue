<template>
  <div>
    <p>
      <vxe-button @click="loadData(1000)">加载1千条</vxe-button>
      <vxe-button @click="loadData(10000)">加载1万条</vxe-button>
      <vxe-button @click="loadData(100000)">加载10万条</vxe-button>
      <vxe-button @click="loadData(300000)">加载30万条</vxe-button>
    </p>
    <vxe-select v-model="val1" v-bind="selectOptions"></vxe-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import { VxeUI, VxeSelectProps } from 'vxe-pc-ui'

interface OptVO {
  value: string
  label: string
}

const val1 = ref()

const selectOptions = reactive<VxeSelectProps>({
  loading: false,
  clearable: true,
  filterable: true,
  options: []
})

const loadData = (size: number) => {
  const list: OptVO[] = []
  selectOptions.loading = true
  for (let i = 0; i < size; i++) {
    list.push({
      value: `${i}`,
      label: `选项 ${i}`
    })
  }
  setTimeout(() => {
    const startTime = Date.now()
    selectOptions.options = list
    selectOptions.loading = false
    nextTick(() => {
      VxeUI.modal.message({
        content: `加载时间 ${Date.now() - startTime} 毫秒`,
        status: 'success'
      })
    })
  }, 300)
}

loadData(50)
</script>
