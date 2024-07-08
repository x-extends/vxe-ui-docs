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
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  num: number
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    num: 4
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'ElInput' } },
    { field: 'num', title: '评分', span: 24, itemRender: { name: 'ElRate' } },
    { align: 'center', span: 24, slots: { default: 'active' } }
  ]
})
</script>
