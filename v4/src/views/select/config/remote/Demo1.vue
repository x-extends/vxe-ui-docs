<template>
  <div>
    <vxe-select  v-model="val1" v-bind="selectOptions"></vxe-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeSelectProps } from 'vxe-pc-ui'

// 模拟后端接口
const getApiList = (quert: any) => {
  const allList = [
    { value: 1001, label: 'table' },
    { value: 1002, label: 'grid' },
    { value: 1003, label: 'button' },
    { value: 1004, label: 'toolbar' },
    { value: 1005, label: 'tooltip' },
    { value: 1006, label: 'pager' },
    { value: 1007, label: 'print' },
    { value: 1008, label: 'export' },
    { value: 1009, label: 'import' },
    { value: 1010, label: 'select' },
    { value: 1012, label: 'checkbox' },
    { value: 1013, label: 'group' }
  ]

  return new Promise<{
    value: number
    label: string
  }[]>(resolve => {
    setTimeout(() => {
      const list = allList.filter(item => item.label.toLowerCase().indexOf(`${quert.searchValue}`.toLowerCase()) > -1)
      resolve(list)
    }, 200)
  })
}

const val1 = ref()
const selectOptions = reactive<VxeSelectProps>({
  clearable: true,
  filterable: true,
  remote: true,
  placeholder: '远程搜索',
  options: [],
  remoteConfig: {
    async queryMethod ({ searchValue }) {
      const list = await getApiList({ searchValue })
      selectOptions.options = list
    }
  }
})
</script>
