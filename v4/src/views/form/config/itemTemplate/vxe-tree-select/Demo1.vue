<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <vxe-input v-model="data.name"></vxe-input>
      </template>

      <template #region="{ data }">
        <vxe-tree-select v-model="data.type" :options="regionOptions"></vxe-tree-select>
      </template>

      <template #regionList="{ data }">
        <vxe-tree-select v-model="data.regionList" :options="regionOptions" multiple></vxe-tree-select>
      </template>

      <template #action>
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
  region: string
  regionList: string[]
}

const regionOptions = ref([
  {
    label: '广东省',
    children: [
      { label: '深圳市', value: '1-1' },
      { label: '广州市', value: '1-2' }
    ]
  },
  {
    label: '北京',
    children: [
      { label: '东城区', value: '2-1' },
      { label: '西城区', value: '2-2' }
    ]
  }
])

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    region: '',
    regionList: []
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
    { field: 'region', title: '下拉树单选', span: 24, itemRender: { }, slots: { default: 'region' } },
    { field: 'regionList', title: '下拉树多选', span: 24, itemRender: { }, slots: { default: 'regionList' } },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ]
})
</script>
