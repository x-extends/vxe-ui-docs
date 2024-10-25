<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{ name: 'VxeInput' }"></vxe-form-item>
      <vxe-form-item title="日期" field="date" span="24" :item-render="{ name: 'VxeDatePicker' }"></vxe-form-item>
      <vxe-form-item title="年份" field="year" span="24" :item-render="{ name: 'VxeDatePicker', props: { type: 'year' } }"></vxe-form-item>
      <vxe-form-item title="季度" field="quarter" span="24" :item-render="{ name: 'VxeDatePicker', props: { type: 'quarter' } }"></vxe-form-item>
      <vxe-form-item title="月份" field="month" span="24" :item-render="{ name: 'VxeDatePicker', props: { type: 'month' } }"></vxe-form-item>
      <vxe-form-item title="周" field="week" span="24" :item-render="{ name: 'VxeDatePicker', props: { type: 'week' } }"></vxe-form-item>
      <vxe-form-item title="时间" field="time" span="24" :item-render="{ name: 'VxeDatePicker', props: { type: 'time' } }"></vxe-form-item>
      <vxe-form-item title="日期带时间" field="datetime" span="24" :item-render="{ name: 'VxeDatePicker', props: { type: 'datetime' } }"></vxe-form-item>
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
