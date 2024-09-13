<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{ name: 'VxeInput' }"></vxe-form-item>
      <vxe-form-item title="单选框" field="hobbies1" span="24" :item-render="hobbies1ItemRender"></vxe-form-item>
      <vxe-form-item title="单选按钮" field="hobbies2" span="24" :item-render="hobbies2ItemRender"></vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <vxe-button type="reset">重置</vxe-button>
          <vxe-button type="submit" status="primary">提交</vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormItemPropTypes } from 'vxe-pc-ui'

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

    const formData: FormDataVO = {
      name: 'test1',
      nickname: 'Testing',
      hobbies1: '5',
      hobbies2: '3',
      address: ''
    }

    return {
      hobbies1ItemRender,
      hobbies2ItemRender,
      formData
    }
  }
})
</script>
