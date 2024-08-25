<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #nameFilter="{ column }">
        <div v-for="(option, index) in column.filters" :key="index">
          <el-input v-model="option.data" @input="changeFilterOption(option)"></el-input>
        </div>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridInstance, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const nameFilterRender = reactive<VxeColumnPropTypes.FilterRender>({
  name: 'ElInput'
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 400,
  columns: [
    { type: 'checkbox', width: 60 },
    { type: 'seq', width: 80 },
    {
      field: 'name',
      title: 'Name',
      minWidth: 140,
      filters: [
        { data: '' }
      ],
      filterRender: nameFilterRender
    },
    {
      field: 'nickname',
      title: '输入框',
      minWidth: 200,
      filters: [
        { data: '' }
      ],
      filterRender: {},
      filterMethod ({ option, row, column }) {
        if (option.data) {
          return `${row[column.field]}`.indexOf(option.data) > -1
        }
        return true
      },
      slots: {
        filter: 'nameFilter'
      }
    }
  ],
  data: [
    { id: 10001, name: 'Test1', nickname: 'Nickname11' },
    { id: 10002, name: 'Test2', nickname: '' },
    { id: 10002, name: 'Test3', nickname: 'Nickname323' }
  ]
})

const changeFilterOption = (option: VxeColumnPropTypes.FilterItem) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.updateFilterOptionStatus(option, !!option.data)
  }
}
</script>
