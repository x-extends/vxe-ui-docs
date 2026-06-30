<template>
  <div>
    <div>
      <vxe-button status="primary" @click="insertEvent">顶部插入</vxe-button>
      <vxe-button status="primary" @click="insertAtEvent">底部插入</vxe-button>
      <vxe-button status="success" @click="getInsertEvent">获取新增</vxe-button>
    </div>

    <vxe-tree ref="treeRef" v-bind="treeOptions">
      <template #extra="{ node }">
        <vxe-button mode="text" status="primary" icon="vxe-icon-add" @click="insertNodeEvent(node)">当前插入</vxe-button>
        <vxe-button mode="text" status="primary" icon="vxe-icon-add" @click="insertNextNodeEvent(node)">下一行插入</vxe-button>
        <vxe-button mode="text" status="primary" icon="vxe-icon-add-sub" @click="insertChildEvent(node)">插入子节点</vxe-button>
      </template>
    </vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeTreeInstance, VxeTreeProps } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

const treeRef = ref<VxeTreeInstance<NodeVO>>()

const treeOptions = reactive<VxeTreeProps>({
  transform: true,
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

const insertEvent = () => {
  const $tree = treeRef.value
  if ($tree) {
    const record = {
      id: Date.now(),
      title: `标题 ${Date.now()}`
    }
    $tree.insert(record)
  }
}

const insertAtEvent = () => {
  const $tree = treeRef.value
  if ($tree) {
    const record = {
      id: Date.now(),
      title: `标题 ${Date.now()}`
    }
    $tree.insertAt(record, -1)
  }
}

const insertNodeEvent = (node: NodeVO) => {
  const $tree = treeRef.value
  if ($tree) {
    const record = {
      id: Date.now(),
      parentId: node.parentId,
      title: `标题 ${Date.now()}`
    }
    $tree.insertAt(record, node)
  }
}

const insertNextNodeEvent = (node: NodeVO) => {
  const $tree = treeRef.value
  if ($tree) {
    const record = {
      id: Date.now(),
      parentId: node.parentId,
      title: `标题 ${Date.now()}`
    }
    $tree.insertNextAt(record, node)
  }
}

const insertChildEvent = async (node: NodeVO) => {
  const $tree = treeRef.value
  if ($tree) {
    const record = {
      id: Date.now(),
      title: `标题 ${Date.now()}`
    }
    await $tree.insertChild(record, node)
    $tree.setExpandNode(node, true)
  }
}

const getInsertEvent = () => {
  const $tree = treeRef.value
  if ($tree) {
    const insertRecords = $tree.getInsertRecords()
    VxeUI.modal.message({
      content: `新增节点：${insertRecords.length}个`,
      status: 'success'
    })
    console.log('新增：', insertRecords)
  }
}
</script>
