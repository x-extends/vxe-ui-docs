<template>
  <div>
    <vxe-tree v-bind="treeOptions"></vxe-tree>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTreeProps } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
  hasChild?: boolean
}

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

export default Vue.extend({
  data () {
    const treeOptions: VxeTreeProps<NodeVO> = {
      transform: true,
      lazy: true,
      showCheckbox: true,
      showLine: true,
      hasChildField: 'hasChild',
      iconOpen: 'vxe-icon-square-minus',
      iconClose: 'vxe-icon-square-plus',
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
    }

    return {
      treeOptions
    }
  }
})
</script>
