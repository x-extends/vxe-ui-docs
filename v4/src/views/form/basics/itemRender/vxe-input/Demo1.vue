<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{ name: 'VxeInput' }"></vxe-form-item>
      <vxe-form-item title="输入框" field="nickname" span="24" :item-render="{ name: 'VxeInput' }"></vxe-form-item>
      <vxe-form-item title="整数" field="integer" span="24" :item-render="{ name: 'VxeInput', props: { type: 'integer' } }"></vxe-form-item>
      <vxe-form-item title="小数" field="float" span="24" :item-render="{ name: 'VxeInput', props: { type: 'float' } }"></vxe-form-item>
      <vxe-form-item title="日期" field="date" span="24" :item-render="{ name: 'VxeInput', props: { type: 'date' } }"></vxe-form-item>
      <vxe-form-item title="年份" field="year" span="24" :item-render="{ name: 'VxeInput', props: { type: 'year' } }"></vxe-form-item>
      <vxe-form-item title="季度" field="quarter" span="24" :item-render="{ name: 'VxeInput', props: { type: 'quarter' } }"></vxe-form-item>
      <vxe-form-item title="月份" field="month" span="24" :item-render="{ name: 'VxeInput', props: { type: 'month' } }"></vxe-form-item>
      <vxe-form-item title="周" field="week" span="24" :item-render="{ name: 'VxeInput', props: { type: 'week' } }"></vxe-form-item>
      <vxe-form-item title="时间" field="time" span="24" :item-render="{ name: 'VxeInput', props: { type: 'time' } }"></vxe-form-item>
      <vxe-form-item title="日期带时间" field="datetime" span="24" :item-render="{ name: 'VxeInput', props: { type: 'datetime' } }"></vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <vxe-button type="reset">重置</vxe-button>
          <vxe-button type="submit" status="primary">提交</vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

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

const formData = ref<FormDataVO>({
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
})
</script>
