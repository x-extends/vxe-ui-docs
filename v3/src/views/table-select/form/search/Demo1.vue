<template>
  <div>
    <vxe-table-select
      v-model="val1"
      :columns="columnList"
      :options="tableData"
      :grid-config="gridConfig"
      @form-submit="formSubmitEvent"
      @form-reset="formResetEvent">
    </vxe-table-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTableSelectPropTypes } from 'vxe-pc-ui'

interface RowVO {
  value: number
  label: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const columnList: VxeTableSelectPropTypes.Columns = [
      { field: 'label', title: 'Name' },
      { field: 'role', title: 'Role' },
      { field: 'sex', title: 'Sex' },
      { field: 'address', title: 'Address' }
    ]

    const tableData: RowVO[] = [
      { value: 10001, label: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { value: 10002, label: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { value: 10003, label: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { value: 10004, label: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]

    const gridConfig: VxeTableSelectPropTypes.GridConfig = {
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
    }

    return {
      val1: null,
      columnList,
      tableData,
      gridConfig
    }
  },
  methods: {
    formSubmitEvent () {
      console.log('form submit')
    },
    formResetEvent () {
      console.log('form reset')
    }
  }
})
</script>
