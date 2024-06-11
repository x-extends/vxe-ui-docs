<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  height: 600,
  scrollY: {
    enabled: true,
    gt: 0
  },
  columns: [
    { type: 'seq', width: 60 },
    {
      title: '分组1',
      children: [
        { field: 'name', title: 'Name' },
        { field: 'role', title: 'Role' }
      ]
    },
    {
      title: '分组1',
      children: [
        { field: 'sex', title: 'Sex' }
      ]
    }
  ],
  data: []
})

// 模拟行数据
const loadList = (size = 200) => {
  const dataList: RowVO[] = []
  for (let i = 0; i < size; i++) {
    dataList.push({
      id: 10000 + i,
      name: 'Test' + i,
      role: 'Developer',
      sex: '男'
    })
  }
  gridOptions.data = dataList
}

loadList(500)
</script>
