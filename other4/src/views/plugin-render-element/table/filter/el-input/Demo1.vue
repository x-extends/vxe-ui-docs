<template>
  <div>
    <vxe-table
      border
      height="400"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="80"></vxe-column>
      <vxe-column title="Name" field="name" min-width="140" :filters="nameFilterOptions" :filter-render="nameFilterRender"></vxe-column>
      <vxe-column title="输入框" field="nickname" width="200" :filters="nicknameFilterOptions" :filter-render="nicknameFilterRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
}

const nameFilterOptions = reactive<VxeColumnPropTypes.Filters>([
  { data: '' }
])
const nameFilterRender = reactive<VxeColumnPropTypes.FilterRender>({
  name: 'ElInput'
})

const nicknameFilterOptions = reactive<VxeColumnPropTypes.Filters>([
  { data: '' }
])
const nicknameFilterRender = reactive<VxeColumnPropTypes.FilterRender>({
  name: 'ElInput'
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', nickname: 'Nickname11' },
  { id: 10002, name: 'Test2', nickname: '' },
  { id: 10002, name: 'Test3', nickname: 'Nickname323' }
])
</script>
