<template>
  <div>
    <vxe-radio-group v-model="formOptions.validConfig.theme">
      <vxe-radio-button label="normal" content="简化"></vxe-radio-button>
      <vxe-radio-button label="beautify" content="高亮"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-form
      v-bind="formOptions"
      @submit="submitEvent"
      @reset="resetEvent">
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeFormProps, VxeFormPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
}

export default Vue.extend({
  data () {
    const formOptions: VxeFormProps<FormDataVO> & { validConfig: VxeFormPropTypes.ValidConfig } = {
      validConfig: {
        theme: 'beautify'
      },
      data: {
        name: '',
        nickname: '',
        sex: '',
        age: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称' }
        ],
        sex: [
          { required: true, message: '请选择性别' }
        ],
        age: [
          { required: true, message: '请输入年龄' }
        ]
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
        { field: 'sex', title: '性别', span: 12, itemRender: { name: 'VxeInput' } },
        { field: 'age', title: '年龄', span: 12, itemRender: { name: 'VxeInput' } },
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
