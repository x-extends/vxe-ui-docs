<template>
  <div>
    <vxe-button @click="insertEvent">新增</vxe-button>
    <vxe-button @click="saveEvent">保存</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #edit_name="{ row }">
        <el-input v-model="row.name"></el-input>
      </template>
      <template #default_name="{ row }">
        <span>{{ row.name }}</span>
      </template>

      <template #edit_region="{ row }">
        <el-cascader v-model="row.region" :options="regionList"></el-cascader>
      </template>
      <template #default_region="{ row }">
        <span>{{ formatRegionLabel(row.region) }}</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MessageBox } from 'element-ui'
import { VxeGridInstance, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  region: number[]
}

interface RegionVO {
  label: string
  value: number
  children?: RegionVO[]
}

export default Vue.extend({
  data () {
    const regionList: RegionVO[] = [
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

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      keepSource: true,
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      editRules: {
        region: [
          { required: true, type: 'array', content: '请输入' }
        ]
      },
      columns: [
        { type: 'checkbox', width: 60 },
        { type: 'seq', title: 'Number', width: 80 },
        { field: 'name', title: 'Name', minWidth: 140, editRender: { autoFocus: true }, slots: { edit: 'edit_name', default: 'default_name' } },
        { field: 'region', title: '级联选择', width: 200, editRender: { autoFocus: true }, slots: { edit: 'edit_region', default: 'default_region' } }
      ],
      data: [
        { id: 10001, name: 'Test1', region: [] },
        { id: 10002, name: 'Test2', region: [21, 24] }
      ]
    }

    return {
      gridOptions,
      regionList
    }
  },
  methods: {
    getLabelByValue (vals: number[], list: RegionVO[], separator = '-') {
      let currentList = list
      const labels = []
      for (let i = 0; i < vals.length; i++) {
        const targetValue = vals[i]
        const found = currentList.find(item => item.value === targetValue)
        if (!found) {
          return ''
        }
        labels.push(found.label)
        if (i < vals.length - 1) {
          if (!found.children) {
            return ''
          }
          currentList = found.children
        }
      }
      return labels.join(separator)
    },
    formatRegionLabel (regionVals: number[]) {
      return this.getLabelByValue(regionVals, this.regionList)
    },
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
