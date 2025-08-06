<template>
  <div>
    <vxe-tree-select v-model="val1" v-bind="treeSelectOptions"></vxe-tree-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTreeSelectProps } from 'vxe-pc-ui'

interface NodeVO {
  label: string
  value: string
  parentId?: string | null
}

export default Vue.extend({
  data () {
    const val1 = []
    const treeSelectOptions: VxeTreeSelectProps<NodeVO> = {
      treeConfig: {
        transform: true,
        keyField: 'value',
        parentField: 'parentId',
        radioConfig: {
          showIcon: true
        }
      },
      options: [
        { label: '节点2', value: '值2', parentId: null },
        { label: '节点3', value: '值3', parentId: null },
        { label: '节点3-1', value: '值31', parentId: '值3' },
        { label: '节点3-2', value: '值32', parentId: '值3' },
        { label: '节点3-2-1', value: '值321', parentId: '值32' },
        { label: '节点3-2-2', value: '值322', parentId: '值32' },
        { label: '节点3-3', value: '值33', parentId: '值3' },
        { label: '节点3-3-1', value: '值331', parentId: '值33' },
        { label: '节点3-3-2', value: '值332', parentId: '值33' },
        { label: '节点3-3-3', value: '值333', parentId: '值33' },
        { label: '节点3-4', value: '值34', parentId: '值3' },
        { label: '节点4', value: '4', parentId: null },
        { label: '节点4-1', value: '41', parentId: '4' },
        { label: '节点4-1-1', value: '411', parentId: '42' },
        { label: '节点4-1-2', value: '412', parentId: '42' },
        { label: '节点4-2', value: '42', parentId: '4' },
        { label: '节点4-3', value: '43', parentId: '4' },
        { label: '节点4-3-1', value: '431', parentId: '43' },
        { label: '节点4-3-2', value: '432', parentId: '43' },
        { label: '节点5', value: '5', parentId: null }
      ]
    }

    return {
      val1,
      treeSelectOptions
    }
  }
})
</script>
