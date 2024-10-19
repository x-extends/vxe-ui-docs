<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{ name: 'VxeInput' }"></vxe-form-item>
      <vxe-form-item align="center" span="24" :item-render="actionItemRender"></vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  flag1: boolean
  flag2: boolean
  address: string
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

const formData = ref<FormDataVO>({
  name: 'test1',
  nickname: 'Testing',
  flag1: false,
  flag2: true,
  address: ''
})
</script>
