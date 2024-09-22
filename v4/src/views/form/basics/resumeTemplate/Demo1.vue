<template>
  <div>
    <p>
      边框：<vxe-switch v-model="border"></vxe-switch>
      标题背景：<vxe-switch v-model="titleBackground"></vxe-switch>
    </p>

    <vxe-form
      :border="border"
      :title-background="titleBackground"
      vertical-align="center"
      title-width="100"
      :data="formData">
      <vxe-form-item title="个人简历" field="name" span="24" title-align="center" :show-content="false" title-bold></vxe-form-item>
      <vxe-form-item title="名称" field="name" span="12" :item-render="{name: 'VxeInput'}"></vxe-form-item>
      <vxe-form-item title="性别" field="sex" span="12" :item-render="{name: 'VxeInput'}"></vxe-form-item>
      <vxe-form-item title="年龄" field="age" span="12" :item-render="{name: 'VxeNumberInput', props: {type: 'integer'}}"></vxe-form-item>
      <vxe-form-item title="联系电话" field="mobile" span="12" :item-render="{name: 'VxeInput', props: {type: 'integer'}}"></vxe-form-item>
      <vxe-form-item title="教育经历" field="educationExperience" span="24" vertical :item-render="{name: 'VxeTextarea', props: {autosize: { minRows: 2, maxRows: 8 }}}"></vxe-form-item>
      <vxe-form-item title="专业技能" field="professionalSkill" span="24" vertical :item-render="{name: 'VxeTextarea', props: {autosize: { minRows: 4, maxRows: 8 }}}"></vxe-form-item>
      <vxe-form-item title="工作经历" field="workExperience" span="24" vertical :item-render="{name: 'VxeTextarea', props: {autosize: { minRows: 4, maxRows: 8 }}}"></vxe-form-item>
      <vxe-form-item title="项目经验" field="projectExperience" span="24" vertical :item-render="{name: 'VxeTextarea', props: {autosize: { minRows: 4, maxRows: 8 }}}"></vxe-form-item>
      <vxe-form-item title="自我评价" field="selfEvaluation" span="24" vertical :item-render="{name: 'VxeTextarea', props: {autosize: { minRows: 4, maxRows: 8 }}}"></vxe-form-item>
      <vxe-form-item align="center" span="24" :item-render="{}">
        <template #default>
          <vxe-button type="submit" status="primary" content="提交"></vxe-button>
          <vxe-button type="reset" content="重置"></vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

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

const border = ref(true)
const titleBackground = ref(false)

const formData = ref<FormDataVO>({
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
})
</script>
