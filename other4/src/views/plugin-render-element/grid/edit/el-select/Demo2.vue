<template>
  <div>
    <vxe-button @click="insertEvent">新增</vxe-button>
    <vxe-button @click="saveEvent">保存</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #edit_name="{ row }">
        <el-input v-model="row.name"></el-input>
      </template>

      <template #default_sex="{ row }">
        <span>{{ formatSexLabel([row.sex]) }}</span>
      </template>
      <template #edit_sex="{ row }">
        <el-select v-model="row.sex">
          <el-option v-for="item in sexOptions" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
      </template>

      <template #default_sexList="{ row }">
        <span>{{ formatSexLabel(row.sexList) }}</span>
      </template>
      <template #edit_sexList="{ row }">
        <el-select v-model="row.sexList" multiple>
          <el-option v-for="item in sexOptions" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
      </template>

      <template #default_role="{ row }">
        <span>{{ row.role }}</span>
      </template>
      <template #edit_role="{ row }">
        <el-select v-model="row.role" :loading="roleLoading" :remote-method="roleRemoteMethod" filterable remote remote-show-suffix>
          <el-option v-for="item in roleOptions" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  sexList: string[]
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const sexOptions = ref([
  { label: '男', value: '1' },
  { label: '女', value: '0' }
])

const allList = [
  { label: '前端', value: '前端' },
  { label: '后端', value: '后端' },
  { label: '测试', value: '测试' },
  { label: '产品经理', value: '产品经理' }
]
const roleOptions = ref<any[]>([])
const roleLoading = ref(false)

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
    { field: 'name', title: 'Name', minWidth: 140, editRender: { autofocus: '.el-input__inner' }, slots: { edit: 'edit_name' } },
    { field: 'sex', title: '下拉框', width: 140, editRender: {}, slots: { default: 'default_sex', edit: 'edit_sex' } },
    { field: 'sexList', title: '下拉框多选', width: 200, editRender: {}, slots: { default: 'default_sexList', edit: 'edit_sexList' } },
    { field: 'role', title: '远程搜索', width: 140, editRender: {}, slots: { default: 'default_role', edit: 'edit_role' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: '前端', sex: '1', sexList: [] },
    { id: 10002, name: 'Test2', role: '后端', sex: '', sexList: ['0', '1'] },
    { id: 10002, name: 'Test3', role: '', sex: '', sexList: ['0'] }
  ]
})

const formatSexLabel = (sexList: string[]) => {
  if (sexList) {
    return sexList.map(sex => {
      const item = sexOptions.value.find(item => item.value === sex)
      return item ? item.label : sex
    }).join(',')
  }
  return ''
}

const roleRemoteMethod = (query: string) => {
  if (query) {
    roleLoading.value = true
    setTimeout(() => {
      roleLoading.value = false
      roleOptions.value = allList.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  } else {
    roleOptions.value = []
  }
}

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
