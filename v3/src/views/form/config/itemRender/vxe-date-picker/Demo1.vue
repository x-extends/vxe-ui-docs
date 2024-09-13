<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #action>
        <vxe-button type="reset">重置</vxe-button>
        <vxe-button type="submit" status="primary">提交</vxe-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

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

export default Vue.extend({
  data () {
    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
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
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
        { field: 'date', title: '日期', span: 24, itemRender: { name: 'VxeDatePicker' } },
        { field: 'year', title: '年份', span: 24, itemRender: { name: 'VxeDatePicker', props: { type: 'year' } } },
        { field: 'quarter', title: '季度', span: 24, itemRender: { name: 'VxeDatePicker', props: { type: 'quarter' } } },
        { field: 'month', title: '月份', span: 24, itemRender: { name: 'VxeDatePicker', props: { type: 'month' } } },
        { field: 'week', title: '周', span: 24, itemRender: { name: 'VxeDatePicker', props: { type: 'week' } } },
        { field: 'time', title: '时间', span: 24, itemRender: { name: 'VxeDatePicker', props: { type: 'time' } } },
        { field: 'datetime', title: '日期带时间', span: 24, itemRender: { name: 'VxeDatePicker', props: { type: 'datetime' } } },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      formOptions
    }
  }
})
</script>
