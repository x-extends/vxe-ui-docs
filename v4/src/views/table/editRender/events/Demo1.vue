<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="editConfig"
      :data="tableData"
      @edit-activated="editActivatedEvent"
      @edit-closed="editClosedEvent">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="nameEditRender"></vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="sexEditRender"></vxe-column>
      <vxe-column field="age" title="Age" :edit-render="ageEditRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeColumnPropTypes, VxeTablePropTypes, VxeTableEvents } from 'vxe-table'
import { VxeSelectProps, VxeNumberInputProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const editConfig = ref<VxeTablePropTypes.EditConfig>({
  trigger: 'click',
  mode: 'cell'
})

const nameEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO>>({
  name: 'input',
  events: {
    input (cellParams) {
      const { row, column } = cellParams
      console.log('name', row[column.field])
    }
  }
})

const sexEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps>>({
  name: 'VxeSelect',
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ],
  events: {
    change (cellParams, targetParams) {
      const { row, column } = cellParams
      console.log('sex', row[column.field])
    }
  }
})

const ageEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeNumberInputProps >>({
  name: 'VxeNumberInput',
  events: {
    change (cellParams, targetParams) {
      const { row, column } = cellParams
      console.log('age', row[column.field])
      console.log('cellParams:', cellParams, 'targetParams:', targetParams)
    }
  }
})

const editActivatedEvent: VxeTableEvents.EditActivated<RowVO> = ({ column }) => {
  console.log(`激活编辑 field=${column.field}`)
}

const editClosedEvent: VxeTableEvents.EditClosed<RowVO> = ({ column, row }) => {
  console.log(`编辑结束 field=${column.field} 值=${row[column.field]}`)
}
</script>
