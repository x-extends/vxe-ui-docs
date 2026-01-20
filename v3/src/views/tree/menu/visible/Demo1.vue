<template>
  <div>
    <vxe-tree
      v-bind="treeOptions"
      @menu-click="menuClickEvent">
    </vxe-tree>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTreeProps } from 'vxe-pc-ui'

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
      menuConfig: {
        options: [
          [
            { code: '1', name: '新增', visible: true },
            { code: '2', name: '删除', prefixIcon: 'vxe-icon-delete-fill', visible: false },
            {
              code: '3',
              name: '审批',
              visible: true,
              children: [
                { code: '4', name: '通过', prefixIcon: 'vxe-icon-check', visible: true },
                { code: '5', name: '不通过', prefixIcon: 'vxe-icon-close', visible: true }
              ]
            },
            { code: '6', name: '查看', prefixIcon: 'vxe-icon-link', visible: false }
          ],
          [
            {
              code: '11',
              name: '更多操作',
              visible: true,
              children: [
                { code: '13', name: '编辑', prefixIcon: 'vxe-icon-feedback', visible: false },
                { code: '14', name: '取消', visible: true }
              ]
            },
            { code: '10', name: '驳回', prefixIcon: 'vxe-icon-undo', visible: true }
          ]
        ]
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

    return {
      treeOptions
    }
  },
  methods: {
    menuClickEvent ({ node, menu }) {
      VxeUI.modal.message({
        content: `点击了${node.title} - code=${menu.code}`,
        status: 'success'
      })
    }
  }
})
</script>
