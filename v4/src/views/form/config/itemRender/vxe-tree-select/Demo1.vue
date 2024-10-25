<template>
  <div>
    <vxe-form v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormProps, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  region: string
  regionList: string[]
}

const regionItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeTreeSelect',
  options: [
    {
      label: '广东省',
      value: '1',
      children: [
        { label: '深圳市', value: '1-1' },
        { label: '广州市', value: '1-2' }
      ]
    },
    {
      label: '北京',
      value: '2',
      children: [
        { label: '东城区', value: '2-1' },
        { label: '西城区', value: '2-2' }
      ]
    }
  ]
})

const regionListItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeTreeSelect',
  props: {
    multiple: true
  },
  options: [
    {
      label: '广东省',
      value: '1',
      children: [
        { label: '深圳市', value: '1-1' },
        { label: '广州市', value: '1-2' }
      ]
    },
    {
      label: '北京',
      value: '2',
      children: [
        { label: '东城区', value: '2-1' },
        { label: '西城区', value: '2-2' }
      ]
    }
  ]
})

const actionItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeButtonGroup',
  options: [
    { content: '重置', type: 'reset' },
    { content: '保存', type: 'submit', status: 'primary', icon: 'vxe-icon-save' }
  ]
})

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    nickname: 'Testing',
    region: '',
    regionList: []
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'region', title: '下拉树单选', span: 24, itemRender: regionItemRender },
    { field: 'regionList', title: '下拉树多选', span: 24, itemRender: regionListItemRender },
    { align: 'center', span: 24, itemRender: actionItemRender }
  ]
})
</script>
