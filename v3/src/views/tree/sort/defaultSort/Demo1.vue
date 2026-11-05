<template>
  <div>
    <vxe-button @click="titleAscEvent">title升序</vxe-button>
    <vxe-button @click="titleDescEvent">title倒序</vxe-button>

    <vxe-tree v-bind="treeOptions"></vxe-tree>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTreeProps, VxeWithRequired } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

export default Vue.extend({
  data () {
    const treeOptions: VxeWithRequired<VxeTreeProps<NodeVO>, 'sortConfig'> = {
      transform: true,
      sortConfig: {
        defaultSort: {
          field: 'title',
          order: 'asc'
        }
      },
      data: [
        { title: '数据4-1-1', id: '411', parentId: '42' },
        { title: '数据2', id: '2', parentId: null },
        { title: '数据3-4', id: '34', parentId: '3' },
        { title: '数据3-3-3', id: '333', parentId: '33' },
        { title: '数据3-2', id: '32', parentId: '3' },
        { title: '数据4-2', id: '42', parentId: '4' },
        { title: '数据5', id: '5', parentId: null },
        { title: '数据3-2-1', id: '321', parentId: '32' },
        { title: '数据3-3-1', id: '331', parentId: '33' },
        { title: '数据3-3-2', id: '332', parentId: '33' },
        { title: '数据4', id: '4', parentId: null },
        { title: '数据3-3', id: '33', parentId: '3' },
        { title: '数据4-3-1', id: '431', parentId: '43' },
        { title: '数据4-1-2', id: '412', parentId: '42' },
        { title: '数据4-3', id: '43', parentId: '4' },
        { title: '数据4-3-2', id: '432', parentId: '43' },
        { title: '数据3-1', id: '31', parentId: '3' },
        { title: '数据3', id: '3', parentId: null },
        { title: '数据4-1', id: '41', parentId: '4' },
        { title: '数据3-2-2', id: '322', parentId: '32' }
      ]
    }

    return {
      treeOptions
    }
  },
  methods: {
    titleAscEvent () {
      this.treeOptions.sortConfig.defaultSort = {
        field: 'title',
        order: 'asc'
      }
    },
    titleDescEvent () {
      this.treeOptions.sortConfig.defaultSort = {
        field: 'title',
        order: 'desc'
      }
    }
  }
})
</script>
