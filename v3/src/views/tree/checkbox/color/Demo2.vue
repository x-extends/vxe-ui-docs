<template>
  <div>
    <vxe-color-picker v-model="indeterminateColor" :colors="colorList" clearable></vxe-color-picker>
    <vxe-color-picker v-model="checkedColor" :colors="colorList" clearable></vxe-color-picker>

    <vxe-tree
      v-bind="treeOptions"
      :check-node-keys.sync="checkNodeKeys"
      :style="{
        '--vxe-ui-tree-node-checkbox-indeterminate-color': indeterminateColor,
        '--vxe-ui-tree-node-checkbox-checked-color': checkedColor
      }">
    </vxe-tree>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTreePropTypes, VxeTreeProps } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

export default Vue.extend({
  data () {
    const checkNodeKeys: VxeTreePropTypes.CheckNodeKeys = []

    const indeterminateColor = '#5F9EA0'
    const checkedColor = '#1E90FF'

    const colorList = [
      '#DC143C', '#FF1493', '#FF00FF', '#9932CC', '#6A5ACD',
      '#0000FF', '#00008B', '#778899', '#1E90FF', '#00BFFF',
      '#5F9EA0', '#00FFFF', '#008080', '#7FFFAA', '#3CB371',
      '#8FBC8F', '#008000', '#7CFC00', '#556B2F', '#FFFFE0',
      '#FFFF00', '#808000', '#EEE8AA', '#FFD700', '#FFA500',
      '#FF4500', '#FA8072', '#FF0000', '#800000', '#C0C0C0'
    ]

    const treeOptions: VxeTreeProps = {
      transform: true,
      showCheckbox: true,
      data: [
        { title: '节点2', id: '值2', parentId: null },
        { title: '节点3', id: '值3', parentId: null },
        { title: '节点3-1', id: '值31', parentId: '值3' },
        { title: '节点3-2', id: '值32', parentId: '值3' },
        { title: '节点3-2-1', id: '值321', parentId: '值32' },
        { title: '节点3-2-2', id: '值322', parentId: '值32' },
        { title: '节点3-3', id: '值33', parentId: '值3' },
        { title: '节点3-3-1', id: '值331', parentId: '值33' },
        { title: '节点3-3-2', id: '值332', parentId: '值33' },
        { title: '节点3-3-3', id: '值333', parentId: '值33' },
        { title: '节点3-4', id: '值34', parentId: '值3' },
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
      checkNodeKeys,
      indeterminateColor,
      checkedColor,
      colorList,
      treeOptions
    }
  }
})
</script>
