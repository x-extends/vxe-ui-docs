<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{ name: 'VxeInput' }"></vxe-form-item>
      <vxe-form-item title="下拉表格单选" field="currUser" span="24" :item-render="currUserItemRender"></vxe-form-item>
      <vxe-form-item title="下拉表格多选" field="currUserList" span="24" :item-render="currUserListItemRender"></vxe-form-item>
      <vxe-form-item default="center" span="24" :item-render="actionItemRender"></vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeFormItemPropTypes, VxeTableSelectProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  currUser: string
  currUserList: string[]
}

const currUserItemRender = reactive<VxeFormItemPropTypes.ItemRender<FormDataVO, VxeTableSelectProps>>({
  name: 'VxeTableSelect',
  props: {
    columns: [
      { field: 'label', title: 'Name' },
      { field: 'role', title: 'Role' },
      { field: 'sex', title: 'Sex' },
      { field: 'address', title: 'Address' }
    ]
  },
  options: [
    { value: 10001, label: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { value: 10002, label: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { value: 10003, label: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { value: 10004, label: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})

const currUserListItemRender = reactive<VxeFormItemPropTypes.ItemRender<FormDataVO, VxeTableSelectProps>>({
  name: 'VxeTableSelect',
  props: {
    multiple: true,
    columns: [
      { field: 'label', title: 'Name' },
      { field: 'role', title: 'Role' },
      { field: 'sex', title: 'Sex' },
      { field: 'address', title: 'Address' }
    ]
  },
  options: [
    { value: 10001, label: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { value: 10002, label: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { value: 10003, label: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { value: 10004, label: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})

const actionItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeButtonGroup',
  options: [
    { content: '重置', type: 'reset' },
    { content: '提交', type: 'submit', status: 'primary' }
  ]
})

const formData = ref<FormDataVO>({
  name: 'test1',
  nickname: 'Testing',
  currUser: '',
  currUserList: []
})
</script>
