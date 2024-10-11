<template>
  <div>
    <vxe-table
      border
      show-overflow
      show-footer
      :menu-config="menuConfig"
      :data="tableData"
      :footer-data="footerData">
      <vxe-column field="checkbox" type="checkbox" width="50"></vxe-column>
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column title="Name" field="name"></vxe-column>
      <vxe-column title="Nickname" field="nickname"></vxe-column>
      <vxe-column title="Age" field="age"></vxe-column>
      <vxe-column title="Role" field="role"></vxe-column>
      <vxe-column title="Address" field="address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const menuConfig: VxeTablePropTypes.MenuConfig = {
      footer: {
        options: [
          [
            { code: 'EXPORT_ALL', name: '导出全部数据.csv', prefixConfig: { icon: 'vxe-icon-download' } }
          ]
        ]
      }
    }

    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
      { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
      { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
    ]

    const footerData: VxeTablePropTypes.FooterData = [
      { checkbox: '合计', age: 135 }
    ]

    return {
      menuConfig,
      tableData,
      footerData
    }
  }
})
</script>
