<template>
  <div>
    <vxe-tree-select v-model="val1" :options="treeList" :treeConfig="treeConfig" multiple clearable></vxe-tree-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTreeSelectPropTypes } from 'vxe-pc-ui'

interface NodeVO {
  label: string
  value: string
  hasChild?: boolean
}

const val1 = ref()

const treeConfig = reactive<VxeTreeSelectPropTypes.TreeConfig>({
  lazy: true,
  loadMethod ({ node }) {
    return getNodeListApi(node)
  }
})

const treeList = ref<VxeTreeSelectPropTypes.Options>([
  { label: '节点2', value: '2', hasChild: true },
  { label: '节点3', value: '3', hasChild: true },
  { label: '节点4', value: '4', hasChild: true },
  { label: '节点5', value: '5', hasChild: false }
])

const getNodeListApi = (node: any) => {
  return new Promise<NodeVO[]>(resolve => {
    // 模拟后端接口
    setTimeout(() => {
      resolve([
        { label: `${node.label}-1`, value: `${node.value}1`, hasChild: Math.random() * 10 < 6 },
        { label: `${node.label}-2`, value: `${node.value}2`, hasChild: Math.random() * 10 < 6 }
      ])
    }, 500)
  })
}
</script>
