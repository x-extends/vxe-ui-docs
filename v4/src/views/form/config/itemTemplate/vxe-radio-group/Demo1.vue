<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <vxe-input v-model="data.name"></vxe-input>
      </template>

      <template #hobbies1="{ data }">
        <vxe-radio-group v-model="data.hobbies1" :options="hobbies1Options"></vxe-radio-group>
      </template>

      <template #hobbies2="{ data }">
        <vxe-radio-group v-model="data.hobbies2" :options="hobbies2Options" type="button"></vxe-radio-group>
      </template>

      <template #active>
        <vxe-button type="reset">重置</vxe-button>
        <vxe-button type="submit" status="primary">提交</vxe-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  hobbies1: string
  hobbies2: string
  address: string
}

const hobbies1Options = ref([
  { label: '爬山', value: '1' },
  { label: '干架', value: '2' },
  { label: '干饭', value: '3' },
  { label: '游泳', value: '4' },
  { label: '跑步', value: '5' }
])

const hobbies2Options = ref([
  { label: '爬山', value: '1' },
  { label: '干架', value: '2' },
  { label: '干饭', value: '3' },
  { label: '游泳', value: '4' },
  { label: '跑步', value: '5' }
])

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    nickname: 'Testing',
    hobbies1: '5',
    hobbies2: '3',
    address: ''
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
    { field: 'hobbies1', title: '单选框', span: 24, itemRender: { }, slots: { default: 'hobbies1' } },
    { field: 'hobbies2', title: '单选按钮', span: 24, itemRender: { }, slots: { default: 'hobbies2' } },
    { align: 'center', span: 24, slots: { default: 'active' } }
  ]
})
</script>
