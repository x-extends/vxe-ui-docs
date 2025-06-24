<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <a-input v-model="data.name"></a-input>
      </template>

      <template #sex="{ data }">
        <a-select v-model="data.sex">
          <a-select-option v-for="(item, index) in sexOptions" :key="index" :label="item.label" :value="item.value"></a-select-option>
        </a-select>
      </template>

      <template #sexList="{ data }">
        <a-select v-model="data.sexList" multiple>
          <a-select-option v-for="(item, index) in sexOptions" :key="index" :label="item.label" :value="item.value"></a-select-option>
        </a-select>
      </template>

      <template #type="{ data }">
        <a-select v-model="data.type">
          <a-select-opt-group v-for="(item, i) in typeOptions" :key="i" :label="item.label">
            <a-select-option v-for="(child, j) in item.options" :key="j" :label="child.label" :value="child.value"></a-select-option>
          </a-select-opt-group>
        </a-select>
      </template>

      <template #typeList="{ data }">
        <a-select v-model="data.typeList" multiple>
          <a-select-opt-group v-for="(item, i) in typeOptions" :key="i" :label="item.label">
            <a-select-option v-for="(child, j) in item.options" :key="j" :label="child.label" :value="child.value"></a-select-option>
          </a-select-opt-group>
        </a-select>
      </template>

      <template #action>
        <a-button html-type="reset">重置</a-button>
        <a-button html-type="submit" type="primary">提交</a-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
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
      { label: '苹果', value: '1-1' },
      { label: '雪梨', value: '1-2' }
    ]
  },
  {
    label: '分类2',
    value: '2',
    options: [
      { label: '草莓', value: '2-1' },
      { label: '猕猴桃', value: '2-2' }
    ]
  }
])

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    sex: '',
    sexList: [],
    type: '',
    typeList: []
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
    { field: 'sex', title: '下拉框', span: 24, itemRender: { }, slots: { default: 'sex' } },
    { field: 'sexList', title: '下拉框多选', span: 24, itemRender: { }, slots: { default: 'sexList' } },
    { field: 'type', title: '下拉框分组', span: 24, itemRender: { }, slots: { default: 'type' } },
    { field: 'typeList', title: '下拉框分组多选', span: 24, itemRender: { }, slots: { default: 'typeList' } },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ]
})
</script>
