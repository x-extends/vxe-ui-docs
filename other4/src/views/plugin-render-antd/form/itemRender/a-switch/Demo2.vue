<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <a-input v-model="data.name"></a-input>
      </template>

      <template #flag="{ data }">
        <a-switch v-model="data.flag"></a-switch>
      </template>

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
  flag: boolean
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    flag: false
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
    { field: 'flag', title: '开关', span: 24, itemRender: { }, slots: { default: 'flag' } },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ]
})
</script>
