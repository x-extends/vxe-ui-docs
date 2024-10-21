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
  role: string
  nickname: string
  sex: string
  age: string
  num: string
  createDate: string
  updateDate: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 100,
  titleColon: true,
  titleAlign: 'right',
  data: {
    name: 'test1',
    role: '',
    nickname: 'Testing',
    sex: '',
    age: '',
    num: '',
    createDate: '',
    updateDate: ''
  },
  items: [
    { field: 'name', title: '名称', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'nickname', title: '昵称', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'role', title: '角色', span: 12, folding: true, itemRender: { name: 'VxeInput' } },
    { field: 'sex', title: '性别', span: 12, folding: true, itemRender: { name: 'VxeInput' } },
    { field: 'age', title: '年龄', span: 12, folding: true, itemRender: { name: 'VxeInput' } },
    { field: 'num', title: '大小', span: 12, folding: true, itemRender: { name: 'VxeInput' } },
    { field: 'createDate', title: '创建时间', span: 12, folding: true, itemRender: { name: 'VxeInput' } },
    { field: 'updateDate', title: '更新时间', span: 12, folding: true, itemRender: { name: 'VxeInput' } },
    {
      align: 'center',
      span: 24,
      collapseNode: true,
      itemRender: {
        name: 'VxeButtonGroup',
        options: [
          { type: 'submit', content: '搜索', status: 'primary' },
          { type: 'reset', content: '重置' }
        ]
      }
    }
  ]
})

const formEvents: VxeFormListeners<FormDataVO> = {
  submit () {
    VxeUI.modal.message({ content: '搜索', status: 'success' })
  }
}
</script>
