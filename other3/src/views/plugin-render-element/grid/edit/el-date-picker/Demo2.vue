<template>
  <div>
    <vxe-button @click="insertEvent">新增</vxe-button>
    <vxe-button @click="saveEvent">保存</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #edit_date1="{ row }">
        <el-date-picker v-model="row.date1" type="date" value-format="yyyy-MM-dd"></el-date-picker>
      </template>

      <template #edit_date2="{ row }">
        <el-date-picker v-model="row.date2" type="datetime" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MessageBox } from 'element-ui'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  date1: string
  date2: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      keepSource: true,
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      editRules: {
        date1: [
          { required: true, content: '请输入' }
        ],
        date2: [
          { required: true, content: '请输入' }
        ]
      },
      columns: [
        { type: 'checkbox', width: 60 },
        { type: 'seq', title: 'Number', width: 80 },
        { field: 'name', title: 'Name', minWidth: 140, editRender: { name: 'ElInput' } },
        { field: 'date1', title: '日期', width: 200, editRender: { autofocus: '.el-input__inner' }, slots: { edit: 'edit_date1' } },
        { field: 'date2', title: '日期带时间', width: 220, editRender: { autofocus: '.el-input__inner' }, slots: { edit: 'edit_date2' } }

      ],
      data: [
        { id: 10001, name: 'Test1', date1: '', date2: '' },
        { id: 10002, name: 'Test2', date1: '2018-01-01', date2: '2018-01-01 10:10:30' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    async insertEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const record = {
          nickname: ''
        }
        const { row: newRow } = await $grid.insert(record)
        $grid.setEditRow(newRow)
      }
    },
    saveEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const { insertRecords, removeRecords, updateRecords } = $grid.getRecordset()
        if (insertRecords.length || removeRecords.length || updateRecords.length) {
          MessageBox.alert(`insertRecords=${insertRecords.length}; removeRecords=${removeRecords.length}; updateRecords=${updateRecords.length}`)
        } else {
          MessageBox.alert('数据未改动！')
        }
      }
    }
  }
})
</script>
