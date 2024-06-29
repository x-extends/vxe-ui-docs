<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default>
          <vxe-input v-model="formData.name"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="日期" field="date" span="24" :item-render="{}">
        <template #default>
          <vxe-date-picker v-model="formData.date" type="date"></vxe-date-picker>
        </template>
      </vxe-form-item>
      <vxe-form-item title="年份" field="year" span="24" :item-render="{}">
        <template #default>
          <vxe-date-picker v-model="formData.year" type="year"></vxe-date-picker>
        </template>
      </vxe-form-item>
      <vxe-form-item title="季度" field="quarter" span="24" :item-render="{}">
        <template #default>
          <vxe-date-picker v-model="formData.quarter" type="quarter"></vxe-date-picker>
        </template>
      </vxe-form-item>
      <vxe-form-item title="月份" field="month" span="24" :item-render="{}">
        <template #default>
          <vxe-date-picker v-model="formData.month" type="month"></vxe-date-picker>
        </template>
      </vxe-form-item>
      <vxe-form-item title="周" field="week" span="24" :item-render="{}">
        <template #default>
          <vxe-date-picker v-model="formData.week" type="week"></vxe-date-picker>
        </template>
      </vxe-form-item>
      <vxe-form-item title="时间" field="time" span="24" :item-render="{}">
        <template #default>
          <vxe-date-picker v-model="formData.time" type="time"></vxe-date-picker>
        </template>
      </vxe-form-item>
      <vxe-form-item title="日期带时间" field="datetime" span="24" :item-render="{}">
        <template #default>
          <vxe-date-picker v-model="formData.date" type="datetime"></vxe-date-picker>
        </template>
      </vxe-form-item>
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
