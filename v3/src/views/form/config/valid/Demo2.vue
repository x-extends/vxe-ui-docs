<template>
  <div>
    <vxe-form ref="formRef" v-bind="formOptions" >
      <template #action>
        <vxe-button status="primary" content="提交" @click="submitEvent"></vxe-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
}

export default Vue.extend({
  data () {
    const formOptions: VxeFormProps<FormDataVO> = {
      preventSubmit: true,
      vertical: true,
      data: {
        name: 'test1',
        nickname: 'Testing',
        sex: '',
        age: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
        ],
        sex: [
          { required: true, message: '请选择性别' }
        ],
        age: [
          { required: true, message: '请输入年龄' },
          {
            validator ({ itemValue }) {
              // 自定义校验
              if (Number(itemValue) > 35 || Number(itemValue) < 18) {
                return new Error('年龄在 18 ~ 35 之间')
              }
            }
          }
        ]
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
        { field: 'sex', title: '性别', span: 12, itemRender: { name: 'VxeInput' } },
        { field: 'age', title: '年龄', span: 12, itemRender: { name: 'VxeInput' } },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      formOptions
    }
  },
  methods: {
    submitEvent () {
      VxeUI.modal.message({ content: '保存成功', status: 'success' })
    }
  }
})
</script>
