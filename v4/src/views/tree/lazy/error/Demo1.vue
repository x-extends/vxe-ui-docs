<template>
  <div>
    <vxe-tree
      v-bind="treeOptions"
      v-on="treeEvents">
    </vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeUI, VxeTreeProps, VxeTreeListeners } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
  hasChild?: boolean
}

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

const treeOptions = reactive<VxeTreeProps<NodeVO>>({
  transform: true,
  lazy: true,
  showCheckbox: true,
  showLine: true,
  nodeConfig: {
    isHover: true
  },
  loadMethod ({ node }) {
    return getNodeListApi(node)
  },
  data: [
    { title: '节点2', id: '2', hasChild: true },
    { title: '节点3', id: '3', hasChild: true },
    { title: '节点4', id: '4', hasChild: true },
    { title: '节点5', id: '5', hasChild: false }
  ]
})

const treeEvents: VxeTreeListeners<NodeVO> = {
  loadSuccess () {
    VxeUI.modal.message({
      content: '加载成功',
      status: 'success'
    })
  },
  loadError () {
    VxeUI.modal.message({
      content: '加载失败',
      status: 'error'
    })
  }
}
</script>
