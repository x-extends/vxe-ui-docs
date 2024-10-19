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

<script lang="ts">
import Vue from 'vue'
import { VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      nickname: 'Testing'
    }

    const actionItemRender: VxeFormItemPropTypes.ItemRender = {
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
    }

    return {
      formData,
      actionItemRender
    }
  }
})
</script>
