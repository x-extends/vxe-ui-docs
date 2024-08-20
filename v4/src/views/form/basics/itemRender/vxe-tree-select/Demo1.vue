<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{ name: 'VxeInput' }"></vxe-form-item>
      <vxe-form-item title="下拉框" field="region" span="24" :item-render="regionItemRender"></vxe-form-item>
      <vxe-form-item title="下拉框多选" field="regionList" span="24" :item-render="regionListItemRender"></vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <vxe-button type="reset">重置</vxe-button>
          <vxe-button type="submit" status="primary">提交</vxe-button>
        </template>
      </vxe-form-item>
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
      children: [
        { label: '深圳市', value: '1-1' },
        { label: '广州市', value: '1-2' }
      ]
    },
    {
      label: '北京',
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
      children: [
        { label: '深圳市', value: '1-1' },
        { label: '广州市', value: '1-2' }
      ]
    },
    {
      label: '北京',
      children: [
        { label: '东城区', value: '2-1' },
        { label: '西城区', value: '2-2' }
      ]
    }
  ]
})

const formData = ref<FormDataVO>({
  name: 'test1',
  nickname: 'Testing',
  region: '',
  regionList: []
})
</script>
