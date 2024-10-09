<template>
  <div>
    <p>
      <vxe-button @click="loadData(100)">加载1百条</vxe-button>
      <vxe-button @click="loadData(500)">加载5百条</vxe-button>
      <vxe-button @click="loadData(1000)">加载1千条</vxe-button>
    </p>
    <vxe-select v-model="val1" :options="opts1" :loading="loading" clearable filterable>
      <vxe-option v-for="item in opts1" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
    </vxe-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface OptVO {
  value: string
  label: string
}

const val1 = ref()
const loading = ref(false)
const opts1 = ref<OptVO[]>([])

const loadData = (size: number) => {
  const list: OptVO[] = []
  loading.value = true
  for (let i = 0; i < size; i++) {
    list.push({
      value: `${i}`,
      label: `选项 ${i}`
    })
  }
  setTimeout(() => {
    opts1.value = list
    loading.value = false
  }, 300)
}

loadData(50)
</script>
