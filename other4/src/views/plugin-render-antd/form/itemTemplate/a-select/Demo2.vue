<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default>
          <a-input v-model="formData.name"></a-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框" field="sex" span="24" :item-render="{}">
        <template #default>
          <a-select v-model="formData.sex">
            <a-select-option v-for="(item, index) in sexOptions" :key="index" :label="item.label" :value="item.value"></a-select-option>
          </a-select>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框多选" field="sexList" span="24" :item-render="{}">
        <template #default>
          <a-select v-model="formData.sexList" multiple>
            <a-select-option v-for="(item, index) in sexOptions" :key="index" :label="item.label" :value="item.value"></a-select-option>
          </a-select>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框分组" field="type" span="24" :item-render="{}">
        <template #default>
          <a-select v-model="formData.type">
            <a-select-opt-group v-for="(item, i) in typeOptions" :key="i" :label="item.label">
              <a-select-option v-for="(child, j) in item.options" :key="j" :label="child.label" :value="child.value"></a-select-option>
            </a-select-opt-group>
          </a-select>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框分组多选" field="typeList" span="24" :item-render="{}">
        <template #default>
          <a-select v-model="formData.typeList" multiple>
            <a-select-opt-group v-for="(item, i) in typeOptions" :key="i" :label="item.label">
              <a-select-option v-for="(child, j) in item.options" :key="j" :label="child.label" :value="child.value"></a-select-option>
            </a-select-opt-group>
          </a-select>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <a-button html-type="reset">重置</a-button>
          <a-button html-type="submit" type="primary">提交</a-button>
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
    options: [
      { label: '苹果', value: '1-1' },
      { label: '雪梨', value: '1-2' }
    ]
  },
  {
    label: '分类2',
    options: [
      { label: '草莓', value: '2-1' },
      { label: '猕猴桃', value: '2-2' }
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
