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
import { VxeFormProps, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  sexList: string[]
  type: string
  typeList: string[]
}

const sexItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeSelect',
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ]
})

const sexListItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeSelect',
  props: {
    multiple: true
  },
  options: []
})

const typeItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeSelect',
  optionGroups: [
    {
      label: '分类1',
      value: '1',
      options: [
        { label: '跑步', value: '1-1' },
        { label: '游泳', value: '1-2' }
      ]
    },
    {
      label: '分类2',
      value: '2',
      options: [
        { label: '爬山', value: '2-1' },
        { label: '徒步', value: '2-2' }
      ]
    }
  ]
})

const typeListItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeSelect',
  props: {
    multiple: true
  },
  optionGroups: []
})

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    nickname: 'Testing',
    sex: '',
    sexList: [],
    type: '',
    typeList: []
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'sex', title: '下拉框', span: 24, itemRender: sexItemRender },
    { field: 'sexList', title: '下拉框多选', span: 24, itemRender: sexListItemRender },
    { field: 'type', title: '下拉框分组', span: 24, itemRender: typeItemRender },
    { field: 'typeList', title: '下拉框分组多选', span: 24, itemRender: typeListItemRender },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ]
})

// 模拟后台接口
setTimeout(() => {
  sexListItemRender.options = [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ]
  typeListItemRender.optionGroups = [
    {
      label: '分类1',
      options: [
        { label: '跑步', value: '1-1' },
        { label: '游泳', value: '1-2' }
      ]
    },
    {
      label: '分类2',
      options: [
        { label: '爬山', value: '2-1' },
        { label: '徒步', value: '2-2' }
      ]
    }
  ]
}, 200)
</script>
