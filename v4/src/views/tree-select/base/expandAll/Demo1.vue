<template>
  <div>
    <vxe-tree-select
      v-model="val1"
      :tree-config="treeConfig"
      :options="treeList">
    </vxe-tree-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTreeSelectPropTypes } from 'vxe-pc-ui'

interface NodeVO {
  label: string
  value: string
  parentId?: string | null
}

const val1 = ref()

const treeConfig = reactive<VxeTreeSelectPropTypes.TreeConfig>({
  transform: true,
  keyField: 'value',
  parentField: 'parentId',
  expandAll: true
})

const treeList = ref<NodeVO[]>([
  { label: '节点2', value: '2', parentId: null },
  { label: '节点3', value: '3', parentId: null },
  { label: '节点3-1', value: '31', parentId: '3' },
  { label: '节点3-2', value: '32', parentId: '3' },
  { label: '节点3-2-1', value: '321', parentId: '32' },
  { label: '节点3-2-2', value: '322', parentId: '32' },
  { label: '节点3-3', value: '33', parentId: '3' },
  { label: '节点3-3-1', value: '331', parentId: '33' },
  { label: '节点3-3-2', value: '332', parentId: '33' },
  { label: '节点3-3-3', value: '333', parentId: '33' },
  { label: '节点3-4', value: '34', parentId: '3' },
  { label: '节点4', value: '4', parentId: null },
  { label: '节点4-1', value: '41', parentId: '4' },
  { label: '节点4-1-1', value: '411', parentId: '42' },
  { label: '节点4-1-2', value: '412', parentId: '42' },
  { label: '节点4-2', value: '42', parentId: '4' },
  { label: '节点4-3', value: '43', parentId: '4' },
  { label: '节点4-3-1', value: '431', parentId: '43' },
  { label: '节点4-3-2', value: '432', parentId: '43' },
  { label: '节点5', value: '5', parentId: null }
])
</script>
