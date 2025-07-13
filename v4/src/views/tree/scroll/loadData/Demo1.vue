<template>
  <div>
    <vxe-button status="primary" @click="expandAllEvent">展开所有</vxe-button>
    <vxe-button status="primary" @click="clearAllEvent">关闭所有</vxe-button>

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
  showCheckbox: true,
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
      $tree.loadData(data)
    }
  })
}

const expandAllEvent = () => {
  const $tree = treeRef.value
  if ($tree) {
    $tree.setAllExpandNode(true)
  }
}

const clearAllEvent = () => {
  const $tree = treeRef.value
  if ($tree) {
    $tree.setAllExpandNode(false)
  }
}

loadList()
</script>
