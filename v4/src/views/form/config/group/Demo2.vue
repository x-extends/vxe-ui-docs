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
  identityCard: string
  health: string
  describe: string
  address: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  border: true,
  titleBackground: true,
  titleWidth: 'auto',
  titleAlign: 'right',
  data: {
    name: '',
    nickname: '',
    sex: '0',
    age: 22,
    birthday: '',
    identityCard: '',
    health: '',
    describe: '',
    address: ''
  },
  items: [
    {
      span: 24,
      vertical: true,
      titleBold: true,
      title: '基础信息',
      titlePrefix: {
        icon: 'vxe-icon-user',
        iconStatus: 'primary'
      },
      children: [
        { field: 'name', title: '名称', span: 8, itemRender: { name: 'VxeInput' } },
        { field: 'nickname', title: '昵称', span: 8, itemRender: { name: 'VxeInput' } },
        { field: 'sex', title: '性别', span: 8, itemRender: { name: 'VxeInput' } },
        { field: 'age', title: '年龄', span: 8, itemRender: { name: 'VxeNumberInput' } }
      ]
    },
    {
      span: 24,
      vertical: true,
      titleBold: true,
      title: '隐私信息',
      titlePrefix: {
        icon: 'vxe-icon-lock',
        iconStatus: 'primary'
      },
      children: [
        { field: 'birthday', title: '生日', span: 8, itemRender: { name: 'VxeDatePicker' } },
        { field: 'identityCard', title: '身份证', span: 8, itemRender: { name: 'VxeInput' } },
        { field: 'health', title: '健康状态', span: 8, itemRender: { name: 'VxeInput' } }
      ]
    },
    {
      span: 24,
      vertical: true,
      titleBold: true,
      title: '其他信息',
      titlePrefix: {
        icon: 'vxe-icon-edit',
        iconStatus: 'primary'
      },
      children: [
        { field: 'describe', title: '备注', span: 24, itemRender: { name: 'VxeTextarea' } },
        { field: 'address', title: '地址', span: 24, itemRender: { name: 'VxeTextarea' } }
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
