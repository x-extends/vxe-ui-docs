<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #active>
        <vxe-button mode="text" @click="viewEvent">查看</vxe-button>
        <vxe-button mode="text" status="error" @click="delEvent">删除</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeUI, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 200 },
    { title: '按钮组', width: 200, slots: { default: 'active' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop' },
    { id: 10002, name: 'Test2', role: 'Test' },
    { id: 10003, name: 'Test3', role: 'PM' }
  ]
})

const viewEvent = () => {
  VxeUI.modal.message({
    content: '点击了查看',
    status: 'success'
  })
}

const delEvent = () => {
  VxeUI.modal.confirm({
    title: '操作提示',
    content: '请您确认是否删除？'
  })
}
</script>
