<template>
  <div>
    <vxe-button @click="insertEvent">新增</vxe-button>
    <vxe-button @click="saveEvent">保存</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { VxeGridInstance, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  region: number[]
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const regionList = [
  {
    label: '北京',
    value: 1,
    children: [
      { value: 3, label: '东城区' },
      { value: 4, label: '西城区' }
    ]
  },
  {
    label: '上海',
    value: 21,
    children: [
      { value: 23, label: '黄浦区' },
      { value: 24, label: '卢湾区' }
    ]
  },
  {
    label: '广东',
    value: 42,
    children: [
      { value: 43, label: '广州市' },
      { value: 67, label: '深圳市' }
    ]
  }
]

const regionEditRender = reactive<VxeColumnPropTypes.EditRender>({
  name: 'ElCascader',
  props: {
    options: regionList
  }
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  keepSource: true,
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'checkbox', width: 60 },
    { type: 'seq', title: 'Number', width: 80 },
    { field: 'name', title: 'Name', minWidth: 140, editRender: { name: 'ElInput' } },
    { field: 'region', title: '级联选择', width: 200, editRender: regionEditRender }
  ],
  data: [
    { id: 10001, name: 'Test1', region: [] },
    { id: 10002, name: 'Test2', region: [21, 24] }
  ]
})

const insertEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const record = {
      nickname: ''
    }
    const { row: newRow } = await $grid.insert(record)
    $grid.setEditRow(newRow)
  }
}

const saveEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    const { insertRecords, removeRecords, updateRecords } = $grid.getRecordset()
    if (insertRecords.length || removeRecords.length || updateRecords.length) {
      ElMessageBox.alert(`insertRecords=${insertRecords.length}; removeRecords=${removeRecords.length}; updateRecords=${updateRecords.length}`)
    } else {
      ElMessageBox.alert('数据未改动！')
    }
  }
}
</script>
