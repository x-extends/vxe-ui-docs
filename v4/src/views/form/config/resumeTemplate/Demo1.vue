<template>
  <div>
    <p>
      边框：<vxe-switch v-model="formOptions.border"></vxe-switch>
      标题背景：<vxe-switch v-model="formOptions.titleBackground"></vxe-switch>
    </p>

    <vxe-form v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
  mobile: string
  professionalSkill: string
  educationExperience: string
  workExperience: string
  projectExperience: string
  selfEvaluation: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  border: true,
  titleBackground: false,
  verticalAlign: 'center',
  titleWidth: 100,
  data: {
    name: 'test1',
    nickname: 'Testing',
    sex: '女',
    age: '22',
    mobile: '',
    professionalSkill: '',
    educationExperience: '',
    workExperience: '',
    projectExperience: '',
    selfEvaluation: ''
  },
  items: [
    { title: '个人简历', field: 'name', span: 24, titleAlign: 'center', showContent: false, titleBold: true },
    { field: 'name', title: '名称', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'sex', title: '性别', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'age', title: '年龄', span: 12, itemRender: { name: 'VxeNumberInput', props: { type: 'integer' } } },
    { field: 'mobile', title: '联系电话', span: 12, itemRender: { name: 'VxeNumberInput', props: { type: 'integer' } } },
    { field: 'educationExperience', title: '教育经历', span: 24, vertical: true, itemRender: { name: 'VxeTextarea', props: { autosize: { minRows: 2, maxRows: 8 } } } },
    { field: 'professionalSkill', title: '专业技能', span: 24, vertical: true, itemRender: { name: 'VxeTextarea', props: { autosize: { minRows: 4, maxRows: 8 } } } },
    { field: 'workExperience', title: '工作经历', span: 24, vertical: true, itemRender: { name: 'VxeTextarea', props: { autosize: { minRows: 4, maxRows: 8 } } } },
    { field: 'projectExperience', title: '项目经验', span: 24, vertical: true, itemRender: { name: 'VxeTextarea', props: { autosize: { minRows: 4, maxRows: 8 } } } },
    { field: 'selfEvaluation', title: '自我评价', span: 24, vertical: true, itemRender: { name: 'VxeTextarea', props: { autosize: { minRows: 4, maxRows: 8 } } } },
    {
      align: 'center',
      span: 24,
      itemRender: {
        name: 'VxeButtonGroup',
        options: [
          { type: 'submit', content: '提交', status: 'primary' },
          { type: 'reset', content: '重置' }
        ]
      }
    }
  ]
})
</script>
