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
}

const actionItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeButtonGroup',
  options: [
    { name: 'back', content: '返回' },
    { name: 'cancel', content: '取消' },
    { name: 'reset', content: '重置', type: 'reset' },
    { name: 'save', content: '保存', type: 'submit', status: 'primary', icon: 'vxe-icon-save' }
  ],
  events: {
    click (slotParams, { name }) {
      console.log(name)
    }
  }
})

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    nickname: 'Testing'
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
    { align: 'center', span: 24, itemRender: actionItemRender }
  ]
})
</script>
