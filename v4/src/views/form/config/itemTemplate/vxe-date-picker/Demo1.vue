<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <vxe-input v-model="data.name"></vxe-input>
      </template>

      <template #date="{ data }">
        <vxe-date-picker v-model="data.date" type="date"></vxe-date-picker>
      </template>

      <template #year="{ data }">
        <vxe-date-picker v-model="data.year" type="year"></vxe-date-picker>
      </template>

      <template #quarter="{ data }">
        <vxe-date-picker v-model="data.quarter" type="quarter"></vxe-date-picker>
      </template>

      <template #month="{ data }">
        <vxe-date-picker v-model="data.month" type="month"></vxe-date-picker>
      </template>

      <template #week="{ data }">
        <vxe-date-picker v-model="data.week" type="week"></vxe-date-picker>
      </template>

      <template #time="{ data }">
        <vxe-date-picker v-model="data.time" type="time"></vxe-date-picker>
      </template>

      <template #datetime="{ data }">
        <vxe-date-picker v-model="data.date" type="datetime"></vxe-date-picker>
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
  date: string
  time: string
  year: string
  quarter: string
  month: string
  week: string
  datetime: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    date: '',
    time: '',
    year: '',
    quarter: '',
    month: '',
    week: '',
    datetime: ''
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
    { field: 'date', title: '日期', span: 24, itemRender: { }, slots: { default: 'date' } },
    { field: 'year', title: '年份', span: 24, itemRender: { }, slots: { default: 'year' } },
    { field: 'quarter', title: '季度', span: 24, itemRender: { }, slots: { default: 'quarter' } },
    { field: 'month', title: '月份', span: 24, itemRender: { }, slots: { default: 'month' } },
    { field: 'week', title: '周', span: 24, itemRender: { }, slots: { default: 'week' } },
    { field: 'time', title: '时间', span: 24, itemRender: { }, slots: { default: 'time' } },
    { field: 'datetime', title: '日期带时间', span: 24, itemRender: { }, slots: { default: 'datetime' } },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ]
})
</script>
