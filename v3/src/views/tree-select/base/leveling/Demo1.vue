<template>
  <div>
    <vxe-tree-select
      v-model="val1"
      :tree-config="treeConfig"
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
      parentField: 'parentId'
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
      { title: '节点3-3-4', id: '334', parentId: '33' },
      { title: '节点3-3-5', id: '335', parentId: '33' },
      { title: '节点3-3-6', id: '336', parentId: '33' },
      { title: '节点3-3-7', id: '337', parentId: '33' },
      { title: '节点3-3-8', id: '338', parentId: '33' },
      { title: '节点3-3-9', id: '339', parentId: '33' },
      { title: '节点3-4', id: '34', parentId: '3' },
      { title: '节点4', id: '4', parentId: null },
      { title: '节点4-1', id: '41', parentId: '4' },
      { title: '节点4-1-1', id: '411', parentId: '42' },
      { title: '节点4-1-2', id: '412', parentId: '42' },
      { title: '节点4-2', id: '42', parentId: '4' },
      { title: '节点4-3', id: '43', parentId: '4' },
      { title: '节点4-3-1', id: '431', parentId: '43' },
      { title: '节点4-3-2', id: '432', parentId: '43' },
      { title: '节点4-4', id: '44', parentId: '4' },
      { title: '节点4-5', id: '45', parentId: '4' },
      { title: '节点4-6', id: '46', parentId: '4' },
      { title: '节点4-7', id: '47', parentId: '4' },
      { title: '节点4-8', id: '48', parentId: '4' },
      { title: '节点4-9', id: '49', parentId: '4' },
      { title: '节点5', id: '5', parentId: null },
      { title: '节点6', id: '6', parentId: null },
      { title: '节点7', id: '7', parentId: null },
      { title: '节点8', id: '8', parentId: null },
      { title: '节点9', id: '9', parentId: null },
      { title: '节点9-1', id: '91', parentId: '9' },
      { title: '节点9-2', id: '92', parentId: '9' },
      { title: '节点9-3', id: '93', parentId: '9' },
      { title: '节点9-4', id: '94', parentId: '9' },
      { title: '节点9-5', id: '95', parentId: '9' },
      { title: '节点9-6', id: '96', parentId: '9' },
      { title: '节点9-7', id: '97', parentId: '9' },
      { title: '节点9-8', id: '98', parentId: '9' },
      { title: '节点9-9', id: '99', parentId: '9' },
      { title: '节点10', id: '10', parentId: null }
    ]

    return {
      val1: '321',
      treeConfig,
      treeList
    }
  }
})
</script>
