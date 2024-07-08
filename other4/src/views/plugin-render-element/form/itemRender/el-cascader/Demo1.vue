<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #active>
        <el-button native-type="reset">重置</el-button>
        <el-button native-type="submit" type="primary">提交</el-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormProps, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  region: number[]
}

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

const regionItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'ElCascader',
  props: {
    options: regionList
  }
})

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    region: []
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'ElInput' } },
    { field: 'region', title: '级联选择', span: 24, itemRender: regionItemRender }
  ]
})
</script>
