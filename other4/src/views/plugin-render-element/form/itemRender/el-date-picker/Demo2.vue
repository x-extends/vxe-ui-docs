<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <el-input v-model="data.name"></el-input>
      </template>

      <template #date1="{ data }">
        <el-date-picker v-model="data.date1" type="date" value-format="YYYY-MM-DD"></el-date-picker>
      </template>

      <template #date2="{ data }">
        <el-date-picker v-model="data.date2" type="datetime" value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
      </template>

      <template #action>
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
  date1: string
  date2: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    date1: '',
    date2: ''
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
    { field: 'date1', title: '日期', span: 24, itemRender: { }, slots: { default: 'date1' } },
    { field: 'date2', title: '日期带时间', span: 24, itemRender: { }, slots: { default: 'date2' } },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ]
})
</script>
