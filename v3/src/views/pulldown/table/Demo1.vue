<template>
  <div>
    <vxe-pulldown ref="pulldownRef" popup-class-name="dropdown-table" transfer>
      <template #default>
        <vxe-input v-model="searchName" suffix-icon="vxe-icon-table" placeholder="实现下拉分页表格" @keyup="keyupEvent" @focus="focusEvent"></vxe-input>
      </template>

      <template #dropdown>
        <div class="dropdown-table-body">
          <vxe-grid
            v-bind="gridOptions"
            @cell-click="cellClickEvent"
            @page-change="pageChangeEvent">
          </vxe-grid>
        </div>
      </template>
    </vxe-pulldown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'
import { VxePulldownInstance } from 'vxe-pc-ui'

interface RowVO {
  name: string
  role: string
  sex: string
}

export default Vue.extend({
  data () {
    const mockList: RowVO[] = [
      { name: 'Test1', role: '前端', sex: '男' },
      { name: 'Test2', role: '后端', sex: '女' },
      { name: 'Test3', role: '测试', sex: '男' },
      { name: 'Test43', role: '设计师', sex: '女' },
      { name: 'Test512', role: '前端', sex: '男' },
      { name: 'Test61', role: '前端', sex: '男' },
      { name: 'Test71', role: '设计师', sex: '女' },
      { name: 'Test58', role: '前端', sex: '男' },
      { name: 'Test77', role: '后端', sex: '女' },
      { name: 'Test916', role: '前端', sex: '男' },
      { name: 'Test28', role: '后端', sex: '女' },
      { name: 'Test121', role: '前端', sex: '男' },
      { name: 'Test834', role: '测试', sex: '女' },
      { name: 'Test316', role: '前端', sex: '女' },
      { name: 'Test97', role: '测试', sex: '男' },
      { name: 'Test41', role: '前端', sex: '女' },
      { name: 'Test27', role: '测试', sex: '男' },
      { name: 'Test3218', role: '测试', sex: '女' }
    ]

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      autoResize: true,
      loading: false,
      height: '100%',
      rowConfig: {
        isHover: true
      },
      pagerConfig: {
        total: 0,
        currentPage: 1,
        pageSize: 5,
        pageSizes: [5, 10, 20]
      },
      columns: [
        { field: 'name', title: 'Name' },
        { field: 'role', title: 'Role' },
        { field: 'sex', title: 'Sex' }
      ],
      data: []
    }

    return {
      searchName: '',
      mockList,
      gridOptions
    }
  },
  methods: {
    // 模拟后端接口
    findList  (currentPage = 1, pageSize = 5) {
      return new Promise<{
    list: RowVO[]
    total: number
  }>(resolve => {
    setTimeout(() => {
      const list = this.mockList.filter((row) => row.name.indexOf(this.searchName) > -1)
      const limit = (currentPage - 1) * pageSize
      const result = list.slice(limit, limit + pageSize)
      resolve({
        list: result,
        total: list.length
      })
    }, 200)
  })
    },
    loadList  () {
      this.gridOptions.loading = true
      this.findList(this.gridOptions.pagerConfig?.currentPage, this.gridOptions.pagerConfig?.pageSize).then(({ list, total }) => {
        this.gridOptions.data = list
        this.gridOptions.loading = false
        if (this.gridOptions.pagerConfig) {
          this.gridOptions.pagerConfig.total = total
        }
      })
    },
    focusEvent  () {
      const $pulldown = this.$refs.pulldownRef as VxePulldownInstance
      if ($pulldown) {
        $pulldown.showPanel()
      }
    },
    keyupEvent () {
      this.loadList()
    },
    cellClickEvent ({ row }) {
      const $pulldown = this.$refs.pulldownRef as VxePulldownInstance
      if ($pulldown) {
        this.searchName = row.name
        $pulldown.hidePanel()
      }
    },
    pageChangeEvent ({ currentPage, pageSize }) {
      if (this.gridOptions.pagerConfig) {
        this.gridOptions.pagerConfig.currentPage = currentPage
        this.gridOptions.pagerConfig.pageSize = pageSize
      }
      this.loadList()
    }
  },
  created () {
    this.loadList()
  }
})
</script>

<style lang="scss">
.dropdown-table {
  background-color: #fff;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
  .dropdown-table-body {
    width: 600px;
    height: 300px;
  }

  .dropdown-table-footer {
    border-top: 1px solid #e8eaec;
  }
}
</style>
