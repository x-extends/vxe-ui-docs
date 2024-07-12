<template>
  <div>
    <vxe-tree
      is-hover
      lazy
      has-child-field="hasChild"
      :load-method="loadMethod"
      :data="treeList">
    </vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTreePropTypes } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  hasChild?: boolean
}

const treeList = ref<NodeVO[]>([
  { title: '节点2', id: '2', hasChild: true },
  { title: '节点3', id: '3', hasChild: true },
  { title: '节点4', id: '4', hasChild: true },
  { title: '节点5', id: '5', hasChild: false }
])

const getNodeListApi = (node: any) => {
  return new Promise<NodeVO[]>((resolve, reject) => {
    // 模拟后端接口
    setTimeout(() => {
      if (Math.random() * 10 < 4) {
        resolve([
          { title: `${node.title}-1`, id: `${node.id}1` },
          { title: `${node.title}-2`, id: `${node.id}2` }
        ])
      } else {
        reject(new Error())
      }
    }, 500)
  })
}

const loadMethod: VxeTreePropTypes.LoadMethod<NodeVO> = ({ node }) => {
  return getNodeListApi(node)
}
</script>
