<template>
  <div>
    <p>
      <vxe-button @click="loadList(10)">加载10条</vxe-button>
      <vxe-button @click="loadList(500)">加载500条</vxe-button>
      <vxe-button @click="loadList(10000)">加载1w条</vxe-button>
      <vxe-button @click="loadList(100000)">加载10w条</vxe-button>
      <vxe-button @click="loadList(250000)">加载25w条</vxe-button>
    </p>

    <vxe-list class="my-table-list" v-bind="listOptions">
      <template #default="{ items }">
        <table style="width: 2600px;">
          <colgroup>
            <col style="width: 100px;">
            <col style="width: 200px;">
            <col style="width: 200px;">
            <col style="width: 200px;">
            <col style="width: 200px;">
            <col style="width: 200px;">
            <col style="width: 200px;">
            <col style="width: 200px;">
            <col style="width: 200px;">
            <col style="width: 200px;">
            <col style="width: 200px;">
            <col style="width: 200px;">
            <col style="width: 200px;">
            <col style="width: 100px;">
          </colgroup>
          <thead>
            <tr>
              <th>列1</th>
              <th>列2</th>
              <th>列3</th>
              <th>列4</th>
              <th>列5</th>
              <th>列6</th>
              <th>列7</th>
              <th>列8</th>
              <th>列9</th>
              <th>列10</th>
              <th>列11</th>
              <th>列12</th>
              <th>列13</th>
              <th>列14</th>
            </tr>
          </thead>
          <tbody>
            <tr class="my-tr" v-for="row in items" :key="row.id" :class="`row-${row.index}`">
              <td>{{ row.col1 }}</td>
              <td>{{ row.col2 }}</td>
              <td>{{ row.col3 }}</td>
              <td>{{ row.col4 }}</td>
              <td>{{ row.col5 }}</td>
              <td>{{ row.col6 }}</td>
              <td>{{ row.col7 }}</td>
              <td>{{ row.col8 }}</td>
              <td>{{ row.col9 }}</td>
              <td>{{ row.col10 }}</td>
              <td>{{ row.col11 }}</td>
              <td>{{ row.col12 }}</td>
              <td>{{ row.col13 }}</td>
              <td>{{ row.col14 }}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </vxe-list>
  </div>
</template>

<script lang="ts" setup>
import { reactive, nextTick } from 'vue'
import { VxeUI, VxeListProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  index: number
  col1: string
  col2: string
  col3: string
  col4: string
  col5: string
  col12: string
  col13: string
  col14: string
}

const listOptions = reactive<VxeListProps<RowVO>>({
  height: 600,
  loading: false,
  virtualYConfig: {
    enabled: true,
    gt: 0,
    sItem: '.my-tr'
  },
  data: []
})

const loadList = (size: number) => {
  listOptions.loading = true
  setTimeout(() => {
    const mockList: RowVO[] = []
    for (let i = 0; i < size; i++) {
      mockList.push({
        id: i,
        index: i,
        col1: `row ${i} col1`,
        col2: `row ${i} col2`,
        col3: `row ${i} col3`,
        col4: `row ${i} col4`,
        col5: `row ${i} col5`,
        col12: `row ${i} col12`,
        col13: `row ${i} col13`,
        col14: `row ${i} col14`
      })
    }
    listOptions.data = mockList
    listOptions.loading = false

    const startTime = Date.now()
    nextTick().then(() => {
      VxeUI.modal.message({
        content: `渲染 ${size} 行，用时 ${Date.now() - startTime}毫秒`,
        status: 'info'
      })
    })
  }, 100)
}

loadList(200)
</script>

<style lang="scss" scoped>
.my-table-list {
  border: 1px solid #e8eaec;
  table {
    width: 100%;
    text-align: center;
    border-spacing: 0;
  }
  tr {
    height: 34px;
    &:hover {
      background-color: #f5f7fa;
    }
  }
  th {
    height: 40px;
    background-color: #f8f8f9;
    position: sticky;
    top: 0;
    z-index: 5;
    &:first-child {
      top: 0;
      left: 0;
      z-index: 7;
    }
    &:last-child {
      right: 0;
      border-left: 1px solid #e8eaec;
      z-index: 7;
    }
  }
  td {
    &:first-child {
      position: sticky;
      left: 0;
      z-index: 3;
    }
    &:last-child {
      position: sticky;
      right: 0;
      border-left: 1px solid #e8eaec;
      z-index: 3;
    }
  }
  th,
  td {
    border-bottom: 1px solid #e8eaec;
    border-right: 1px solid #e8eaec;
    background-color: #fff;
  }
}
</style>
