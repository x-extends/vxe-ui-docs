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
  attr1: string
  attr2: string
  attr3: string
  attr4: string
  attr5: string
  attr6: string
  attr7: string
  attr8: string
  attr9: string
  attr10: string
}

const showPopup = ref(false)

const gridOptions1 = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: '100%',
  keepSource: true,
  editConfig: {
    trigger: 'click',
    mode: 'cell',
    showStatus: true
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
    { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' } },
    { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' }
  ]
})

const gridOptions2 = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: '100%',
  keepSource: true,
  editConfig: {
    trigger: 'click',
    mode: 'cell',
    showStatus: true
  },
  columns: [
    { type: 'checkbox', width: 70 },
    { field: 'name', title: 'Name', minWidth: 140, editRender: { name: 'VxeInput' } },
    { field: 'sex', title: 'Sex', width: 80, editRender: { name: 'VxeInput' } },
    { field: 'age', title: 'Age', width: 80, editRender: { name: 'VxeInput' } },
    { field: 'address', title: 'Address', width: 200, editRender: { name: 'VxeInput' } },
    { field: 'attr1', title: 'attr1', width: 100, editRender: { name: 'VxeInput' } },
    { field: 'attr2', title: 'attr2', width: 100, editRender: { name: 'VxeInput' } },
    { field: 'attr3', title: 'attr3', width: 140, editRender: { name: 'VxeInput' } },
    { field: 'attr4', title: 'attr4', width: 80, editRender: { name: 'VxeInput' } },
    { field: 'attr5', title: 'attr5', width: 120, editRender: { name: 'VxeInput' } },
    { field: 'attr6', title: 'attr6', width: 100, editRender: { name: 'VxeInput' } },
    { field: 'attr7', title: 'attr7', width: 120, editRender: { name: 'VxeInput' } },
    { field: 'attr8', title: 'attr8', width: 80, editRender: { name: 'VxeInput' } },
    { field: 'attr9', title: 'attr9', width: 100, editRender: { name: 'VxeInput' } },
    { field: 'attr10', title: 'attr10', width: 100, editRender: { name: 'VxeInput' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' },
    { id: 10005, name: 'Test5', role: 'PM', sex: 'Women', age: 24, address: 'Shanghai', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' },
    { id: 10006, name: 'Test6', role: 'Develop', sex: 'Man', age: 32, address: 'Guangzhou', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' }
  ]
})

const gridOptions3 = reactive<VxeGridProps<RowVO>>({
  border: true,
  showFooter: true,
  height: '100%',
  keepSource: true,
  editConfig: {
    trigger: 'click',
    mode: 'cell',
    showStatus: true
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 140, editRender: { name: 'VxeInput' } },
    { field: 'sex', title: 'Sex', width: 80, editRender: { name: 'VxeInput' } },
    { field: 'age', title: 'Age', width: 80, editRender: { name: 'VxeInput' } },
    { field: 'address', title: 'Address', width: 200, editRender: { name: 'VxeInput' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' },
    { id: 10005, name: 'Test5', role: 'PM', sex: 'Women', age: 24, address: 'Shanghai', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' },
    { id: 10006, name: 'Test6', role: 'Develop', sex: 'Man', age: 32, address: 'test abc', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' },
    { id: 10007, name: 'Test7', role: 'Test', sex: 'Women', age: 39, address: 'Guangzhou', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' },
    { id: 10007, name: 'Test8', role: 'PM', sex: 'Man', age: 42, address: 'test abc', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' }
  ],
  footerData: [
    { seq: '合计', name: '777', sex: '333', age: '111' }
  ]
})

const gridOptions4 = reactive<VxeGridProps<RowVO>>({
  border: true,
  showFooter: true,
  height: '100%',
  keepSource: true,
  editConfig: {
    trigger: 'click',
    mode: 'cell',
    showStatus: true
  },
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
    { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' } },
    { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', attr1: '', attr2: '', attr3: '333', attr4: '444', attr5: '', attr6: '666', attr7: '', attr8: '888', attr9: '', attr10: '1010' }
  ],
  footerData: [
    { seq: '合计', name: '777', sex: '333', age: '111' }
  ]
})
</script>
