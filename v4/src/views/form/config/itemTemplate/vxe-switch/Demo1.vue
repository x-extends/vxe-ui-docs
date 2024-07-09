<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <vxe-input v-model="data.name"></vxe-input>
      </template>

      <template #flag1="{ data }">
        <vxe-switch v-model="data.flag1"></vxe-switch>
      </template>

      <template #flag2="{ data }">
        <vxe-switch v-model="data.flag2"></vxe-switch>
      </template>

      <template #active>
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
    { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
    { field: 'flag1', title: '开关', span: 24, itemRender: { }, slots: { default: 'flag1' } },
    { field: 'flag2', title: '开关默认值', span: 24, itemRender: { }, slots: { default: 'flag2' } },
    { align: 'center', span: 24, slots: { default: 'active' } }
  ]
})
</script>
