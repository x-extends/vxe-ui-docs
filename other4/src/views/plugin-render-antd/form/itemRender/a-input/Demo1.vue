<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #action>
        <a-button html-type="reset">重置</a-button>
        <a-button html-type="submit" type="primary">提交</a-button>
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
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    nickname: ''
  },
  rules: {
    nickname: [
      { required: true, content: '请输入' }
    ]
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'AInput' } },
    { field: 'nickname', title: '输入框', span: 24, itemRender: { name: 'AInput' } },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ]
})
</script>
