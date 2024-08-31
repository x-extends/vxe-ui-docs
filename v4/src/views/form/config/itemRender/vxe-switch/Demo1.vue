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
  flag1: boolean
  flag2: boolean
  address: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    nickname: 'Testing',
    flag1: false,
    flag2: true,
    address: ''
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'flag1', title: '开关', span: 24, itemRender: { name: 'VxeSwitch' } },
    { field: 'flag2', title: '开关默认值', span: 24, itemRender: { name: 'VxeSwitch' } },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ]
})
</script>
