import { VxeUI } from 'vxe-pc-ui'
import DownTable from './DownTable.vue'

// 创建一个下拉表格渲染器
VxeUI.renderer.add('EditDownTable', {
  // 可编辑激活模板
  renderTableEdit (renderOpts, params) {
    return <DownTable params={ params }></DownTable>
  },
  // 可编辑显示模板
  renderTableCell (renderOpts, params) {
    const { row, column } = params
    return <span>{ row[column.field] }</span>
  }
})
