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
  role: string
  sex: string
  sexList: string[]
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const sexEditRender = reactive<VxeColumnPropTypes.EditRender>({
  name: 'ElSelect',
  options: [
    { label: '男', value: '1' },
    { label: '女', value: '0' }
  ]
})

const sexListEditRender = reactive<VxeColumnPropTypes.EditRender>({
  name: 'ElSelect',
  props: {
    multiple: true
  },
  options: [
    { label: '男', value: '1' },
    { label: '女', value: '0' }
  ]
})

const allList = [
  { label: '前端', value: '前端' },
  { label: '后端', value: '后端' },
  { label: '测试', value: '测试' },
  { label: '产品经理', value: '产品经理' }
]

const roleEditRender = reactive<VxeColumnPropTypes.EditRender & { props: any }>({
  name: 'ElSelect',
  options: [],
  props: {
    remote: true,
    loading: false,
    filterable: true,
    remoteShowSuffix: true,
    remoteMethod (query: string) {
      if (query) {
        roleEditRender.props.loading = true
        setTimeout(() => {
          roleEditRender.props.loading = false
          roleEditRender.options = allList.filter((item) => {
            return item.label.toLowerCase().includes(query.toLowerCase())
          })
        }, 200)
      } else {
        roleEditRender.options = []
      }
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
  editRules: {
    sex: [
      { required: true, content: '请输入' }
    ],
    sexList: [
      { required: true, type: 'array', content: '请输入' }
    ]
  },
  columns: [
    { type: 'checkbox', width: 60 },
    { type: 'seq', title: 'Number', width: 80 },
    { field: 'name', title: 'Name', minWidth: 140, editRender: { name: 'ElInput' } },
    { field: 'sex', title: '下拉框', width: 140, editRender: sexEditRender },
    { field: 'sexList', title: '下拉框多选', width: 200, editRender: sexListEditRender },
    { field: 'role', title: '远程搜索', width: 140, editRender: roleEditRender }
  ],
  data: [
    { id: 10001, name: 'Test1', role: '前端', sex: '1', sexList: [] },
    { id: 10002, name: 'Test2', role: '后端', sex: '', sexList: ['0', '1'] },
    { id: 10002, name: 'Test3', role: '', sex: '', sexList: ['0'] }
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
