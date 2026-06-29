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
        <table>
          <thead>
            <tr>
              <th>列1</th>
              <th>列2</th>
              <th>列3</th>
              <th>列4</th>
              <th>列5</th>
            </tr>
          </thead>
          <tbody>
            <tr class="my-tr" v-for="row in items" :key="row.id">
              <td>{{ row.col1 }}</td>
              <td>{{ row.col2 }}</td>
              <td>{{ row.col3 }}</td>
              <td>{{ row.col4 }}</td>
              <td>{{ row.col5 }}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </vxe-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeListProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  col1: string
  col2: string
  col3: string
  col4: string
  col5: string
}

export default Vue.extend({
  data () {
    const listOptions: VxeListProps<RowVO> = {
      height: 600,
      loading: false,
      virtualYConfig: {
        enabled: true,
        gt: 0,
        sItem: '.my-tr'
      },
      data: []
    }

    return {
      listOptions
    }
  },
  created () {
    this.loadList(200)
  },
  methods: {
    loadList (size: number) {
      this.listOptions.loading = true
      setTimeout(() => {
        const mockList: RowVO[] = []
        for (let i = 0; i < size; i++) {
          mockList.push({
            id: i,
            col1: `row ${i} col1`,
            col2: `row ${i} col2`,
            col3: `row ${i} col3`,
            col4: `row ${i} col4`,
            col5: `row ${i} col5`
          })
        }
        this.listOptions.data = mockList
        this.listOptions.loading = false

        const startTime = Date.now()
        this.$nextTick().then(() => {
          VxeUI.modal.message({
            content: `渲染 ${size} 行，用时 ${Date.now() - startTime}毫秒`,
            status: 'info'
          })
        })
      }, 100)
    }
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
  }
  th,
  td {
    border-bottom: 1px solid #e8eaec;
    border-right: 1px solid #e8eaec;
  }
}
</style>
