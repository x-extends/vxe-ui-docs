<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #action>
        <vxe-button type="reset">重置</vxe-button>
        <vxe-button type="submit" status="primary">提交</vxe-button>
      </template>
    </vxe-form>
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
    const hobbies1ItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'VxeRadioGroup',
      options: [
        { label: '爬山', value: '1' },
        { label: '干架', value: '2' },
        { label: '干饭', value: '3' },
        { label: '游泳', value: '4' },
        { label: '跑步', value: '5' }
      ]
    }

    const hobbies2ItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'VxeRadioGroup',
      props: {
        type: 'button'
      },
      options: [
        { label: '爬山', value: '1' },
        { label: '干架', value: '2' },
        { label: '干饭', value: '3' },
        { label: '游泳', value: '4' },
        { label: '跑步', value: '5' }
      ]
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
        { field: 'hobbies1', title: '单选框', span: 24, itemRender: hobbies1ItemRender },
        { field: 'hobbies2', title: '单选按钮', span: 24, itemRender: hobbies2ItemRender },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      hobbies1ItemRender,
      hobbies2ItemRender,
      formOptions
    }
  }
})
</script>
