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
  selectDate: string
  dates: string[]
  startDate: string
  endDate: string
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
        selectDate: '2025-05-10,2025-05-15',
        dates: ['2025-05-02', '2025-05-08'],
        endDate: '2025-05-20',
        startDate: '2025-06-01',
        address: ''
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
        { field: 'selectDate', title: '字符串格式', span: 24, itemRender: { name: 'VxeDateRangePicker' } },
        { field: 'dates', title: '数组格式', span: 24, itemRender: { name: 'VxeDateRangePicker' } },
        { field: 'startAndEnd', title: '2个字段格式', span: 24, itemRender: { name: 'VxeDateRangePicker', startField: 'startDate', endField: 'endDate' } },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      formOptions
    }
  }
})
</script>
