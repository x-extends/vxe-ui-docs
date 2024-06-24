<template>
  <div>
    <vxe-button @click="insertEvent">新增</vxe-button>
    <vxe-button @click="saveEvent">保存</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { Modal } from 'ant-design-vue'
import { VxeGridInstance, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const restaurants = [
  { value: 'Designer', name: 'Designer' },
  { value: 'Develop', name: 'Develop' },
  { value: 'Test', name: 'Test' },
  { value: 'PM', name: 'PM' }
]

const roleEditRender = reactive<VxeColumnPropTypes.EditRender & { props: any }>({
  name: 'AAutoComplete',
  props: {
    options: restaurants
  },
  events: {
    search (params, queryString: any) {
      roleEditRender.props.options = queryString ? restaurants.filter(item => (item.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)) : restaurants
    }
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
    { field: 'name', title: 'Name', minWidth: 140, editRender: { name: 'AInput' } },
    { field: 'role', title: '自动补全输入', width: 200, editRender: roleEditRender }
  ],
  data: [
    { id: 10001, name: 'Test1', role: '' },
    { id: 10002, name: 'Test2', role: 'Develop' }
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
      Modal.success({
        title: '提示',
        content: `insertRecords=${insertRecords.length}; removeRecords=${removeRecords.length}; updateRecords=${updateRecords.length}`
      })
    } else {
      Modal.info({
        title: '提示',
        content: '数据未改动！'
      })
    }
  }
}
</script>
