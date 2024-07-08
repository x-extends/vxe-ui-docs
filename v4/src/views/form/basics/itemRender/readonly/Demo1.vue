<template>
  <div>
    <vxe-button status="primary" @click="toggleReadonly">切换只读</vxe-button>

    <vxe-form
      titleColon
      title-width="120"
      title-align="right"
      :readonly="readonly"
      :data="formData"
      :rules="formRules">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{ name: 'VxeInput' }"></vxe-form-item>
      <vxe-form-item title="输入框" field="nickname" span="24" :item-render="{ name: 'VxeInput' }"></vxe-form-item>
      <vxe-form-item title="数字" field="num" span="12" :item-render="{ name: 'VxeInput', props: { type: 'number' } }"></vxe-form-item>
      <vxe-form-item title="整数" field="integer" span="12" :item-render="{ name: 'VxeInput', props: { type: 'integer' } }"></vxe-form-item>
      <vxe-form-item title="小数" field="float" span="24" :item-render="{ name: 'VxeInput', props: { type: 'float' } }"></vxe-form-item>
      <vxe-form-item title="日期" field="date" span="8" :item-render="{ name: 'VxeInput', props: { type: 'date' } }"></vxe-form-item>
      <vxe-form-item title="年份" field="year" span="8" :item-render="{ name: 'VxeInput', props: { type: 'year' } }"></vxe-form-item>
      <vxe-form-item title="季度" field="quarter" span="8" :item-render="{ name: 'VxeInput', props: { type: 'quarter' } }"></vxe-form-item>
      <vxe-form-item title="月份" field="month" span="8" :item-render="{ name: 'VxeInput', props: { type: 'month' } }"></vxe-form-item>
      <vxe-form-item title="周" field="week" span="8" :item-render="{ name: 'VxeInput', props: { type: 'week' } }"></vxe-form-item>
      <vxe-form-item title="时间" field="time" span="8" :item-render="{ name: 'VxeInput', props: { type: 'time' } }"></vxe-form-item>
      <vxe-form-item title="日期带时间" field="datetime" span="8" :item-render="{ name: 'VxeInput', props: { type: 'datetime' } }"></vxe-form-item>
      <vxe-form-item title="下拉框" field="sex" span="12" :item-render="sexItemRender"></vxe-form-item>
      <vxe-form-item title="下拉框多选" field="sexList" span="12" :item-render="sexListItemRender"></vxe-form-item>
      <vxe-form-item title="下拉框分组" field="type" span="12" :item-render="typeItemRender"></vxe-form-item>
      <vxe-form-item title="下拉框分组多选" field="typeList" span="12" :item-render="typeListItemRender"></vxe-form-item>
      <vxe-form-item title="开关" field="flag1" span="24" :item-render="{ name: 'VxeSwitch' }"></vxe-form-item>
      <vxe-form-item title="单选框" field="hobbies1" span="24" :item-render="hobbies1ItemRender"></vxe-form-item>
      <vxe-form-item title="单选按钮" field="hobbies2" span="24" :item-render="hobbies2ItemRender"></vxe-form-item>
      <vxe-form-item title="复选框" field="hobbiesList" span="24" :item-render="hobbiesItemRender"></vxe-form-item>
      <vxe-form-item title="上传附件" field="fileList1" span="24" :item-render="{ name: 'VxeUpload' }"></vxe-form-item>
      <vxe-form-item title="上传附件多选" field="fileList2" span="24" :item-render="{ name: 'VxeUpload', props: { multiple: true } }"></vxe-form-item>
      <vxe-form-item title="上传图片" field="imgList1" span="24" :item-render="{ name: 'VxeUpload', props: { mode: 'image' } } "></vxe-form-item>
      <vxe-form-item title="上传图片多选" field="imgList2" span="24" :item-render="{ name: 'VxeUpload', props: { mode: 'image', multiple: true } }"></vxe-form-item>
      <vxe-form-item title="文本域" field="address" span="24" :item-render="{ name: 'VxeTextarea' }"></vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <vxe-button v-if="!readonly" type="reset">重置</vxe-button>
          <vxe-button v-if="!readonly" type="submit" status="primary">提交</vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUploadPropTypes, VxeFormPropTypes, VxeFormItemPropTypes } from 'vxe-pc-ui'

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

const readonly = ref(false)
const formData = ref<FormDataVO>({
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
})

const formRules = ref<VxeFormPropTypes.Rules>({
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
})

const toggleReadonly = () => {
  readonly.value = !readonly.value
}
</script>
