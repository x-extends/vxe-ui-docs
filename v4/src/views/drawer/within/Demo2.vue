<template>
  <div>
    <vxe-radio-group v-model="position">
      <vxe-radio-button checked-value="top" content="上"></vxe-radio-button>
      <vxe-radio-button checked-value="bottom" content="下"></vxe-radio-button>
      <vxe-radio-button checked-value="left" content="左"></vxe-radio-button>
      <vxe-radio-button checked-value="right" content="右"></vxe-radio-button>
    </vxe-radio-group>
    <div>
      <vxe-button status="primary" content="点击弹出" @click="showPopup = true"></vxe-button>
    </div>

    <vxe-drawer
      v-model="showPopup"
      transfer
      is-within-append-to
      mask-closable
      resize
      width="400"
      height="300"
      append-to=".my-drawer-within-demo2-wrapper"
      :position="position"
    >
      <template #default>
        <vxe-grid v-bind="gridOptions"></vxe-grid>
      </template>
    </vxe-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'
import type { VxeDrawerPropTypes } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const showPopup = ref(false)
const position = ref<VxeDrawerPropTypes.Position>('right')

const gridOptions = reactive<VxeGridProps<RowVO>>({
  showFooter: true,
  border: true,
  height: '100%',
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
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
    { id: 10008, name: 'Test8', role: 'Test', sex: 'Women', age: 38, address: 'test abc' },
    { id: 10009, name: 'Test9', role: 'Develop', sex: 'Man', age: 52, address: 'test abc' },
    { id: 100010, name: 'Test10', role: 'Develop', sex: 'Women', age: 47, address: 'shenzhen' },
    { id: 100011, name: 'Test11', role: 'PM', sex: 'Man', age: 33, address: 'Shanghai' },
    { id: 100012, name: 'Test12', role: 'Test', sex: 'Women', age: 35, address: 'shenzhen' }
  ],
  footerData: [
    { seq: '合计', name: '777', sex: '333', age: '111' }
  ]
})
</script>
