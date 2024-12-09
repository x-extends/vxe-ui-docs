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

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  num: number | null
  float: number | null
  integer: number | null
  money: number | null
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    nickname: 'Testing',
    sex: '',
    num: null,
    integer: null,
    float: null,
    money: null
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'num', title: '数字', span: 24, itemRender: { name: 'VxeNumberInput' } },
    { field: 'integer', title: '整数', span: 24, itemRender: { name: 'VxeNumberInput', props: { type: 'integer' } } },
    { field: 'float', title: '小数', span: 24, itemRender: { name: 'VxeNumberInput', props: { type: 'float' } } },
    { field: 'money', title: '金额', span: 24, itemRender: { name: 'VxeNumberInput', props: { type: 'amount' } } },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ]
})
</script>
