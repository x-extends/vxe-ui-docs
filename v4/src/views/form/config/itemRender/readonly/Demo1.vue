<template>
  <div>
    <vxe-button status="primary" @click="toggleReadonly">切换只读</vxe-button>

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
import { VxeFormProps, VxeUploadPropTypes, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  sexList: string[]
  type: string
  typeList: string[]
  flag1: boolean
  hobbies1: string
  hobbies2: string
  hobbiesList: string[]
  fileList1: VxeUploadPropTypes.ModelValue
  fileList2: VxeUploadPropTypes.ModelValue
  imgList1: VxeUploadPropTypes.ModelValue
  imgList2: VxeUploadPropTypes.ModelValue
  address: string
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
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ]
})

const typeItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeSelect',
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

const typeListItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeSelect',
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
        { label: '香蕉', value: '2-1' },
        { label: '茄子', value: '2-2' }
      ]
    }
  ]
})

const hobbies1ItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeRadioGroup',
  options: [
    { label: '爬山', value: '1' },
    { label: '干架', value: '2' },
    { label: '干饭', value: '3' },
    { label: '游泳', value: '4' },
    { label: '跑步', value: '5' }
  ]
})

const hobbies2ItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeRadioGroup',
  props: {
    type: 'button'
  },
  options: [
    { label: '爬山', value: '1' },
    { label: '干架', value: '2' },
    { label: '干饭', value: '3' },
    { label: '游泳', value: '4' },
    { label: '跑步', value: '5' }
  ]
})

const hobbiesItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeCheckboxGroup',
  options: [
    { label: '爬山', value: '1' },
    { label: '干架', value: '2' },
    { label: '干饭', value: '3' },
    { label: '游泳', value: '4' },
    { label: '跑步', value: '5' }
  ]
})

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  readonly: false,
  titleWidth: 120,
  titleColon: true,
  titleAlign: 'right',
  data: {
    name: 'test1',
    nickname: 'Testing',
    sex: 'Man',
    sexList: ['Man', 'Women'],
    type: '1-1',
    typeList: ['1-2', '2-2'],
    flag1: true,
    hobbies1: '5',
    hobbies2: '3',
    hobbiesList: ['3'],
    fileList1: [],
    fileList2: [
      { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' }
    ],
    imgList1: [],
    imgList2: [
      { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' }
    ],
    address: '广东省深圳市'
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'sex', title: '下拉框', span: 12, itemRender: sexItemRender },
    { field: 'sexList', title: '下拉框多选', span: 12, itemRender: sexListItemRender },
    { field: 'type', title: '下拉框分组', span: 12, itemRender: typeItemRender },
    { field: 'typeList', title: '下拉框分组多选', span: 12, itemRender: typeListItemRender },
    { field: 'flag1', title: '开关', span: 24, itemRender: { name: 'VxeSwitch' } },
    { field: 'hobbies1', title: '单选框', span: 24, itemRender: hobbies1ItemRender },
    { field: 'hobbies2', title: '单选按钮', span: 24, itemRender: hobbies2ItemRender },
    { field: 'hobbiesList', title: '复选框', span: 24, itemRender: hobbiesItemRender },
    { field: 'fileList1', title: '上传附件', span: 24, itemRender: { name: 'VxeUpload' } },
    { field: 'fileList2', title: '上传附件多选', span: 24, itemRender: { name: 'VxeUpload', props: { multiple: true } } },
    { field: 'imgList1', title: '上传图片', span: 24, itemRender: { name: 'VxeUpload', props: { mode: 'image' } } },
    { field: 'imgList2', title: '上传图片多选', span: 24, itemRender: { name: 'VxeUpload', props: { mode: 'image', multiple: true } } },
    { field: 'address', title: '文本域', span: 24, itemRender: { name: 'VxeTextarea' } },
    { align: 'center', span: 24, slots: { default: 'active' } }
  ]
})

const toggleReadonly = () => {
  formOptions.readonly = !formOptions.readonly
}
</script>
