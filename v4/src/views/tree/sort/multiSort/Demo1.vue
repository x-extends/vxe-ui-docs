<template>
  <div>
    <vxe-button @click="sort1Event">title asc + createTime desc</vxe-button>
    <vxe-button @click="sort2Event">sort asc + status asc</vxe-button>

    <vxe-tree v-bind="treeOptions"></vxe-tree>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeTreeProps, VxeWithRequired } from 'vxe-pc-ui'

interface NodeVO {
  id: string
  parentId?: string | null
  title: string
  age: number
  score: number
  sort: number
  status: 0 | 1 | 2
  type: 'A' | 'B' | 'C'
  createTime: string
}

const treeOptions = reactive<VxeWithRequired<VxeTreeProps<NodeVO>, 'sortConfig'>>({
  transform: true,
  sortConfig: {
    defaultSort: [
      { field: 'title', order: 'asc' },
      { field: 'createTime', order: 'desc' }
    ]
  },
  data: [
    { id: '1', parentId: null, title: '研发部', age: 0, score: 88, sort: 1, status: 1, type: 'A', createTime: '2023-01-01 10:00:00' },

    { id: '1-1', parentId: '1', title: '张三', age: 28, score: 90, sort: 2, status: 1, type: 'A', createTime: '2023-03-15 09:00:00' },
    { id: '1-2', parentId: '1', title: '李四', age: 32, score: 85, sort: 1, status: 1, type: 'B', createTime: '2023-02-20 14:30:00' },
    { id: '1-3', parentId: '1', title: '王五', age: 26, score: 90, sort: 2, status: 0, type: 'A', createTime: '2023-05-10 11:20:00' },
    { id: '1-4', parentId: '1', title: '赵六', age: 32, score: 85, sort: 1, status: 2, type: 'C', createTime: '2023-02-20 14:30:00' },

    { id: '1-4-1', parentId: '1-4', title: '孙七', age: 24, score: 78, sort: 1, status: 1, type: 'A', createTime: '2024-01-05 08:45:00' },
    { id: '1-4-2', parentId: '1-4', title: '周八', age: 24, score: 78, sort: 2, status: 1, type: 'B', createTime: '2024-01-05 08:45:00' },

    { id: '2', parentId: null, title: '市场部', age: 0, score: 92, sort: 2, status: 1, type: 'B', createTime: '2023-01-01 10:00:00' },
    { id: '2-1', parentId: '2', title: '吴九', age: 30, score: 92, sort: 3, status: 1, type: 'A', createTime: '2022-12-01 10:10:10' },
    { id: '2-2', parentId: '2', title: '郑十', age: 30, score: 92, sort: 1, status: 1, type: 'A', createTime: '2022-12-01 10:10:10' },
    { id: '2-3', parentId: '2', title: '钱十一', age: 35, score: 70, sort: 2, status: 0, type: 'C', createTime: '2023-07-07 07:07:07' },

    { id: '3', parentId: null, title: '财务部', age: 0, score: 95, sort: 3, status: 1, type: 'C', createTime: '2023-01-01 10:00:00' },
    { id: '3-1', parentId: '3', title: '冯十二', age: 40, score: 95, sort: 1, status: 1, type: 'B', createTime: '2021-06-01 09:00:00' },
    { id: '3-2', parentId: '3', title: '陈十三', age: 40, score: 95, sort: 1, status: 1, type: 'A', createTime: '2021-06-01 09:00:00' }
  ]
})

const sort1Event = () => {
  treeOptions.sortConfig.defaultSort = [
    { field: 'title', order: 'asc' },
    { field: 'createTime', order: 'desc' }
  ]
}

const sort2Event = () => {
  treeOptions.sortConfig.defaultSort = [
    { field: 'sort', order: 'asc' },
    { field: 'status', order: 'desc' }
  ]
}
</script>
