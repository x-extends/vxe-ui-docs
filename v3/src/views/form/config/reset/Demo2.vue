<template>
  <div>
    <vxe-button status="primary" @click="handleResetEvent">手动重置</vxe-button>
    <vxe-form
      ref="formRef"
      v-bind="formOptions"
      @submit="submitEvent"
      @reset="resetEvent">
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeFormInstance, VxeFormProps, VxeFormListeners, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
  startDate: string
  endDate: string
}

export default Vue.extend({
  data () {
    const sexListItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'VxeSelect',
      props: {
        multiple: true
      },
      options: [
        { label: '女', value: 'Women' },
        { label: '男', value: 'Man' }
      ]
    }

    const formOptions: VxeFormProps<FormDataVO> = {
      data: {
        name: 'test1',
        nickname: 'Testing',
        sex: '',
        age: '',
        startDate: '',
        endDate: ''
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' }, resetValue: 'test1' },
        { field: 'sex', title: '性别', span: 12, itemRender: sexListItemRender },
        { field: 'age', title: '年龄', span: 12, itemRender: { name: 'VxeInput' } },
        {
          field: '_startAndEnd',
          title: '日期范围',
          span: 24,
          resetValue ({ currentField }) {
            if (currentField === 'startDate') {
              return '2026-08-20'
            }
            if (currentField === 'endDate') {
              return '2026-08-20'
            }
            return ''
          },
          itemRender: {
            name: 'VxeDateRangePicker',
            startField: 'startDate',
            endField: 'endDate'
          }
        },
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
      formOptions,
      sexListItemRender
    }
  },
  methods: {
    submitEvent () {
      VxeUI.modal.message({ content: '保存成功', status: 'success' })
    },
    resetEvent () {
      VxeUI.modal.message({ content: '重置事件', status: 'info' })
    },
    handleResetEvent () {
      const $form = this.$refs.formRef as VxeFormInstance<FormDataVO>
      if ($form) {
        $form.reset()
      }
    }
  }
})
</script>
