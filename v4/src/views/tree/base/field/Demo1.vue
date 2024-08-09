<template>
  <div>
    <vxe-tree
      title-field="name"
      children-field="childList"
      key-field="key"
      :node-config="nodeConfig"
      :data="treeList">
    </vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTreePropTypes } from 'vxe-pc-ui'

interface NodeVO {
  name: string
  key: string
  childList?: NodeVO[]
}

const nodeConfig = reactive<VxeTreePropTypes.NodeConfig<NodeVO>>({
  isHover: true
})

const treeList = ref<NodeVO[]>([
  { name: '节点2', key: '2' },
  {
    name: '节点3',
    key: '3',
    childList: [
      { name: '节点3-1', key: '31' },
      {
        name: '节点3-2',
        key: '32',
        childList: [
          { name: '节点3-2-1', key: '321' },
          { name: '节点3-2-2', key: '322' }
        ]
      },
      {
        name: '节点3-3',
        key: '33',
        childList: [
          { name: '节点3-3-1', key: '331' },
          { name: '节点3-3-2', key: '332' },
          { name: '节点3-3-3', key: '333' }
        ]
      },
      { name: '节点3-4', key: '34' }
    ]
  },
  {
    name: '节点4',
    key: '4',
    childList: [
      {
        name: '节点4-1',
        key: '41',
        childList: [
          { name: '节点4-1-1', key: '411' },
          { name: '节点4-1-2', key: '412' }
        ]
      },
      { name: '节点4-2', key: '42' },
      {
        name: '节点4-3',
        key: '43',
        childList: [
          { name: '节点4-3-1', key: '431' },
          { name: '节点4-3-2', key: '432' }
        ]
      }
    ]
  },
  { name: '节点5', key: '5' }
])
</script>
