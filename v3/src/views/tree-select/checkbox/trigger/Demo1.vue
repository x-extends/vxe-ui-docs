<template>
  <div>
    <vxe-tree-select
      v-model="val1"
      multiple
      :tree-config="treeConfig"
      :options="treeList">
    </vxe-tree-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTreeSelectPropTypes } from 'vxe-pc-ui'

interface RowVO {
  label: string
  value: string
  children?: RowVO[]
}

export default Vue.extend({
  data () {
    const treeConfig: VxeTreeSelectPropTypes.TreeConfig<RowVO> = {
      trigger: 'node',
      checkboxConfig: {
        showIcon: true,
        checkStrictly: true,
        visibleMethod ({ node }) {
          return !(node.children && node.children.length)
        },
        checkMethod ({ node }) {
          return !node.children || !node.children.length
        }
      }
    }

    const treeList: VxeTreeSelectPropTypes.Options = [
      { label: '节点2', value: '2' },
      {
        label: '节点3',
        value: '3',
        children: [
          { label: '节点3-1', value: '31' },
          { label: '节点3-2', value: '32' },
          {
            label: '节点3-3',
            value: '33',
            children: [
              { label: '节点3-3-1', value: '331' },
              { label: '节点3-3-2', value: '332' },
              { label: '节点3-3-3', value: '333' }
            ]
          },
          { label: '节点3-4', value: '34' }
        ]
      },
      {
        label: '节点4',
        value: '4',
        children: [
          { label: '节点4-1', value: '41' },
          { label: '节点4-2', value: '42' },
          {
            label: '节点4-3',
            value: '43',
            children: [
              { label: '节点4-3-1', value: '431' },
              { label: '节点4-3-2', value: '432' }
            ]
          }
        ]
      },
      { label: '节点5', value: '5' }
    ]

    return {
      val1: [],
      treeConfig,
      treeList
    }
  }
})
</script>
