<template>
  <div>
    <vxe-form v-bind="formOptions" ></vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  hobbies1: string
  hobbies2: string
  address: string
}

export default Vue.extend({
  data () {
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

    const formOptions: VxeFormProps<FormDataVO> = {
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
    }

    return {
      formOptions
    }
  }
})
</script>
