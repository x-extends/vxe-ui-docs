<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <vxe-input v-model="data.name"></vxe-input>
      </template>

      <template #startAndEnd="{ data }">
        <vxe-date-range-picker v-model:start-value="data.startDate" v-model:end-value="data.endDate" type="date"></vxe-date-range-picker>
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
  startDate: string
  endDate: string
  address: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    nickname: 'Testing',
    sex: '',
    startDate: '',
    endDate: '',
    address: ''
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
    { field: 'startAndEnd', title: '日期范围选择', span: 24, itemRender: { }, slots: { default: 'startAndEnd' } },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ]
})
</script>
