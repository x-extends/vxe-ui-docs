<template>
  <div>
    <vxe-form v-bind="formOptions">
      <template #sexTitle>
        <span style="color: red;">性别</span>
      </template>

      <template #ageTitle>
        <span style="color: blue;">年龄</span>
      </template>
    </vxe-form>
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
  address: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  border: true,
  data: {
    name: 'test1',
    nickname: 'Testing',
    sex: '男',
    age: '46',
    address: 'shanghai'
  },
  items: [
    { field: 'name', title: '名称', span: 24 },
    { field: 'sex', title: '性别', span: 12, slots: { title: 'sexTitle' } },
    { field: 'age', title: '年龄', span: 12, slots: { title: 'ageTitle' } }
  ]
})
</script>
