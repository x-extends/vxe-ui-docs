<template>
  <div>
    <vxe-button @click="insertEvent">新增</vxe-button>
    <vxe-button @click="saveEvent">保存</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MessageBox } from 'element-ui'
import { VxeGridInstance, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  sex: string
  sexList: string[]
}

export default Vue.extend({
  data () {
    const sexEditRender: VxeColumnPropTypes.EditRender = {
      name: 'ElSelect',
      options: [
        { label: '男', value: '1' },
        { label: '女', value: '0' }
      ]
    }

    const sexListEditRender: VxeColumnPropTypes.EditRender = {
      name: 'ElSelect',
      props: {
        multiple: true
      },
      options: [
        { label: '男', value: '1' },
        { label: '女', value: '0' }
      ]
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      keepSource: true,
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      columns: [
        { type: 'checkbox', width: 60 },
        { type: 'seq', title: 'Number', width: 80 },
        { field: 'name', title: 'Name', minWidth: 140, editRender: { name: 'ElInput' } },
        { field: 'sex', title: '下拉框', width: 200, editRender: sexEditRender },
        { field: 'sexList', title: '下拉框多选', width: 200, editRender: sexListEditRender }
      ],
      data: [
        { id: 10001, name: 'Test1', sex: '1', sexList: [] },
        { id: 10002, name: 'Test2', sex: '', sexList: ['0', '1'] }
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
