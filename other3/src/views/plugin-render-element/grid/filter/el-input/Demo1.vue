<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
}

export default Vue.extend({
  data () {
    const nameFilterRender: VxeColumnPropTypes.FilterRender = {
      name: 'ElInput'
    }

    const nicknameFilterRender: VxeColumnPropTypes.FilterRender = {
      name: 'ElInput'
    }

    const gridOptions: VxeGridProps<RowVO> = {
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
          filterRender: nicknameFilterRender
        }
      ],
      data: [
        { id: 10001, name: 'Test1', nickname: 'Nickname11' },
        { id: 10002, name: 'Test2', nickname: '' },
        { id: 10002, name: 'Test3', nickname: 'Nickname323' }
      ]
    }

    return {
      gridOptions,
      nameFilterRender,
      nicknameFilterRender
    }
  }
})
</script>
