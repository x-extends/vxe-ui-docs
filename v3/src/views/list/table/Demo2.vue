<template>
  <div>
    <p>
      <vxe-button @click="loadList(10)">加载10条</vxe-button>
      <vxe-button @click="loadList(500)">加载500条</vxe-button>
      <vxe-button @click="loadList(10000)">加载1w条</vxe-button>
      <vxe-button @click="loadList(100000)">加载10w条</vxe-button>
      <vxe-button @click="loadList(250000)">加载25w条</vxe-button>
    </p>

    <vxe-list class="my-table-list" height="600" :data="list" :virtual-y-config="{enabled: true, gt: 0, sItem: '.my-tr'}">
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
            <tr class="my-tr" v-for="item in items" :key="item.id" :class="`row-${item.index}`">
              <td>{{ item.col1 }}</td>
              <td>{{ item.col2 }}</td>
              <td>{{ item.col3 }}</td>
              <td>{{ item.col4 }}</td>
              <td>{{ item.col5 }}</td>
              <td>{{ item.col6 }}</td>
              <td>{{ item.col7 }}</td>
              <td>{{ item.col8 }}</td>
              <td>{{ item.col9 }}</td>
              <td>{{ item.col10 }}</td>
              <td>{{ item.col11 }}</td>
              <td>{{ item.col12 }}</td>
              <td>{{ item.col13 }}</td>
              <td>{{ item.col14 }}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </vxe-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

interface ItemVO {
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

// 模拟后台
const mockList: ItemVO[] = []
const getList = (size: number): Promise<ItemVO[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (size > mockList.length) {
        for (let index = mockList.length; index < size; index++) {
          mockList.push({
            id: index,
            index: index,
            col1: `row ${index} col1`,
            col2: `row ${index} col2`,
            col3: `row ${index} col3`,
            col4: `row ${index} col4`,
            col5: `row ${index} col5`,
            col12: `row ${index} col12`,
            col13: `row ${index} col13`,
            col14: `row ${index} col14`
          })
        }
      }
      resolve(mockList.slice(0, size))
    }, 100)
  })
}

export default Vue.extend({
  data () {
    const list: ItemVO[] = []

    return {
      loading: false,
      list
    }
  },
  methods: {
    async loadList (size: number) {
      this.loading = true
      this.list = await getList(size)
      this.loading = false
      const startTime = Date.now()
      await this.$nextTick()
      await VxeUI.modal.message({
        content: `渲染 ${size} 行，用时 ${Date.now() - startTime}毫秒`,
        status: 'info'
      })
    }

  },
  mounted () {
    this.loadList(200)
  }
})
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
    height: 30px;
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
