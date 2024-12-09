<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{ name: 'VxeInput' }"></vxe-form-item>
      <vxe-form-item title="数值" field="num" span="24" :item-render="{ name: 'VxeNumberInput' }"></vxe-form-item>
      <vxe-form-item title="整数" field="integer" span="24" :item-render="{ name: 'VxeNumberInput', props: { type: 'integer' } }"></vxe-form-item>
      <vxe-form-item title="小数" field="float" span="24" :item-render="{ name: 'VxeNumberInput', props: { type: 'float' } }"></vxe-form-item>
      <vxe-form-item title="金额" field="money" span="24" :item-render="{ name: 'VxeNumberInput', props: { type: 'amount' } }"></vxe-form-item>
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
  num: number | null
  float: number | null
  integer: number | null
  money: number | null
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      nickname: 'Testing',
      num: null,
      integer: null,
      float: null,
      money: null
    }

    const actionItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'VxeButtonGroup',
      options: [
        { content: '重置', type: 'reset' },
        { content: '提交', type: 'submit', status: 'primary' }
      ]
    }

    return {
      formData,
      actionItemRender
    }
  }
})
</script>
