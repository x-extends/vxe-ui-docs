<template>
  <div>
    <el-button @click="insertEvent">新增</el-button>
    <el-button @click="saveEvent">保存</el-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { Modal } from 'ant-design-vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

const gridRef = ref<VxeGridInstance>()

const restaurants = [
  { value: 'Designer', name: 'Designer' },
  { value: 'Develop', name: 'Develop' },
  { value: 'Test', name: 'Test' },
  { value: 'PM', name: 'PM' }
]

const gridOptions = reactive({
  border: true,
  showOverflow: true,
  keepSource: true,
  height: 460,
  loading: false,
  data: [],
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'checkbox', width: 60 },
    { type: 'seq', title: 'Number', width: 80 },
    { field: 'name', title: 'ElInput', minWidth: 140, editRender: { name: 'ElInput' } },
    {
      field: 'role',
      title: 'ElAutocomplete',
      width: 160,
      editRender: {
        name: 'ElAutocomplete',
        props: {
          fetchSuggestions (queryString: any, cb: (params: any) => void) {
            const results = queryString ? restaurants.filter(item => (item.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)) : restaurants
            setTimeout(() => {
              cb(results)
            }, 500 * Math.random())
          }
        }
      }
    },
    { field: 'age', title: 'ElInputNumber', width: 160, editRender: { name: 'ElInputNumber', props: { max: 99, min: 18 } } },
    { field: 'sex', title: 'ElSelect', width: 140, editRender: { name: 'ElSelect', options: [] } },
    { field: 'sex1', title: 'ElSelect（不建议放在单元格）', width: 260, editRender: { name: 'ElSelect', options: [], props: { multiple: true, clearable: true } } },
    { field: 'sex2', title: 'ElSelect', width: 140, editRender: { name: 'ElSelect', optionGroups: [], props: { clearable: true } } },
    { field: 'region', title: 'ElCascader', width: 200, editRender: { name: 'ElCascader', props: { options: [] } } },
    { field: 'date', title: 'ElDatePicker', width: 200, editRender: { name: 'ElDatePicker', props: { type: 'date', format: 'YYYY/MM/DD' } } },
    { field: 'date1', title: 'DateTimePicker', width: 220, editRender: { name: 'ElDatePicker', props: { type: 'datetime', format: 'YYYY-MM-DD HH:mm:ss' } } },
    { field: 'date5', title: 'ElTimeSelect', width: 200, editRender: { name: 'ElTimeSelect', props: { pickerOptions: { start: '08:30', step: '00:15', end: '18:30' } } } },
    { field: 'flag', title: 'ElSwitch', width: 100, cellRender: { name: 'ElSwitch' } },
    { field: 'rate', title: 'ElRate', width: 200, cellRender: { name: 'ElRate' } }
  ]
} as VxeGridProps)

const findSexList = () => {
  const sexList = [
    { label: '男', value: '1' },
    { label: '女', value: '0' }
  ]
  if (gridOptions.columns) {
    const column5 = gridOptions.columns[5]
    if (column5.editRender) {
      column5.editRender.options = sexList
    }
    const column6 = gridOptions.columns[6]
    if (column6.editRender) {
      column6.editRender.options = sexList
    }
  }
}

const findRegionList = () => {
  const regionList = [
    {
      label: '北京',
      value: 1,
      children: [
        { value: 3, label: '东城区' },
        { value: 4, label: '西城区' }
      ]
    },
    {
      label: '上海',
      value: 21,
      children: [
        { value: 23, label: '黄浦区' },
        { value: 24, label: '卢湾区' }
      ]
    },
    {
      label: '广东',
      value: 42,
      children: [
        { value: 43, label: '广州市' },
        { value: 67, label: '深圳市' }
      ]
    }
  ]
  if (gridOptions.columns) {
    const column8 = gridOptions.columns[8]
    if (column8.editRender && column8.editRender.props) {
      column8.editRender.props.options = regionList
    }
  }
}

const findSexGroupList = () => {
  const sexGroupList = [
    {
      label: '分组1',
      options: [
        { label: '男', value: '1' }
      ]
    },
    {
      label: '分组2',
      options: [
        { label: '女', value: '0' }
      ]
    }
  ]
  if (gridOptions.columns) {
    const column7 = gridOptions.columns[7]
    if (column7.editRender) {
      column7.editRender.optionGroups = sexGroupList
    }
  }
}

const insertEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const record = {
      role: '',
      age: 18,
      sex1: [],
      region: [],
      flag: false,
      rate: 2
    }
    const { row: newRow } = await $grid.insert(record)
    $grid.setEditRow(newRow)
  }
}

const saveEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    const { insertRecords, removeRecords, updateRecords } = $grid.getRecordset()
    if (insertRecords.length || removeRecords.length || updateRecords.length) {
      Modal.success({
        title: '提示',
        content: `insertRecords=${insertRecords.length}; removeRecords=${removeRecords.length}; updateRecords=${updateRecords.length}`
      })
    } else {
      Modal.info({
        title: '提示',
        content: '数据未改动！'
      })
    }
  }
}

findSexList()
findRegionList()
findSexGroupList()

gridOptions.loading = true
setTimeout(() => {
  gridOptions.data = [
    { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex1: [], state: '', region: [], age: 28, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 5, rate1: 59, flag: false, address: 'Shenzhen' },
    { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '1', sex1: [], state: '', region: [], age: 22, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, rate1: 22, flag: false, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '0', sex1: [], state: '', region: [], age: 32, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 12, flag: false, address: 'Shanghai' },
    { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', sex1: ['1', '0'], state: '', region: [], age: 23, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 33, rate1: 4, flag: true, address: 'Shenzhen' },
    { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', sex1: ['1', '0'], state: '', region: [], age: 30, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 0, rate1: 15, flag: true, address: 'Shanghai' },
    { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '0', sex1: [], state: '', region: [], age: 21, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 73, flag: false, address: 'Shenzhen' },
    { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: '1', sex1: ['1'], state: '', region: [], age: 29, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 0, rate1: 0, flag: true, address: 'Guangzhou' },
    { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '1', sex1: [], state: '', region: [], age: 35, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, rate1: 14, flag: false, address: 'Shenzhen' },
    { id: 10009, name: 'Test9', nickname: 'T9', role: 'Test', sex: '1', sex1: ['0'], state: '', region: [], age: 24, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 52, flag: false, address: 'Shenzhen' },
    { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '1', sex1: [], state: '', region: [], age: 20, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 4, rate1: 83, flag: false, address: 'Guangzhou' }
  ]
  gridOptions.loading = false
}, 500)
</script>
