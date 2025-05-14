<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <vxe-input v-model="data.name"></vxe-input>
      </template>

      <template #role="{ data, item }">
        <vxe-input v-model="data.role" clearable @input="roleInput($event, item)"></vxe-input>
      </template>

      <template #action>
        <vxe-button type="reset">重置</vxe-button>
        <vxe-button type="submit" status="primary">提交</vxe-button>
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
  role: string
  address: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    nickname: 'Testing',
    role: '',
    sex: '',
    address: ''
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
    { field: 'role', title: '输入框', span: 24, itemRender: { }, slots: { default: 'role' } },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ]
})

const roleInput = (eventParams, item) => {
  console.log('input', item.field, eventParams.value)
}
</script>
