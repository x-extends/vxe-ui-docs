<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{ name: 'VxeInput' }"></vxe-form-item>
      <vxe-form-item title="下拉树选择单选" field="region" span="24" :item-render="regionItemRender"></vxe-form-item>
      <vxe-form-item title="下拉树选择多选" field="regionList" span="24" :item-render="regionListItemRender"></vxe-form-item>
      <vxe-form-item default="center" span="24" :item-render="actionItemRender"></vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeFormItemPropTypes } from 'vxe-pc-ui'

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
    { content: '提交', type: 'submit', status: 'primary' }
  ]
})

const formData = ref<FormDataVO>({
  name: 'test1',
  nickname: 'Testing',
  region: '',
  regionList: []
})
</script>
