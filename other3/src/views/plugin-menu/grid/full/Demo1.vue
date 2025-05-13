<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      showFooter: true,
      keepSource: true,
      mouseConfig: {
        selected: true
      },
      editConfig: {
        trigger: 'dblclick',
        mode: 'cell',
        showStatus: true
      },
      columns: [
        { field: 'checkbox', type: 'checkbox', width: 50 },
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', editRender: { name: 'input' } },
        { field: 'nickname', title: 'Nickname', editRender: { name: 'input' } },
        { field: 'age', title: 'Age', editRender: { name: 'input' } },
        { field: 'role', title: 'Role', sortable: true, editRender: { name: 'input' } },
        { field: 'address', title: 'Address', sortable: true, editRender: { name: 'input' } }
      ],
      data: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
      ],
      menuConfig: {
        header: {
          options: [
            [
              { code: 'COPY_TITLE', name: '复制列标题' },
              { code: 'HIDDEN_COLUMN', name: '隐藏列' },
              { code: 'CLEAR_SORT', name: '清除排序' },
              { code: 'RESET_COLUMN', name: '重置个性化列' }
            ]
          ]
        },
        body: {
          options: [
            [
              { code: 'CLEAR_CELL', name: '清除值' },
              { code: 'REVERT_CELL', name: '还原值' }
            ],
            [
              {
                name: '插入单行数据',
                children: [
                  { code: 'INSERT_AT_ROW', name: '插入单行' },
                  { code: 'INSERT_NEXT_AT_ROW', name: '插入单行 next' },
                  { code: 'INSERT_AT_EDIT_ROW', name: '插入单行并编辑' },
                  { code: 'INSERT_NEXT_AT_EDIT_ROW', name: '插入单行 next 并编辑' }
                ]
              },
              {
                name: '插入多行数据',
                children: [
                  { code: 'BATCH_INSERT_AT_ROW', name: '插入多行' },
                  { code: 'BATCH_INSERT_NEXT_AT_ROW', name: '插入多行 next' },
                  { code: 'BATCH_INSERT_AT_EDIT_ROW', name: '插入多行并编辑' },
                  { code: 'BATCH_INSERT_NEXT_AT_EDIT_ROW', name: '插入多行 next 并编辑 ' }
                ]
              }
            ],
            [
              {
                name: '删除数据',
                children: [
                  { code: 'DELETE_ROW', name: '删除行' },
                  { code: 'DELETE_CHECKBOX_ROW', name: '删除复选框勾选行' }
                ]
              }
            ],
            [
              {
                name: '排序',
                children: [
                  { code: 'SORT_ASC', name: '升序' },
                  { code: 'SORT_DESC', name: '倒序' },
                  { code: 'CLEAR_SORT', name: '清除当前列排序' },
                  { code: 'CLEAR_ALL_SORT', name: '清除所有列排序' }
                ]
              }
            ],
            [
              {
                name: '打印',
                prefixConfig: {
                  icon: 'vxe-icon-print'
                },
                children: [
                  { code: 'PRINT_CHECKBOX_ROW', name: '打印选中' },
                  { code: 'PRINT_ALL', name: '打印全部', suffixConfig: { content: 'Ctrl+P' } }
                ]
              }
            ],
            [
              { code: 'EXPORT_ROW', name: '导出当前行.csv', prefixConfig: { icon: 'vxe-icon-download' } },
              { code: 'EXPORT_ALL', name: '导出全部数据.csv', prefixConfig: { icon: 'vxe-icon-download' } }
            ]
          ]
        },
        footer: {
          options: [
            [
              { code: 'EXPORT_ALL', name: '导出全部数据.csv', prefixConfig: { icon: 'vxe-icon-download' } }
            ]
          ]
        }
      },
      footerData: [
        { checkbox: '合计', age: 135 }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
