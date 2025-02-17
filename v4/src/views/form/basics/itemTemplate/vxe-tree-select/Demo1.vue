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
      <vxe-form-item title="下拉框分组" field="region" span="24" :item-render="{}">
        <template #default>
          <vxe-tree-select v-model="formData.region" :options="regionOptions"></vxe-tree-select>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框分组多选" field="regionList" span="24" :item-render="{}">
        <template #default>
          <vxe-tree-select v-model="formData.regionList" :options="regionOptions" multiple></vxe-tree-select>
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
  region: string
  regionList: string[]
}

const regionOptions = ref([
  {
    label: '广东省',
    value: '1',
    children: [
      { label: '深圳市', value: '1-1' },
      { label: '广州市', value: '1-2' }
    ]
  },
  {
    label: '北京',
    value: '2',
    children: [
      { label: '东城区', value: '2-1' },
      { label: '西城区', value: '2-2' }
    ]
  }
])

const formData = ref<FormDataVO>({
  name: 'test1',
  nickname: 'Testing',
  region: '',
  regionList: []
})
</script>
