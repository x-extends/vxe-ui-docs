<template>
  <div>
    <vxe-switch v-model="menuConfig.enabled"></vxe-switch>
    <vxe-table
      border
      show-footer
      ref="tableRef"
      height="400"
      :row-config="{isCurrent: true}"
      :column-config="{isCurrent: true}"
      :data="tableData"
      :menu-config="menuConfig"
      :footer-data="footerData"
      @header-cell-menu="headerCellContextMenuEvent"
      @cell-menu="cellContextMenuEvent"
      @menu-click="contextMenuClickEvent">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="time" title="Time"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeTablePropTypes, VxeTableInstance, VxeTableEvents } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 36, address: 'Guangzhou' },
  { id: 10005, name: 'Test5', role: 'Designer', sex: 'Man', age: 41, address: 'Guangzhou' },
  { id: 10006, name: 'Test6', role: 'PM', sex: 'Man', age: 38, address: 'Shanghai' },
  { id: 10007, name: 'Test7', role: 'Test', sex: 'Women', age: 44, address: 'Guangzhou' }
])

const footerData = ref<VxeTablePropTypes.FooterData>([
  { seq: '合计', age: 135 }
])

const menuConfig = reactive<VxeTablePropTypes.MenuConfig<RowVO>>({
  enabled: true,
  header: {
    options: [
      [
        { code: 'exportAll', name: '导出所有.csv', visible: true, disabled: false }
      ]
    ]
  },
  body: {
    options: [
      [
        { code: 'details', name: '查看详情', prefixConfig: { icon: 'vxe-icon-link' }, visible: true, disabled: false }
      ],
      [
        { code: 'copy', name: '复制（Ctrl+C）', prefixConfig: { icon: 'vxe-icon-copy' }, visible: true, disabled: false },
        { code: 'clear', name: '清除内容', prefixConfig: { icon: 'vxe-icon-delete-fill' }, visible: true, disabled: false }
      ],
      [
        { code: 'remove', name: '删除', visible: true, disabled: false },
        {
          code: 'filter',
          name: '筛选',
          visible: true,
          disabled: false,
          children: [
            { code: 'clearFilter', name: '清除筛选', visible: true, disabled: false },
            { code: 'filterSelect', name: '按所选单元格的值筛选', visible: true, disabled: false }
          ]
        },
        {
          code: 'sort',
          name: '排序',
          visible: true,
          disabled: false,
          children: [
            { code: 'clearSort', name: '清除排序', visible: true, disabled: false },
            { code: 'sortAsc', name: '升序', visible: true, disabled: false },
            { code: 'sortDesc', name: '倒序', visible: true, disabled: false }
          ]
        },
        { code: 'print', name: '打印（Ctrl+P）', disabled: true }
      ]
    ]
  },
  footer: {
    options: [
      [
        { code: 'clearAll', name: '清空数据', visible: true, disabled: false }
      ]
    ]
  },
  visibleMethod ({ options, column }) {
    // 示例：只有 name 列允许操作，清除按钮只能在 age 才显示
    // 显示之前处理按钮的操作权限
    const isDisabled = !column || column.field !== 'name'
    const isVisible = column && column.field === 'age'
    options.forEach(list => {
      list.forEach(item => {
        item.disabled = false
        if (column) {
          if (item.code === 'copy' || item.code === 'remove') {
            item.disabled = isDisabled
          }
          if (item.code === 'details') {
            item.visible = column.field === 'name'
          } else if (item.code === 'clear' || item.code === 'filter') {
            item.visible = isVisible
          }
        } else {
          item.disabled = true
        }
        if (item.children) {
          item.children.forEach(childItem => {
            childItem.disabled = item.disabled
          })
        }
      })
    })
    return true
  }
})

const headerCellContextMenuEvent: VxeTableEvents.HeaderCellMenu<RowVO> = ({ column }) => {
  const $table = tableRef.value
  if ($table) {
    $table.setCurrentColumn(column)
  }
}

const cellContextMenuEvent: VxeTableEvents.CellMenu<RowVO> = ({ row }) => {
  const $table = tableRef.value
  if ($table) {
    $table.setCurrentRow(row)
  }
}

const contextMenuClickEvent: VxeTableEvents.MenuClick<RowVO> = ({ menu }) => {
  VxeUI.modal.message({ content: `点击了 "${menu.name}"`, status: 'info' })
}
</script>
