<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #action>
        <a-button html-type="reset">重置</a-button>
        <a-button html-type="submit" type="primary">提交</a-button>
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
  name: 'ASelect',
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ]
})

const sexListItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'ASelect',
  props: {
    multiple: true
  },
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ]
})

const typeItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'ASelect',
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
        { label: '草莓', value: '2-1' },
        { label: '猕猴桃', value: '2-2' }
      ]
    }
  ]
})

const typeListItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'ASelect',
  props: {
    multiple: true
  },
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
        { label: '草莓', value: '2-1' },
        { label: '猕猴桃', value: '2-2' }
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
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'AInput' } },
    { field: 'sex', title: '下拉框', span: 24, itemRender: sexItemRender },
    { field: 'sexList', title: '下拉框多选', span: 24, itemRender: sexListItemRender },
    { field: 'type', title: '下拉框分组', span: 24, itemRender: typeItemRender },
    { field: 'typeList', title: '下拉框分组多选', span: 24, itemRender: typeListItemRender },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ]
})
</script>
