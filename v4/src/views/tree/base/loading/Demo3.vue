<template>
  <div>
    <vxe-tree
      transform
      height="300"
      :loading="loading"
      :node-config="nodeConfig"
      :data="treeList">
      <template #loading>
        <img src="https://vxeui.com/resource/img/546.gif" style="width: 100px;">
        <div>正在加载中，请稍后...</div>
      </template>
    </vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTreePropTypes } from 'vxe-pc-ui'

const loading = ref(false)
const treeList = ref<VxeTreePropTypes.Data>()

const nodeConfig = reactive<VxeTreePropTypes.NodeConfig>({
  isHover: true
})

loading.value = true
setTimeout(() => {
  treeList.value = [
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
  loading.value = false
}, 10000)
</script>
