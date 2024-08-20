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

const actionItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeButtonGroup',
  options: [
    { content: '重置', type: 'reset' },
    { content: '保存', type: 'submit', status: 'primary', icon: 'vxe-icon-save' }
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
    { align: 'center', span: 24, itemRender: actionItemRender }
  ]
})
</script>
