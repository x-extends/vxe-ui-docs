<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <el-input v-model="data.name"></el-input>
      </template>

      <template #hobbies1="{ data }">
        <el-radio-group v-model="data.hobbies1">
          <el-radio v-for="item in hobbies1Options" :key="item.value" :value="item.value">{{ item.label }}</el-radio>
        </el-radio-group>
      </template>

      <template #action>
        <el-button native-type="reset">重置</el-button>
        <el-button native-type="submit" type="primary">提交</el-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  hobbies1: string
}

const hobbies1Options = [
  { label: '爬山', value: '1' },
  { label: '干架', value: '2' },
  { label: '干饭', value: '3' },
  { label: '游泳', value: '4' },
  { label: '跑步', value: '5' }
]

export default Vue.extend({
  data () {
    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
        name: 'test1',
        hobbies1: ''
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
        { field: 'hobbies1', title: '单选框', span: 24, itemRender: { }, slots: { default: 'hobbies1' } },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      formOptions,
      hobbies1Options
    }
  }
})
</script>
