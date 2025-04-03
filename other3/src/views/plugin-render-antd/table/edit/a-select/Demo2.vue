<template>
  <div>
    <vxe-button @click="insertEvent">新增</vxe-button>
    <vxe-button @click="saveEvent">保存</vxe-button>

    <vxe-table
      border
      show-overflow
      keep-source
      ref="tableRef"
      :edit-config="{ trigger: 'click', mode: 'row', showStatus: true}"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" title="Number" width="80"></vxe-column>
      <vxe-column title="Name" field="name" min-width="140" :edit-render="{ autofocus: '.ant-input' }">
        <template #edit="{ row }">
          <a-input v-model="row.name"></a-input>
        </template>
      </vxe-column>
      <vxe-column title="下拉框" field="sex" width="200" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatSexLabel([row.sex]) }}</span>
        </template>
        <template #edit="{ row }">
          <a-select v-model="row.sex" :options="sexOptions"></a-select>
        </template>
      </vxe-column>
      <vxe-column title="下拉框多选" field="sexList" width="200" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatSexLabel(row.sexList) }}</span>
        </template>
        <template #edit="{ row }">
          <a-select v-model="row.sexList" :options="sexOptions" mode="multiple"></a-select>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Modal } from 'ant-design-vue'
import type { VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  sex: string
  sexList: string[]
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', sex: '1', sexList: [] },
      { id: 10002, name: 'Test2', sex: '', sexList: ['0', '1'] }
    ]

    const sexOptions = [
      { label: '男', value: '1' },
      { label: '女', value: '0' }
    ]

    return {
      tableData,
      sexOptions
    }
  },
  methods: {
    formatSexLabel (sexList: string[]) {
      if (sexList) {
        return sexList.map(sex => {
          const item = this.sexOptions.find(item => item.value === sex)
          return item ? item.label : sex
        }).join(',')
      }
      return ''
    },
    async insertEvent () {
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
