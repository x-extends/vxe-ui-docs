<template>
  <div>
    <vxe-tree
      lazy
      show-checkbox
      has-child-field="hasChild"
      :node-config="nodeConfig"
      :load-method="loadMethod"
      :data="treeList">
    </vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTreePropTypes } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  hasChild?: boolean
}

const nodeConfig = reactive<VxeTreePropTypes.NodeConfig>({
  isHover: true
})

const treeList = ref<NodeVO[]>([
  { title: '节点2', id: '2', hasChild: true },
  { title: '节点3', id: '3', hasChild: true },
  { title: '节点4', id: '4', hasChild: true },
  { title: '节点5', id: '5', hasChild: false }
])

const getNodeListApi = (node: any) => {
  return new Promise<NodeVO[]>(resolve => {
    // 模拟后端接口
    setTimeout(() => {
      resolve([
        { title: `${node.title}-1`, id: `${node.id}1`, hasChild: Math.random() * 10 < 6 },
        { title: `${node.title}-2`, id: `${node.id}2`, hasChild: Math.random() * 10 < 6 }
      ])
    }, 500)
  })
}

const loadMethod: VxeTreePropTypes.LoadMethod<NodeVO> = ({ node }) => {
  return getNodeListApi(node)
}
</script>
