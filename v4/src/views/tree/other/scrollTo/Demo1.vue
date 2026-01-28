<template>
  <div>
    <div>
      <vxe-button @click="scrollNodeEvent('3')">定位节点3</vxe-button>
      <vxe-button @click="scrollNodeEvent('332')">定位节点3-3-1</vxe-button>
      <vxe-button @click="scrollNodeEvent('432')">定位节点4-3-2</vxe-button>
      <vxe-button @click="scrollNodeEvent('5')">定位节点5</vxe-button>
    </div>

    <vxe-tree
      transform
      ref="treeRef"
      height="300"
      title-field="title"
      key-field="id"
      parent-field="parentId"
      :node-config="nodeConfig"
      :data="treeList">
    </vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTreeInstance, VxeTreePropTypes } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

const treeRef = ref<VxeTreeInstance>()

const nodeConfig = reactive<VxeTreePropTypes.NodeConfig>({
  isHover: true
})

const treeList = ref<NodeVO[]>([
  { title: '节点1', id: '1', parentId: null },
  { title: '节点2', id: '2', parentId: null },
  { title: '节点3', id: '3', parentId: null },
  { title: '节点3-1', id: '31', parentId: '3' },
  { title: '节点3-2', id: '32', parentId: '3' },
  { title: '节点3-2-1', id: '321', parentId: '32' },
  { title: '节点3-2-2', id: '322', parentId: '32' },
  { title: '节点3-3', id: '33', parentId: '3' },
  { title: '节点3-3-1', id: '331', parentId: '33' },
  { title: '节点3-3-2', id: '332', parentId: '33' },
  { title: '节点3-3-3', id: '333', parentId: '33' },
  { title: '节点3-3-4', id: '334', parentId: '33' },
  { title: '节点3-3-5', id: '335', parentId: '33' },
  { title: '节点3-4', id: '34', parentId: '3' },
  { title: '节点4', id: '4', parentId: null },
  { title: '节点4-1', id: '41', parentId: '4' },
  { title: '节点4-1-1', id: '411', parentId: '42' },
  { title: '节点4-1-2', id: '412', parentId: '42' },
  { title: '节点4-2', id: '42', parentId: '4' },
  { title: '节点4-3', id: '43', parentId: '4' },
  { title: '节点4-3-1', id: '431', parentId: '43' },
  { title: '节点4-3-2', id: '432', parentId: '43' },
  { title: '节点4-4', id: '44', parentId: '4' },
  { title: '节点5', id: '5', parentId: null },
  { title: '节点6', id: '6', parentId: null }
])

const scrollNodeEvent = (nodeId: string) => {
  const $tree = treeRef.value
  if ($tree) {
    $tree.scrollToNodeId(nodeId)
  }
}
</script>
