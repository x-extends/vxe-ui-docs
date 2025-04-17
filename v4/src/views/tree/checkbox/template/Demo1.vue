<template>
  <div>
    <vxe-tree
      v-bind="treeOptions"
      v-model:check-node-keys="checkNodeKeys">
      <template #title="{ node }">
        <span>{{ node.title }}</span>
        <vxe-icon status="error" name="warning-triangle"></vxe-icon>
      </template>
      <template #extra>
        <vxe-link href="https://vxeui.com/" status="primary">查看</vxe-link>
        <vxe-button mode="text" status="error" icon="vxe-icon-delete-fill">删除</vxe-button>
      </template>
    </vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTreeProps, VxeTreePropTypes } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

const checkNodeKeys = ref<VxeTreePropTypes.CheckNodeKeys>([])

const treeOptions = reactive<VxeTreeProps<NodeVO>>({
  transform: true,
  showCheckbox: true,
  keyField: 'id',
  data: [
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
    { title: '节点3-4', id: '34', parentId: '3' },
    { title: '节点4', id: '4', parentId: null },
    { title: '节点4-1', id: '41', parentId: '4' },
    { title: '节点4-1-1', id: '411', parentId: '42' },
    { title: '节点4-1-2', id: '412', parentId: '42' },
    { title: '节点4-2', id: '42', parentId: '4' },
    { title: '节点4-3', id: '43', parentId: '4' },
    { title: '节点4-3-1', id: '431', parentId: '43' },
    { title: '节点4-3-2', id: '432', parentId: '43' },
    { title: '节点5', id: '5', parentId: null }
  ]
})
</script>
