<template>
  <div>
    <vxe-cascader
      clearable
      v-model="val1"
      :tree-config="treeConfig"
      :options="treeList">
    </vxe-cascader>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeCascaderPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const val1 = ''

    const treeConfig: VxeCascaderPropTypes.TreeConfig = {
      iconOpen: 'vxe-icon-arrow-up rotate90',
      iconClose: 'vxe-icon-arrow-up'
    }

    const treeList: VxeCascaderPropTypes.Options = [
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
      val1,
      treeList,
      treeConfig
    }
  }
})
</script>
