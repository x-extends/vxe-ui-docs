<template>
  <div>
    垂直布局：<vxe-switch v-model="formOptions.vertical"></vxe-switch>
    显示提示：<vxe-switch v-model="validConfig.showErrorMessage"></vxe-switch>
    样式：<vxe-radio-group v-model="validConfig.theme">
      <vxe-radio-button checked-value="normal" content="简化"></vxe-radio-button>
      <vxe-radio-button checked-value="beautify" content="高亮"></vxe-radio-button>
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
import { VxeUI, VxeFormProps, VxeFormPropTypes, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
}

export default Vue.extend({
  data () {
    const sexItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'VxeSelect',
      options: [
        { label: '女', value: 'Women' },
        { label: '男', value: 'Man' }
      ]
    }

    const validConfig: VxeFormPropTypes.ValidConfig = {
      theme: 'beautify',
      showErrorMessage: true
    }

    const formOptions: VxeFormProps<FormDataVO> = {
      border: true,
      vertical: true,
      titleBackground: true,
      validConfig,
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
        { field: 'sex', title: '性别', span: 12, itemRender: sexItemRender },
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
      formOptions,
      validConfig,
      sexItemRender
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
