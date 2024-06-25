<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #active>
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
  name: 'select',
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ]
})

const typeItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'select',
  optionGroups: [
    {
      label: '分类1',
      options: [
        { label: '苹果', value: '1-1' },
        { label: '雪梨', value: '1-2' }
      ]
    },
    {
      label: '分类2',
      options: [
        { label: '香蕉', value: '2-1' },
        { label: '茄子', value: '2-2' }
      ]
    }
  ]
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
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'input' } },
    { field: 'sex', title: '下拉框', span: 24, itemRender: sexItemRender },
    { field: 'type', title: '下拉框分组', span: 24, itemRender: typeItemRender },
    { align: 'center', span: 24, slots: { default: 'active' } }
  ]
})
</script>
