<template>
  <div>
    <vxe-form v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps, VxeFormItemPropTypes, VxeTableSelectProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  currUser: string
  currUserList: string[]
}

export default Vue.extend({
  data () {
    const currUserItemRender: VxeFormItemPropTypes.ItemRender<FormDataVO, VxeTableSelectProps> = {
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
    }

    const currUserListItemRender: VxeFormItemPropTypes.ItemRender<FormDataVO, VxeTableSelectProps> = {
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
    }

    const actionItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'VxeButtonGroup',
      options: [
        { content: '重置', type: 'reset' },
        { content: '保存', type: 'submit', status: 'primary', icon: 'vxe-icon-save' }
      ]
    }

    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
        name: 'test1',
        nickname: 'Testing',
        currUser: '',
        currUserList: []
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
        { field: 'currUser', title: '下拉表格单选', span: 24, itemRender: currUserItemRender },
        { field: 'currUserList', title: '下拉表格多选', span: 24, itemRender: currUserListItemRender },
        { align: 'center', span: 24, itemRender: actionItemRender }
      ]
    }

    return {
      currUserItemRender,
      currUserListItemRender,
      actionItemRender,
      formOptions
    }
  }
})
</script>
