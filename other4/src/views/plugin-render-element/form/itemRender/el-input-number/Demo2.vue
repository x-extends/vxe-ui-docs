<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <el-input v-model="data.name"></el-input>
      </template>

      <template #num="{ data }">
        <el-input-number v-model="data.num"></el-input-number>
      </template>

      <template #active>
        <el-button native-type="reset">重置</el-button>
        <el-button native-type="submit" type="primary">提交</el-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  num: number | null
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    num: null
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
    { field: 'num', title: '数值输入', span: 24, itemRender: { }, slots: { default: 'num' } },
    { align: 'center', span: 24, slots: { default: 'active' } }
  ]
})
</script>
