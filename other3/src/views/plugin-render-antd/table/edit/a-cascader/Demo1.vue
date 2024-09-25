<template>
  <div>
    <vxe-button @click="insertEvent">新增</vxe-button>
    <vxe-button @click="saveEvent">保存</vxe-button>

    <vxe-table
      border
      show-overflow
      keep-source
      ref="tableRef"
      :edit-config="{ trigger: 'click', mode: 'row'}"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" title="Number" width="80"></vxe-column>
      <vxe-column title="Name" field="name" min-width="140" :edit-render="{ name: 'AInput' }"></vxe-column>
      <vxe-column title="级联选择" field="region" width="200" :edit-render="regionEditRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Modal } from 'ant-design-vue'
import type { VxeTableInstance, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  region: number[]
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', region: [] },
      { id: 10002, name: 'Test2', region: [21, 24] }
    ]

    const regionList = [
      {
        label: '北京',
        value: 1,
        children: [
          { value: 3, label: '东城区' },
          { value: 4, label: '西城区' }
        ]
      },
      {
        label: '上海',
        value: 21,
        children: [
          { value: 23, label: '黄浦区' },
          { value: 24, label: '卢湾区' }
        ]
      },
      {
        label: '广东',
        value: 42,
        children: [
          { value: 43, label: '广州市' },
          { value: 67, label: '深圳市' }
        ]
      }
    ]

    const regionEditRender: VxeColumnPropTypes.EditRender = {
      name: 'ACascader',
      props: {
        options: regionList
      }
    }

    return {
      tableData,
      regionList,
      regionEditRender
    }
  },
  methods: {
    async insertEvent  () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const record = {
          flag: false
        }
        const { row: newRow } = await $table.insert(record)
        $table.setEditRow(newRow)
      }
    },
    saveEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()
        if (insertRecords.length || removeRecords.length || updateRecords.length) {
          Modal.success({
            title: '提示',
            content: `insertRecords=${insertRecords.length}; removeRecords=${removeRecords.length}; updateRecords=${updateRecords.length}`
          })
        } else {
          Modal.info({
            title: '提示',
            content: '数据未改动！'
          })
        }
      }
    }
  }
})
</script>
