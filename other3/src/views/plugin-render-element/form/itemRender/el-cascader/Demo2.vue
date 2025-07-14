<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <el-input v-model="data.name"></el-input>
      </template>

      <template #region="{ data }">
        <el-cascader v-model="data.region" :options="regionList"></el-cascader>
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
  region: number[]
}

export default Vue.extend({
  data () {
    const regionList = [
      {
        label: '北京',
        value: 1,
        children: [
          { value: 3, label: '东城区' },
          { value: 4, label: '西城区' }
        ]
      },
      {
        label: '上海',
        value: 21,
        children: [
          { value: 23, label: '黄浦区' },
          { value: 24, label: '卢湾区' }
        ]
      },
      {
        label: '广东',
        value: 42,
        children: [
          { value: 43, label: '广州市' },
          { value: 67, label: '深圳市' }
        ]
      }
    ]

    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
        name: 'test1',
        region: []
      },
      rules: {
        region: [
          { required: true, type: 'array', content: '请输入' }
        ]
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
        { field: 'region', title: '级联选择', span: 24, itemRender: {}, slots: { default: 'region' } },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      formOptions,
      regionList
    }
  }
})
</script>
