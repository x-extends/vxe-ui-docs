<template>
  <div>
    <vxe-tree v-bind="treeOptions">
      <template #extra>
        <vxe-button mode="text" :options="downBtns" :show-dropdown-icon="false" @dropdown-click="dropdownClickEvent">
          <vxe-icon name="ellipsis-h"></vxe-icon>
        </vxe-button>
      </template>
    </vxe-tree>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTreeProps, VxeButtonPropTypes } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

export default Vue.extend({
  data () {
    const treeOptions: VxeTreeProps<NodeVO> = {
      transform: true,
      nodeConfig: {
        isHover: true,
        isCurrent: true
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
    }

    const downBtns: VxeButtonPropTypes.Options = [
      { name: '3', content: '查看' },
      { name: '1', content: '插入' },
      { name: '2', content: '删除' },
      { name: '3', content: '编辑' }
    ]

    return {
      treeOptions,
      downBtns
    }
  },
  methods: {
    dropdownClickEvent (params) {
      VxeUI.modal.message({
        content: `点击了 ${params.name}`,
        status: 'success'
      })
    }
  }
})
</script>
