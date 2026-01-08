<template>
  <div>
    <vxe-tree-select
      v-model="val1"
      :tree-config="treeConfig"
      :menu-config="menuConfig"
      :options="treeList"
      :option-props="{label: 'title', value: 'id'}">
    </vxe-tree-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTreeSelectPropTypes } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

export default Vue.extend({
  data () {
    const treeConfig: VxeTreeSelectPropTypes.TreeConfig = {
      transform: true,
      keyField: 'id',
      parentField: 'parentId',
      nodeConfig: {
        isHover: true,
        isCurrent: true
      }
    }

    const menuConfig: VxeTreeSelectPropTypes.MenuConfig = {
      options: [
        [
          { code: '1', name: '新增', disabled: false, visible: true },
          { code: '2', name: '删除', prefixIcon: 'vxe-icon-delete-fill', disabled: false, visible: true },
          {
            code: '3',
            name: '审批',
            disabled: false,
            visible: true,
            children: [
              { code: '4', name: '通过', prefixIcon: 'vxe-icon-check', disabled: false, visible: true },
              { code: '5', name: '不通过', prefixIcon: 'vxe-icon-close', disabled: false, visible: true }
            ]
          },
          { code: '6', name: '查看', prefixIcon: 'vxe-icon-link', disabled: false, visible: true }
        ],
        [
          {
            code: '11',
            name: '更多操作',
            disabled: false,
            visible: true,
            children: [
              { code: '13', name: '编辑', prefixIcon: 'vxe-icon-feedback', disabled: false, visible: true },
              { code: '14', name: '取消' }
            ]
          },
          { code: '10', name: '驳回', prefixIcon: 'vxe-icon-undo', disabled: false, visible: true }
        ]
      ],
      visibleMethod ({ node, options }) {
        options.forEach(list => {
          list.forEach(item => {
            if (item.code === '1' || item.code === '3') {
              item.disabled = node.title === '节点2'
            }
            if (item.code === '4' || item.code === '11') {
              item.visible = node.title === '节点3'
            }
          })
        })
        return true
      }
    }

    const treeList: NodeVO[] = [
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

    return {
      val1: null,
      treeConfig,
      menuConfig,
      treeList
    }
  }
})
</script>
