<template>
  <div>
    <vxe-form
      v-bind="formOptions"
      @submit="submitEvent"
      @reset="resetEvent">
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  startDate: string
  endDate: string
}

export default Vue.extend({
  data () {
    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
        name: 'test1',
        startDate: '',
        endDate: ''
      },
      rules: {
        _startAndEnd: [
          { field: 'startDate', required: true, message: '请选择开始时间' },
          { field: 'endDate', required: true, message: '请选择结束时间' }
        ]
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
        { field: '_startAndEnd', title: '2个字段格式', span: 24, itemRender: { name: 'VxeDateRangePicker', startField: 'startDate', endField: 'endDate' } },
        {
          align: 'center',
          span: 24,
          itemRender: {
            name: 'VxeButtonGroup',
            options: [
              { type: 'submit', content: '提交', status: 'primary' },
              { type: 'reset', content: '重置' }
            ]
          }
        }
      ]
    }

    return {
      formOptions
    }
  },
  methods: {
    submitEvent () {
      VxeUI.modal.message({ content: '保存成功', status: 'success' })
    },
    resetEvent () {
      VxeUI.modal.message({ content: '重置事件', status: 'info' })
    }
  }
})
</script>
