<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <vxe-number-input v-model="data.name"></vxe-number-input>
      </template>

      <template #num="{ data }">
        <vxe-number-input v-model="data.num" type="number"></vxe-number-input>
      </template>

      <template #integer="{ data }">
        <vxe-number-input v-model="data.integer" type="integer"></vxe-number-input>
      </template>

      <template #float="{ data }">
        <vxe-number-input v-model="data.float" type="float"></vxe-number-input>
      </template>

      <template #action>
        <vxe-button type="reset">重置</vxe-button>
        <vxe-button type="submit" status="primary">提交</vxe-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  num: number | null
  float: number | null
  integer: number | null
  money: number | null
}

export default Vue.extend({
  data () {
    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
        name: 'test1',
        num: null,
        integer: null,
        float: null,
        money: null
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
        { field: 'num', title: '数字', span: 24, itemRender: { }, slots: { default: 'num' } },
        { field: 'integer', title: '整数', span: 24, itemRender: { }, slots: { default: 'integer' } },
        { field: 'float', title: '小数', span: 24, itemRender: { }, slots: { default: 'float' } },
        { field: 'money', title: '金额', span: 24, itemRender: { }, slots: { default: 'amount' } },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      formOptions
    }
  }
})
</script>
