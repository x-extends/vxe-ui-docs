<template>
  <div>
    <vxe-table-select
      v-model="val1"
      :options="tableData"
      :grid-config="gridConfig"
      @form-submit="formSubmitEvent"
      @form-reset="formResetEvent">
    </vxe-table-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTableSelectPropTypes, VxeTableSelectEvents } from 'vxe-pc-ui'

interface RowVO {
  value: number
  label: string
  role: string
  sex: string
  age: number
  address: string
}

const val1 = ref()

const allList: RowVO[] = [
  { value: 10001, label: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { value: 10002, label: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { value: 10003, label: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { value: 10004, label: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
]

const tableData = ref<RowVO[]>([])

const formData = reactive({
  name: '',
  role: '',
  sex: '',
  num: '',
  address: ''
})

const gridConfig = reactive<VxeTableSelectPropTypes.GridConfig>({
  border: true,
  columns: [
    { type: 'radio', width: 70 },
    { field: 'label', title: 'Name' },
    { field: 'role', title: 'Role' },
    { field: 'sex', title: 'Sex' },
    { field: 'address', title: 'Address' }
  ],
  formConfig: {
    data: formData,
    items: [
      { field: 'name', title: 'Name', itemRender: { name: 'VxeInput' } },
      {
        itemRender: {
          name: 'VxeButtonGroup',
          options: [
            { type: 'submit', content: '搜索', status: 'primary' },
            { type: 'reset', content: '重置' }
          ]
        }
      }
    ]
  }
})

const searchData = () => {
  if (formData.name) {
    const searchVal = `${formData.name}`.toLowerCase()
    tableData.value = allList.filter(row => {
      if (`${row.label}`.toLowerCase().indexOf(searchVal) > -1) {
        return true
      }
      if (`${row.role}`.toLowerCase().indexOf(searchVal) > -1) {
        return true
      }
      return false
    })
  } else {
    tableData.value = allList
  }
}

const formSubmitEvent: VxeTableSelectEvents.FormSubmit = () => {
  searchData()
}

const formResetEvent: VxeTableSelectEvents.FormReset = () => {
  searchData()
}

searchData()
</script>
