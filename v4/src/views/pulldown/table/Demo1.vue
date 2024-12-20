<template>
  <div>
    <vxe-pulldown ref="pulldownRef" popup-class-name="dropdown-table" transfer>
      <template #default>
        <vxe-input v-model="searchName" suffix-icon="vxe-icon-table" placeholder="实现下拉分页表格" @keyup="keyupEvent" @focus="focusEvent"></vxe-input>
      </template>

      <template #dropdown>
        <div class="dropdown-table-body">
          <vxe-grid v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
        </div>
      </template>
    </vxe-pulldown>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridProps, VxeGridListeners } from 'vxe-table'
import { VxePulldownInstance } from 'vxe-pc-ui'

interface RowVO {
  name: string
  role: string
  sex: string
}

const searchName = ref('')

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

const gridOptions = reactive<VxeGridProps<RowVO>>({
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
})

const pulldownRef = ref<VxePulldownInstance>()

const gridEvents: VxeGridListeners<RowVO> = {
  cellClick ({ row }) {
    const $pulldown = pulldownRef.value
    if ($pulldown) {
      searchName.value = row.name
      $pulldown.hidePanel()
    }
  },
  pageChange ({ currentPage, pageSize }) {
    if (gridOptions.pagerConfig) {
      gridOptions.pagerConfig.currentPage = currentPage
      gridOptions.pagerConfig.pageSize = pageSize
    }
    loadList()
  }
}

// 模拟后端接口
const findList = (currentPage = 1, pageSize = 5) => {
  return new Promise<{
    list: RowVO[]
    total: number
  }>(resolve => {
    setTimeout(() => {
      const list = mockList.filter((row) => row.name.indexOf(searchName.value) > -1)
      const limit = (currentPage - 1) * pageSize
      const result = list.slice(limit, limit + pageSize)
      resolve({
        list: result,
        total: list.length
      })
    }, 200)
  })
}

const loadList = () => {
  gridOptions.loading = true
  findList(gridOptions.pagerConfig?.currentPage, gridOptions.pagerConfig?.pageSize).then(({ list, total }) => {
    gridOptions.data = list
    gridOptions.loading = false
    if (gridOptions.pagerConfig) {
      gridOptions.pagerConfig.total = total
    }
  })
}

const focusEvent = () => {
  const $pulldown = pulldownRef.value
  if ($pulldown) {
    $pulldown.showPanel()
  }
}

const keyupEvent = () => {
  loadList()
}

loadList()
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
