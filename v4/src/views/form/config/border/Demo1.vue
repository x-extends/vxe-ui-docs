<template>
  <div>
    <vxe-form v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormItemPropTypes, VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
  address: string
}

const sexItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeSelect',
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ]
})

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  border: true,
  verticalAlign: 'center',
  titleWidth: 100,
  data: {
    name: 'test1',
    nickname: '',
    sex: '',
    age: '',
    address: ''
  },
  items: [
    { field: 'name', title: '名称', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'nickname', title: '昵称', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'sex', title: '性别', span: 12, itemRender: sexItemRender },
    { field: 'age', title: '年龄', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'address', title: '地址', span: 24, itemRender: { name: 'VxeTextarea' } }
  ]
})
</script>
