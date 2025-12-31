<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <vxe-input v-model="data.name"></vxe-input>
      </template>

      <template #selectDate="{ data }">
        <vxe-date-range-picker v-model="data.selectDate" type="date"></vxe-date-range-picker>
      </template>

      <template #dates="{ data }">
        <vxe-date-range-picker v-model="data.selectDate" type="date"></vxe-date-range-picker>
      </template>

      <template #startAndEnd="{ data }">
        <vxe-date-range-picker v-model:start-value="data.startDate" v-model:end-value="data.endDate" type="date"></vxe-date-range-picker>
      </template>

      <template #action>
        <vxe-button type="reset">重置</vxe-button>
        <vxe-button type="submit" status="primary">提交</vxe-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  selectDate: string
  dates: string[]
  startDate: string
  endDate: string
  address: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    nickname: 'Testing',
    sex: '',
    selectDate: '2025-05-10,2025-05-15',
    dates: ['2025-05-02', '2025-05-08'],
    startDate: '2025-05-01',
    endDate: '2025-06-20',
    address: ''
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
    { field: 'selectDate', title: '字符串格式', span: 24, itemRender: { }, slots: { default: 'selectDate' } },
    { field: 'dates', title: '数组格式', span: 24, itemRender: { }, slots: { default: 'dates' } },
    { field: 'startAndEnd', title: '2个字段格式', span: 24, itemRender: { }, slots: { default: 'startAndEnd' } },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ]
})
</script>
