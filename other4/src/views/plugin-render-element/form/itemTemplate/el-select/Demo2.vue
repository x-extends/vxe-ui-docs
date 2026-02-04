<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default>
          <el-input v-model="formData.name"></el-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框" field="sex" span="24" :item-render="{}">
        <template #default>
          <el-select v-model="formData.sex">
            <el-option v-for="(item, index) in sexOptions" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框多选" field="sexList" span="24" :item-render="{}">
        <template #default>
          <el-select v-model="formData.sexList" multiple>
            <el-option v-for="(item, index) in sexOptions" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框分组" field="type" span="24" :item-render="{}">
        <template #default>
          <el-select v-model="formData.type">
            <el-option-group v-for="(item, i) in typeOptions" :key="i" :label="item.label">
              <el-option v-for="(child, j) in item.options" :key="j" :label="child.label" :value="child.value"></el-option>
            </el-option-group>
          </el-select>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框分组多选" field="typeList" span="24" :item-render="{}">
        <template #default>
          <el-select v-model="formData.typeList" multiple>
            <el-option-group v-for="(item, i) in typeOptions" :key="i" :label="item.label">
              <el-option v-for="(child, j) in item.options" :key="j" :label="child.label" :value="child.value"></el-option>
            </el-option-group>
          </el-select>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <el-button native-type="reset">重置</el-button>
          <el-button native-type="submit" type="primary">提交</el-button>
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
