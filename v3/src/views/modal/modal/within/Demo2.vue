<template>
  <div>
    <vxe-button status="primary" content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-modal
      v-model="showPopup"
      transfer
      is-within-append-to
      resize
      show-maximize
      show-minimize
      :width="600"
      :height="360"
      append-to=".my-within-demo2-wrapper"
    >
      <template #default>
        <vxe-grid v-bind="gridOptions"></vxe-grid>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      showFooter: true,
      border: true,
      height: '100%',
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        {
          title: 'Griup1',
          children: [
            { field: 'sex', title: 'Sex' },
            { field: 'age', title: 'Age' }
          ]
        },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'shenzhen' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Develop', sex: 'Women', age: 24, address: 'Shanghai' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'shenzhen' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', age: 42, address: 'shenzhen' },
        { id: 10007, name: 'Test7', role: 'PM', sex: 'Man', age: 48, address: 'Shanghai' },
        { id: 10008, name: 'Test8', role: 'Test', sex: 'Women', age: 38, address: 'shenzhen' }
      ],
      footerData: [
        { seq: '合计', name: '777', sex: '333', age: '111' }
      ]
    }

    return {
      showPopup: false,
      gridOptions
    }
  }
})
</script>
