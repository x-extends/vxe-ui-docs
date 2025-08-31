<template>
  <div>
    <vxe-form v-bind="formOptions" v-on="formEvents" ></vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeUI, VxeFormProps, VxeFormListeners } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: number
  birthday: string
  describe: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  data: {
    name: '',
    nickname: '',
    sex: '0',
    age: 22,
    birthday: '',
    describe: ''
  },
  items: [
    {
      span: 12,
      children: [
        { field: 'name', title: '名称', span: 12, itemRender: { name: 'VxeInput' } },
        { field: 'sex', title: '性别', span: 12, itemRender: { name: 'VxeInput' } },
        { field: 'age', title: '年龄', span: 24, itemRender: { name: 'VxeNumberInput' } },
        { field: 'birthday', title: '生日', span: 24, itemRender: { name: 'VxeDatePicker' } }
      ]
    },
    {
      span: 12,
      children: [
        { field: 'nickname', title: '昵称', span: 24, itemRender: { name: 'VxeInput' } }
      ]
    },
    {
      span: 24,
      children: [
        { field: 'describe', title: '描述', span: 24, itemRender: { name: 'VxeTextarea' } }
      ]
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
})

const formEvents: VxeFormListeners<FormDataVO> = {
  submit () {
    VxeUI.modal.message({ content: '保存成功', status: 'success' })
  },
  reset () {
    VxeUI.modal.message({ content: '重置事件', status: 'info' })
  }
}
</script>
