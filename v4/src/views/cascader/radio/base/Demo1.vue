<template>
  <div>
    <vxe-cascader v-model="val1" v-bind="cascaderOptions"></vxe-cascader>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeCascaderProps } from 'vxe-pc-ui'

interface NodeVO {
  label: string
  value: string
  parentId?: string | null
}

const val1 = ref('值321')
const cascaderOptions = reactive<VxeCascaderProps<NodeVO>>({
  showRadio: true,
  treeConfig: {
    transform: true,
    keyField: 'value',
    parentField: 'parentId'
  },
  options: [
    { label: '节点2', value: '值2', parentId: null },
    { label: '节点3', value: '值3', parentId: null },
    { label: '节点3-1', value: '值31', parentId: '值3' },
    { label: '节点3-2', value: '值32', parentId: '值3' },
    { label: '节点3-2-1', value: '值321', parentId: '值32' },
    { label: '节点3-2-2', value: '值322', parentId: '值32' },
    { label: '节点3-3', value: '值33', parentId: '值3' },
    { label: '节点3-3-1', value: '值331', parentId: '值33' },
    { label: '节点3-3-2', value: '值332', parentId: '值33' },
    { label: '节点3-3-3', value: '值333', parentId: '值33' },
    { label: '节点3-3-4', value: '值334', parentId: '值33' },
    { label: '节点3-3-5', value: '值335', parentId: '值33' },
    { label: '节点3-3-6', value: '值336', parentId: '值33' },
    { label: '节点3-3-7', value: '值337', parentId: '值33' },
    { label: '节点3-3-8', value: '值338', parentId: '值33' },
    { label: '节点3-3-9', value: '值339', parentId: '值33' },
    { label: '节点3-4', value: '值34', parentId: '值3' },
    { label: '节点4', value: '值4', parentId: null },
    { label: '节点4-1', value: '值41', parentId: '值4' },
    { label: '节点4-1-1', value: '值411', parentId: '值42' },
    { label: '节点4-1-2', value: '值412', parentId: '值42' },
    { label: '节点4-2', value: '值42', parentId: '值4' },
    { label: '节点4-3', value: '值43', parentId: '值4' },
    { label: '节点4-3-1', value: '值431', parentId: '值43' },
    { label: '节点4-3-2', value: '值432', parentId: '值43' },
    { label: '节点4-4', value: '值44', parentId: '值4' },
    { label: '节点4-5', value: '值45', parentId: '值4' },
    { label: '节点4-6', value: '值46', parentId: '值4' },
    { label: '节点4-7', value: '值47', parentId: '值4' },
    { label: '节点4-8', value: '值48', parentId: '值4' },
    { label: '节点4-9', value: '值49', parentId: '值4' },
    { label: '节点5', value: '值5', parentId: null },
    { label: '节点6', value: '值6', parentId: null },
    { label: '节点7', value: '值7', parentId: null },
    { label: '节点8', value: '值8', parentId: null },
    { label: '节点9', value: '值9', parentId: null },
    { label: '节点9-1', value: '值91', parentId: '值9' },
    { label: '节点9-2', value: '值92', parentId: '值9' },
    { label: '节点9-3', value: '值93', parentId: '值9' },
    { label: '节点9-4', value: '值94', parentId: '值9' },
    { label: '节点9-5', value: '值95', parentId: '值9' },
    { label: '节点9-6', value: '值96', parentId: '值9' },
    { label: '节点9-7', value: '值97', parentId: '值9' },
    { label: '节点9-8', value: '值98', parentId: '值9' },
    { label: '节点9-9', value: '值99', parentId: '值9' },
    { label: '节点10', value: '值10', parentId: null }
  ]
})
</script>
