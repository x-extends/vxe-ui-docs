<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #action>
        <el-button native-type="reset">重置</el-button>
        <el-button native-type="submit" type="primary">提交</el-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  date1: string
  date2: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    date1: '',
    date2: ''
  },
  rules: {
    date1: [
      { required: true, content: '请输入' }
    ],
    date2: [
      { required: true, content: '请输入' }
    ]
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'ElInput' } },
    { field: 'date1', title: '日期', span: 24, itemRender: { name: 'ElDatePicker', props: { type: 'date', valueFormat: 'YYYY-MM-DD' } } },
    { field: 'date2', title: '日期带时间', span: 24, itemRender: { name: 'ElDatePicker', props: { type: 'datetime', valueFormat: 'YYYY-MM-DD HH:mm:ss' } } },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ]
})
</script>
