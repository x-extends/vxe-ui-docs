<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>

    <vxe-modal v-model="showPopup" title="在弹窗中展示多表格" width="800" height="600" min-width="800" min-height="600" show-maximize esc-closable resize>
      <template #default>
        <vxe-splitter vertical border>
          <vxe-splitter-panel height="50%">
            <vxe-splitter padding>
              <vxe-splitter-panel width="40%">
                <vxe-grid v-bind="gridOptions1"></vxe-grid>
              </vxe-splitter-panel>
              <vxe-splitter-panel>
                <vxe-grid v-bind="gridOptions2"></vxe-grid>
              </vxe-splitter-panel>
            </vxe-splitter>
          </vxe-splitter-panel>
          <vxe-splitter-panel>
            <vxe-splitter padding>
              <vxe-splitter-panel width="60%">
                <vxe-grid v-bind="gridOptions3"></vxe-grid>
              </vxe-splitter-panel>
              <vxe-splitter-panel>
                <vxe-grid v-bind="gridOptions4"></vxe-grid>
              </vxe-splitter-panel>
            </vxe-splitter>
          </vxe-splitter-panel>
        </vxe-splitter>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const showPopup = ref(false)

const gridOptions1 = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: '100%',
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})

const gridOptions2 = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: '100%',
  columns: [
    { type: 'checkbox', width: 70 },
    { field: 'name', title: 'Name', minWidth: 140 },
    { field: 'sex', title: 'Sex', width: 80 },
    { field: 'age', title: 'Age', width: 80 },
    { field: 'address', title: 'Address', width: 200 }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
    { id: 10005, name: 'Test5', role: 'PM', sex: 'Women', age: 24, address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'Develop', sex: 'Man', age: 32, address: 'Guangzhou' }
  ]
})

const gridOptions3 = reactive<VxeGridProps<RowVO>>({
  border: true,
  showFooter: true,
  height: '100%',
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 140 },
    { field: 'sex', title: 'Sex', width: 80 },
    { field: 'age', title: 'Age', width: 80 },
    { field: 'address', title: 'Address', width: 200 }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
    { id: 10005, name: 'Test5', role: 'PM', sex: 'Women', age: 24, address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'Develop', sex: 'Man', age: 32, address: 'test abc' },
    { id: 10007, name: 'Test7', role: 'Test', sex: 'Women', age: 39, address: 'Guangzhou' },
    { id: 10007, name: 'Test8', role: 'PM', sex: 'Man', age: 42, address: 'test abc' }
  ],
  footerData: [
    { seq: '合计', name: '777', sex: '333', age: '111' }
  ]
})

const gridOptions4 = reactive<VxeGridProps<RowVO>>({
  border: true,
  showFooter: true,
  height: '100%',
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' }
  ],
  footerData: [
    { seq: '合计', name: '777', sex: '333', age: '111' }
  ]
})
</script>
