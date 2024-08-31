<template>
  <div>
    <vxe-button status="primary" @click="toggleDisabled">切换禁用</vxe-button>

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
import { VxeFormProps, VxeUploadPropTypes, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  num: string
  float: string
  integer: string
  date: string
  time: string
  year: string
  quarter: string
  month: string
  week: string
  datetime: string
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
  disabled: false,
  titleWidth: 120,
  titleColon: true,
  titleAlign: 'right',
  data: {
    name: 'test1',
    nickname: 'Testing',
    num: '',
    integer: '',
    float: '',
    date: '',
    time: '',
    year: '',
    quarter: '',
    month: '',
    week: '',
    datetime: '',
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
    { field: 'nickname', title: '输入框', span: 24, itemRender: { name: 'VxeInput' } },
    {
      children: [
        { field: 'num', title: '数字', span: 12, itemRender: { name: 'VxeInput', props: { type: 'number' } } },
        { field: 'integer', title: '整数', span: 12, itemRender: { name: 'VxeInput', props: { type: 'integer' } } },
        { field: 'float', title: '小数', span: 24, itemRender: { name: 'VxeInput', props: { type: 'float' } } }
      ]
    },
    {
      children: [
        { field: 'date', title: '日期', span: 8, itemRender: { name: 'VxeInput', props: { type: 'date' } } },
        { field: 'year', title: '年份', span: 8, itemRender: { name: 'VxeInput', props: { type: 'year' } } },
        { field: 'quarter', title: '季度', span: 8, itemRender: { name: 'VxeInput', props: { type: 'quarter' } } },
        { field: 'month', title: '月份', span: 8, itemRender: { name: 'VxeInput', props: { type: 'month' } } },
        { field: 'week', title: '周', span: 8, itemRender: { name: 'VxeInput', props: { type: 'week' } } },
        { field: 'time', title: '时间', span: 8, itemRender: { name: 'VxeInput', props: { type: 'time' } } },
        { field: 'datetime', title: '日期带时间', span: 24, itemRender: { name: 'VxeInput', props: { type: 'datetime' } } }
      ]
    },
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
    { align: 'center', span: 24, slots: { default: 'action' } }
  ],
  rules: {
    num: [
      { required: true, message: '必填' }
    ],
    date: [
      { required: true, message: '必填' }
    ],
    type: [
      { required: true, message: '必填' }
    ],
    fileList2: [
      { required: true, message: '必填' }
    ],
    imgList1: [
      { required: true, message: '必填' }
    ]
  }
})

const toggleDisabled = () => {
  formOptions.disabled = !formOptions.disabled
}
</script>
