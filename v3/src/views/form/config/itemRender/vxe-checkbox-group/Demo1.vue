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
  hobbiesList: string[]
  address: string
}

export default Vue.extend({
  data () {
    const hobbiesItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'VxeCheckboxGroup',
      options: [
        { label: '爬山', value: '1' },
        { label: '干架', value: '2' },
        { label: '干饭', value: '3' },
        { label: '游泳', value: '4' },
        { label: '跑步', value: '5' }
      ]
    }

    const actionItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'VxeButtonGroup',
      options: [
        { content: '重置', type: 'reset' },
        { content: '提交', type: 'submit', status: 'primary' }
      ]
    }

    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
        name: 'test1',
        nickname: 'Testing',
        hobbiesList: ['3'],
        address: ''
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
        { field: 'hobbiesList', title: '复选框', span: 24, itemRender: hobbiesItemRender },
        { align: 'center', span: 24, itemRender: actionItemRender }
      ]
    }

    return {
      formOptions,
      actionItemRender
    }
  }
})
</script>
