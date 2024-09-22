<template>
  <div>
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
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  border: true,
  verticalAlign: 'center',
  titleWidth: 100,
  data: {
    name: 'test1',
    nickname: 'Testing',
    sex: '女',
    age: '22'
  },
  items: [
    { field: 'name', title: '名称', span: 12 },
    { field: 'nickname', title: '昵称', span: 12 },
    { field: 'sex', title: '性别', span: 12 },
    { field: 'age', title: '年龄', span: 12 }
  ]
})
</script>
