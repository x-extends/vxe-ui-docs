<template>
  <div>
    <vxe-form v-bind="formOptions" v-on="formEvents" ></vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeUI, VxeFormProps, VxeFormItemPropTypes, VxeFormListeners, VxeSelectProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  roleList: string[]
}

const roleListItemRender = reactive<VxeFormItemPropTypes.ItemRender<FormDataVO, VxeSelectProps>>({
  name: 'VxeSelect',
  props: {
    multiple: true
  },
  options: [
    { label: 'Develop', value: 'develop' },
    { label: 'Test', value: 'test' },
    { label: 'PM', value: 'pm' }
  ]
})

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  data: {
    name: 'test1',
    nickname: 'Testing',
    roleList: []
  },
  rules: {
    roleList: [
      { required: true, type: 'array', message: '至少选一个' }
    ]
  },
  items: [
    { field: 'name', title: '名称', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'roleList', title: '角色', span: 12, itemRender: roleListItemRender },
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
