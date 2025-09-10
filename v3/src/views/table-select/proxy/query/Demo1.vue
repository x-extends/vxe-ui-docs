<template>
  <div>
    <vxe-table-select v-model="val1" :columns="columnList" :grid-config="gridConfig"></vxe-table-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTableSelectPropTypes } from 'vxe-pc-ui'

interface RowVO {
  value: number
  label: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

// 模拟接口
const findList = () => {
  console.log('调用查询接口')
  return new Promise<RowVO[]>(resolve => {
    setTimeout(() => {
      const list: RowVO[] = [
        { value: 10001, label: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
        { value: 10002, label: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { value: 10003, label: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { value: 10004, label: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
        { value: 10005, label: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
        { value: 10006, label: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },
        { value: 10007, label: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },
        { value: 10008, label: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' },
        { value: 10009, label: 'Test9', nickname: 'T9', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },
        { value: 100010, label: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 35, address: 'Guangzhou' }
      ]
      resolve(list)
    }, 300)
  })
}

export default Vue.extend({
  data () {
    const columnList: VxeTableSelectPropTypes.Columns = [
      { type: 'radio', width: 70 },
      { field: 'label', title: 'Name' },
      { field: 'role', title: 'Role' },
      { field: 'sex', title: 'Sex' },
      { field: 'address', title: 'Address' }
    ]

    const gridConfig: VxeTableSelectPropTypes.GridConfig = {
      border: true,
      proxyConfig: {
        ajax: {
          query: () => {
            // 默认接收 Promise<any[]>
            return findList()
          }
        }
      }
    }

    const val1 = null

    return {
      columnList,
      gridConfig,
      val1
    }
  }
})
</script>
