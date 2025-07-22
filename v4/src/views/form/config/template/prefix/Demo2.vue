<template>
  <div>
    <vxe-form v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
  isEnableName: boolean
  isEnableSex: boolean
}

const formOptions = reactive<VxeFormProps<FormDataVO> & { data: FormDataVO }>({
  border: true,
  titleBackground: true,
  vertical: true,
  data: {
    name: 'test1',
    nickname: 'Testing',
    sex: '女',
    age: '18',
    isEnableName: false,
    isEnableSex: false
  },
  items: [
    {
      field: 'name',
      title: '名称',
      span: 24,
      slots: {
        prefix: () => {
          return <vxe-checkbox v-model={formOptions.data.isEnableName}></vxe-checkbox>
        }
      }
    },
    {
      field: 'sex',
      title: '性别',
      span: 24,
      slots: {
        prefix: () => {
          return <vxe-checkbox v-model={formOptions.data.isEnableSex}></vxe-checkbox>
        }
      }
    },
    { field: 'age', title: '年龄', span: 24 }
  ]
})
</script>
