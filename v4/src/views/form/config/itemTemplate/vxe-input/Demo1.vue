<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <vxe-input v-model="data.name"></vxe-input>
      </template>

      <template #nickname="{ data }">
        <vxe-input v-model="data.nickname"></vxe-input>
      </template>

      <template #num="{ data }">
        <vxe-input v-model="data.num" type="number"></vxe-input>
      </template>

      <template #integer="{ data }">
        <vxe-input v-model="data.integer" type="integer"></vxe-input>
      </template>

      <template #float="{ data }">
        <vxe-input v-model="data.float" type="float"></vxe-input>
      </template>

      <template #date="{ data }">
        <vxe-input v-model="data.date" type="date"></vxe-input>
      </template>

      <template #year="{ data }">
        <vxe-input v-model="data.year" type="year"></vxe-input>
      </template>

      <template #quarter="{ data }">
        <vxe-input v-model="data.quarter" type="quarter"></vxe-input>
      </template>

      <template #month="{ data }">
        <vxe-input v-model="data.month" type="month"></vxe-input>
      </template>

      <template #week="{ data }">
        <vxe-input v-model="data.week" type="week"></vxe-input>
      </template>

      <template #time="{ data }">
        <vxe-input v-model="data.time" type="time"></vxe-input>
      </template>

      <template #datetime="{ data }">
        <vxe-input v-model="data.date" type="datetime"></vxe-input>
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
  num: string
  float: string
  integer: string
  date: string
  time: string
  year: string
  quarter: string
  month: string
  week: string
  datetime: string
  address: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    nickname: 'Testing',
    sex: '',
    num: '',
    integer: '',
    float: '',
    date: '',
    time: '',
    year: '',
    quarter: '',
    month: '',
    week: '',
    datetime: '',
    address: ''
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
    { field: 'nickname', title: '输入框', span: 24, itemRender: { }, slots: { default: 'nickname' } },
    { field: 'num', title: '数字', span: 24, itemRender: { }, slots: { default: 'num' } },
    { field: 'integer', title: '整数', span: 24, itemRender: { }, slots: { default: 'integer' } },
    { field: 'float', title: '小数', span: 24, itemRender: { }, slots: { default: 'float' } },
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
