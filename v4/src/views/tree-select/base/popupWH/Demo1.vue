<template>
  <div>
    <vxe-tree-select
      v-model="val1"
      :tree-config="treeConfig"
      :options="treeList"
      :popup-config="popupConfig"
      :option-props="{label: 'title', value: 'id'}">
    </vxe-tree-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTreeSelectPropTypes } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

const val1 = ref()

const treeConfig = reactive<VxeTreeSelectPropTypes.TreeConfig>({
  transform: true,
  keyField: 'id',
  parentField: 'parentId'
})

const popupConfig = reactive<VxeTreeSelectPropTypes.PopupConfig>({
  width: 500,
  height: 400
})

const treeList = ref<NodeVO[]>([
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
])
</script>
