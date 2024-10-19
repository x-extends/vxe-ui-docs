<template>
  <div>
    <vxe-form v-bind="formOptions" ></vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormProps, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  hobbies1: string
  hobbies2: string
  address: string
}

const hobbies1ItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeRadioGroup',
  options: [
    { label: '爬山', value: '1' },
    { label: '干架', value: '2' },
    { label: '干饭', value: '3' },
    { label: '游泳', value: '4' },
    { label: '跑步', value: '5' }
  ]
})

const hobbies2ItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeRadioGroup',
  props: {
    type: 'button'
  },
  options: [
    { label: '爬山', value: '1' },
    { label: '干架', value: '2' },
    { label: '干饭', value: '3' },
    { label: '游泳', value: '4' },
    { label: '跑步', value: '5' }
  ]
})

const actionItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeButtonGroup',
  options: [
    { content: '重置', type: 'reset' },
    { content: '提交', type: 'submit', status: 'primary' }
  ]
})

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    nickname: 'Testing',
    hobbies1: '5',
    hobbies2: '3',
    address: ''
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'hobbies1', title: '单选框', span: 24, itemRender: hobbies1ItemRender },
    { field: 'hobbies2', title: '单选按钮', span: 24, itemRender: hobbies2ItemRender },
    { align: 'center', span: 24, itemRender: actionItemRender }
  ]
})
</script>
