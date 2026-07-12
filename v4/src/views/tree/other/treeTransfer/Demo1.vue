<template>
  <div>
    <vxe-button status="success" @click="resultEvent1">获取数据1</vxe-button>
    <vxe-button status="success" @click="resultEvent2">获取数据2</vxe-button>
    <div class="my-tree-transfer">
      <div class="my-tree-transfer-left">
        <vxe-tree ref="treeRef1" v-bind="treeOptions1"></vxe-tree>
      </div>
      <div class="my-tree-transfer-handle">
        <vxe-button class="my-tree-transfer-btn" status="primary" icon="vxe-icon-arrow-double-right" style="width: 100%;" @click="addEvent"></vxe-button>
        <vxe-button class="my-tree-transfer-btn" status="error" icon="vxe-icon-arrow-double-left" style="width: 100%;" @click="delEvent"></vxe-button>
      </div>
      <div class="my-tree-transfer-right">
        <vxe-tree ref="treeRef2" v-bind="treeOptions2"></vxe-tree>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeTreeProps, VxeTreeInstance } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

const treeRef1 = ref<VxeTreeInstance<NodeVO>>()
const treeRef2 = ref<VxeTreeInstance<NodeVO>>()

const treeOptions1 = reactive<VxeTreeProps<NodeVO>>({
  height: '100%',
  transform: true,
  titleField: 'title',
  keyField: 'id',
  parentField: 'parentId',
  showCheckbox: true,
  drag: true,
  dragConfig: {
    isCrossDrag: true,
    isCrossTreeDrag: true
  },
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

const treeOptions2 = reactive<VxeTreeProps<NodeVO>>({
  height: '100%',
  transform: true,
  titleField: 'title',
  keyField: 'id',
  parentField: 'parentId',
  showCheckbox: true,
  drag: true,
  dragConfig: {
    isCrossDrag: true,
    isCrossTreeDrag: true
  },
  data: []
})

const addEvent = () => {
  const $tree1 = treeRef1.value
  const $tree2 = treeRef2.value
  if ($tree1 && $tree2) {
    const selectRecords = $tree1.getCheckboxRecords()
    if (selectRecords.length) {
      $tree1.clearCheckboxNode()
      $tree1.remove(selectRecords)
      $tree2.insertAt(selectRecords, -1)
    } else {
      VxeUI.modal.message({
        content: '请勾选左侧数据',
        status: 'warning'
      })
    }
  }
}

const delEvent = () => {
  const $tree1 = treeRef1.value
  const $tree2 = treeRef2.value
  if ($tree1 && $tree2) {
    const selectRecords = $tree2.getCheckboxRecords()
    if (selectRecords.length) {
      $tree2.clearCheckboxNode()
      $tree2.remove(selectRecords)
      $tree1.insertAt(selectRecords, -1)
    } else {
      VxeUI.modal.message({
        content: '请勾选右侧数据',
        status: 'warning'
      })
    }
  }
}

const resultEvent1 = () => {
  const $tree1 = treeRef1.value
  if ($tree1) {
    const { insertRecords, removeRecords } = $tree1.getRecordset()
    const treeData = $tree1.getFullData()
    VxeUI.modal.message({
      content: `新增：${insertRecords.length} 删除：${removeRecords.length} 现有：${treeData.length}`,
      status: 'success'
    })
  }
}

const resultEvent2 = () => {
  const $tree2 = treeRef2.value
  if ($tree2) {
    const { insertRecords, removeRecords } = $tree2.getRecordset()
    const treeData = $tree2.getFullData()
    VxeUI.modal.message({
      content: `新增：${insertRecords.length} 删除：${removeRecords.length} 现有：${treeData.length}`,
      status: 'success'
    })
  }
}
</script>

<style lang="scss" scoped>
.my-tree-transfer {
  display: flex;
  height: 400px;
  overflow: hidden;
}
.my-tree-transfer-handle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  padding: 0 5px;
  width: 50px;
}
.my-tree-transfer-btn {
  margin: 2px 0;
}
.my-tree-transfer-left,
.my-tree-transfer-right {
  width: 50%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #999999;
  overflow: hidden;
}
</style>
