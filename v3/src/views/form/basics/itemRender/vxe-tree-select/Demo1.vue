<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{ name: 'VxeInput' }"></vxe-form-item>
      <vxe-form-item title="下拉框" field="region" span="24" :item-render="regionItemRender"></vxe-form-item>
      <vxe-form-item title="下拉框多选" field="regionList" span="24" :item-render="regionListItemRender"></vxe-form-item>
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
  region: string
  regionList: string[]
}

export default Vue.extend({
  data () {
    const regionItemRender: VxeFormItemPropTypes.ItemRender = {
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
    }

    const regionListItemRender: VxeFormItemPropTypes.ItemRender = {
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
    }

    const actionItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'VxeButtonGroup',
      options: [
        { content: '重置', type: 'reset' },
        { content: '提交', type: 'submit', status: 'primary' }
      ]
    }

    const formData: FormDataVO = {
      name: 'test1',
      nickname: 'Testing',
      region: '',
      regionList: []
    }

    return {
      regionItemRender,
      regionListItemRender,
      actionItemRender,
      formData
    }
  }
})
</script>
