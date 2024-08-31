<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <el-input v-model="data.name"></el-input>
      </template>

      <template #hobbiesList="{ data }">
        <el-checkbox-group v-model="data.hobbies1">
          <el-checkbox v-for="item in hobbies1Options" :key="item.value" :value="item.value" :label="item.label"></el-checkbox>
        </el-checkbox-group>
      </template>

      <template #action>
        <el-button native-type="reset">重置</el-button>
        <el-button native-type="submit" type="primary">提交</el-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  hobbiesList: string[]
}

const hobbies1Options = ref([
  { label: '爬山', value: '1' },
  { label: '干架', value: '2' },
  { label: '干饭', value: '3' },
  { label: '游泳', value: '4' },
  { label: '跑步', value: '5' }
])

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    hobbiesList: []
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
    { field: 'hobbiesList', title: '复选框', span: 24, itemRender: { }, slots: { default: 'hobbiesList' } },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ]
})
</script>
