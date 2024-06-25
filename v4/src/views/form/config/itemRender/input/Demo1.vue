<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #active>
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

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
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
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'input' } },
    { field: 'nickname', title: '文本框', span: 24, itemRender: { name: 'input' } },
    { field: 'age', title: '数字', span: 24, itemRender: { name: 'input', attrs: { type: 'number' } } },
    { field: 'date', title: '日期', span: 24, itemRender: { name: 'input', attrs: { type: 'date' } } },
    { field: 'month', title: '月份', span: 24, itemRender: { name: 'input', attrs: { type: 'month' } } },
    { field: 'week', title: '周', span: 24, itemRender: { name: 'input', attrs: { type: 'week' } } },
    { field: 'time', title: '时间', span: 24, itemRender: { name: 'input', attrs: { type: 'time' } } },
    { field: 'color', title: '颜色', span: 24, itemRender: { name: 'input', attrs: { type: 'color' } } },
    { align: 'center', span: 24, slots: { default: 'active' } }
  ]
})
</script>
