<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default>
          <vxe-input v-model="formData.name"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框" field="sex" span="24" :item-render="{}">
        <template #default>
          <vxe-select v-model="formData.sex" :options="sexOptions"></vxe-select>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框多选" field="sexList" span="24" :item-render="{}">
        <template #default>
          <vxe-select v-model="formData.sexList" :options="sexOptions" multiple></vxe-select>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框分组" field="type" span="24" :item-render="{}">
        <template #default>
          <vxe-select v-model="formData.type" :optionGroups="typeOptions"></vxe-select>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框分组多选" field="typeList" span="24" :item-render="{}">
        <template #default>
          <vxe-select v-model="formData.typeList" :optionGroups="typeOptions" multiple></vxe-select>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <vxe-button type="reset">重置</vxe-button>
          <vxe-button type="submit" status="primary">提交</vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  sexList: string[]
  type: string
  typeList: string[]
}

const sexOptions = ref([
  { label: '女', value: 'Women' },
  { label: '男', value: 'Man' }
])

const typeOptions = ref([
  {
    label: '分类1',
    value: '1',
    options: [
      { label: '跑步', value: '1-1' },
      { label: '游泳', value: '1-2' }
    ]
  },
  {
    label: '分类2',
    value: '2',
    options: [
      { label: '爬山', value: '2-1' },
      { label: '徒步', value: '2-2' }
    ]
  }
])

const formData = ref<FormDataVO>({
  name: 'test1',
  nickname: 'Testing',
  sex: '',
  sexList: [],
  type: '',
  typeList: []
})
</script>
