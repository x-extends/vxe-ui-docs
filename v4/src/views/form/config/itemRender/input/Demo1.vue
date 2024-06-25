<template>
  <div>
    <vxe-form v-bind="formOptions" >
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
  sex: string
  age: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 80,
  data: {
    name: 'test1',
    nickname: 'Testing',
    sex: '',
    age: ''
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'input' } },
    { field: 'name', title: '输入框', span: 24, itemRender: { name: 'input' } },
    { align: 'center', span: 24, slots: { default: 'active' } }
  ]
})
</script>
