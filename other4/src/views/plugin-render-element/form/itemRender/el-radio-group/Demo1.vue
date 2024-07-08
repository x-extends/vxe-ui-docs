<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #active>
        <el-button native-type="reset">重置</el-button>
        <el-button native-type="submit" type="primary">提交</el-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormProps, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  hobbies1: string
}

const hobbies1ItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'ElRadioGroup',
  options: [
    { label: '爬山', value: '1' },
    { label: '干架', value: '2' },
    { label: '干饭', value: '3' },
    { label: '游泳', value: '4' },
    { label: '跑步', value: '5' }
  ]
})

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    hobbies1: ''
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'ElInput' } },
    { field: 'hobbies1', title: '单选框', span: 24, itemRender: hobbies1ItemRender },
    { align: 'center', span: 24, slots: { default: 'active' } }
  ]
})
</script>
