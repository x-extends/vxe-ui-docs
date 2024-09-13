<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{ name: 'input' }"></vxe-form-item>
      <vxe-form-item title="文本框" field="nickname" span="24" :item-render="{ name: 'input' }"></vxe-form-item>
      <vxe-form-item title="数字" field="age" span="24" :item-render="{ name: 'input', attrs: { type: 'number' } }"></vxe-form-item>
      <vxe-form-item title="日期" field="date" span="24" :item-render="{ name: 'input', attrs: { type: 'date' } }"></vxe-form-item>
      <vxe-form-item title="月份" field="month" span="24" :item-render="{ name: 'input', attrs: { type: 'month' } }"></vxe-form-item>
      <vxe-form-item title="周" field="week" span="24" :item-render="{ name: 'input', attrs: { type: 'week' } }"></vxe-form-item>
      <vxe-form-item title="时间" field="time" span="24" :item-render="{ name: 'input', attrs: { type: 'time' } }"></vxe-form-item>
      <vxe-form-item title="颜色" field="color" span="24" :item-render="{ name: 'input', attrs: { type: 'color' } }"></vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <vxe-button type="reset">重置</vxe-button>
          <vxe-button type="submit" status="primary">提交</vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface FormDataVO {
  name: string
  role: string
  sex: string
  age: string
  date: string
  time: string
  month: string
  week: string
  color: string
  address: string
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      role: '',
      sex: '',
      age: '',
      date: '',
      time: '',
      month: '',
      week: '',
      color: '',
      address: ''
    }

    return {
      formData
    }
  }
})
</script>
