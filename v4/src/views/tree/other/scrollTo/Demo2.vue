<template>
  <div>
    <vxe-button @click="scrollEvent('527')">定位-深圳南山区</vxe-button>
    <vxe-button @click="scrollEvent('30')">定位-上海虹口区</vxe-button>
    <vxe-button @click="scrollEvent('92')">定位-重庆市云阳县</vxe-button>

    <vxe-tree ref="treeRef" v-bind="treeOptions"></vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTreeInstance, VxeTreeProps } from 'vxe-pc-ui'

interface NodeVO {
  id: number
  parentId: number | null
  name: string
}

const treeRef = ref<VxeTreeInstance<NodeVO>>()

const treeOptions = reactive<VxeTreeProps>({
  loading: false,
  height: 400,
  transform: true,
  titleField: 'name',
  virtualYConfig: {
    enabled: true,
    gt: 0
  }
})

const loadList = () => {
  treeOptions.loading = true
  fetch('/resource/json/provinces_list.json').then(res => res.json()).then((data: NodeVO[]) => {
    treeOptions.loading = false
    const $tree = treeRef.value
    if ($tree) {
      $tree.reloadData(data)
    }
  })
}

const scrollEvent = (nodeId: string) => {
  const $tree = treeRef.value
  if ($tree) {
    $tree.scrollToNodeId(nodeId)
  }
}

loadList()
</script>
