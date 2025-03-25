<template>
  <div>
    <vxe-table-select
      v-model="val1"
      :columns="columnList"
      :options="tableData"
      :option-props="{value: 'id', label: 'name'}"
      :popup-config="popupConfig"
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
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const val1 = ref()

const columnList = ref<VxeTableSelectPropTypes.Columns>([
  { field: 'name', title: 'Name' },
  { field: 'role', title: 'Role' },
  { field: 'sex', title: 'Sex' },
  { field: 'address', title: 'Address' }
])

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
  { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
  { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' },
  { id: 10009, name: 'Test9', role: 'Test', sex: 'Man', age: 26, address: 'test abc' }
])

const popupConfig = reactive<VxeTableSelectPropTypes.PopupConfig>({
  width: 800,
  height: 500
})

const gridConfig = reactive<VxeTableSelectPropTypes.GridConfig>({
  border: true,
  formConfig: {
    data: {
      name: '',
      role: '',
      sex: '',
      num: '',
      address: ''
    },
    items: [
      { field: 'name', title: '名称', span: 8, itemRender: { name: 'VxeInput' } },
      { field: 'email', title: '邮件', span: 8, itemRender: { name: 'VxeInput' } },
      { field: 'nickname', title: '昵称', span: 8, folding: true, itemRender: { name: 'VxeInput' } },
      { field: 'role', title: '角色', span: 8, folding: true, itemRender: { name: 'VxeInput' } },
      { field: 'age', title: '年龄', span: 8, folding: true, itemRender: { name: 'VxeInput' } },
      {
        span: 8,
        collapseNode: true,
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

const formSubmitEvent: VxeTableSelectEvents.FormSubmit = () => {
  console.log('form submit')
}

const formResetEvent: VxeTableSelectEvents.FormReset = () => {
  console.log('form reset')
}
</script>
