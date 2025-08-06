<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>

    <vxe-modal v-model="showPopup" v-bind="modalOptions" @show="showEvent">
      <template #default>
        <vxe-grid ref="gridRef" v-bind="gridOptions" @page-change="pageChangeEvent">
          <template #toolbarButtons>
            <vxe-button status="primary" icon="vxe-icon-add" @click="addEvent">新增</vxe-button>
            <vxe-button status="success" icon="vxe-icon-save" @click="saveEvent">保存</vxe-button>
          </template>

          <template #action="{ row }">
            <vxe-button mode="text" status="error" icon="vxe-icon-delete" @click="removeRow(row)"></vxe-button>
          </template>
        </vxe-grid>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeModalProps } from 'vxe-pc-ui'
import { VxeGridInstance, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number | null
  address: string
}

export default Vue.extend({
  data () {
    const showPopup = false
    const modalOptions: VxeModalProps = {
      title: '在弹窗中使用表格',
      width: 800,
      height: 600,
      escClosable: true,
      resize: true,
      showMaximize: true
    }

    const sexEditRender: VxeColumnPropTypes.EditRender = {
      name: 'VxeSelect',
      options: [
        { label: '女', value: 'Women' },
        { label: '男', value: 'Man' }
      ]
    }

    const pagerConfig = {
      currentPage: 1,
      pageSize: 20,
      total: 0
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      loading: false,
      keepSource: true,
      height: '100%',
      columnConfig: {
        resizable: true
      },
      editConfig: {
        mode: 'cell',
        trigger: 'click',
        showStatus: true
      },
      editRules: {
        name: [
          { required: true, message: '名称必填' }
        ],
        role: [
          { required: true, message: '角色必填' }
        ],
        sex: [
          { required: true, message: '性别必选' }
        ],
        age: [
          { required: true, message: '年龄必填' },
          { type: 'number', min: 18, max: 46, message: '年龄范围18~46' }
        ]
      },
      pagerConfig: pagerConfig,
      toolbarConfig: {
        custom: true,
        refresh: true,
        refreshOptions: {
          queryMethod: () => {
            return (this as any).loadList()
          }
        },
        slots: {
          buttons: 'toolbarButtons'
        }
      },
      columns: [
        { type: 'seq', width: 70, fixed: 'left' },
        { field: 'name', title: 'Name', minWidth: 200, editRender: { name: 'VxeInput' } },
        { field: 'role', title: 'Role', minWidth: 180, editRender: { name: 'VxeInput' } },
        { field: 'age', title: 'Age', width: 100, editRender: { name: 'VxeNumberInput', props: { type: 'integer' } } },
        { field: 'sex', title: 'Sex', width: 100, editRender: sexEditRender },
        { field: 'action', title: '操作', fixed: 'right', width: 100, slots: { default: 'action' } }
      ],
      data: []
    }

    return {
      showPopup,
      modalOptions,
      sexEditRender,
      pagerConfig,
      gridOptions
    }
  },
  methods: {
    showEvent () {
      this.loadList()
    },
    pageChangeEvent ({ currentPage, pageSize }) {
      this.pagerConfig.currentPage = currentPage
      this.pagerConfig.pageSize = pageSize
      this.loadList()
    },
    async addEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const record = {
          name: `Name${Date.now()}`
        }
        const { row: newRow } = await $grid.insert(record)
        $grid.setEditCell(newRow, 'name')
      }
    },
    removeRow (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.remove(row)
      }
    },
    async saveEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const errMaps = await $grid.validate(true)
        if (!errMaps) {
          const { insertRecords, removeRecords, updateRecords } = $grid.getRecordset()
          console.log(`新增=${insertRecords.length}; 删除=${removeRecords.length}; 修改=${updateRecords.length}`)
          console.log('保存成功')
        }
      }
    },
    loadList () {
      // 模拟后端接口
      this.gridOptions.loading = true
      setTimeout(() => {
        const tableData: RowVO[] = [
          { id: 10001, name: 'Test1', role: '', sex: 'Man', age: 28, address: 'test abc' },
          { id: 10002, name: 'Test2', role: 'Test', sex: '', age: null, address: 'Guangzhou' },
          { id: 10003, name: '', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
          { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
          { id: 10005, name: 'Test5', role: '', sex: 'Women', age: 30, address: 'Shanghai' },
          { id: 10006, name: '', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
          { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
          { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' },
          { id: 10009, name: 'Test9', role: 'Test', sex: 'Man', age: null, address: 'test abc' },
          { id: 10010, name: 'Test10', role: 'Develop', sex: 'Man', age: 38, address: 'test abc' },
          { id: 10011, name: 'Test11', role: 'Test', sex: 'Women', age: 29, address: 'test abc' },
          { id: 10012, name: '', role: '', sex: 'Man', age: 27, address: 'test abc' },
          { id: 10013, name: 'Test13', role: 'Test', sex: 'Women', age: 24, address: 'test abc' },
          { id: 10014, name: 'Test14', role: 'Develop', sex: 'Man', age: 34, address: 'test abc' },
          { id: 10015, name: 'Test15', role: 'Test', sex: 'Man', age: 21, address: 'test abc' },
          { id: 10016, name: 'Test16', role: 'Develop', sex: 'Women', age: 20, address: 'test abc' },
          { id: 10017, name: 'Test17', role: 'Test', sex: 'Man', age: 31, address: 'test abc' },
          { id: 10018, name: 'Test18', role: '', sex: 'Women', age: 32, address: 'test abc' },
          { id: 10019, name: 'Test19', role: 'Test', sex: '', age: null, address: 'test abc' },
          { id: 10020, name: 'Test20', role: 'Develop', sex: 'Man', age: 41, address: 'test abc' }
        ]
        this.gridOptions.loading = false
        this.gridOptions.data = tableData.slice((this.pagerConfig.currentPage - 1) * this.pagerConfig.pageSize, this.pagerConfig.currentPage * this.pagerConfig.pageSize)
        this.pagerConfig.total = tableData.length
      }, 500)
    }
  }
})
</script>
