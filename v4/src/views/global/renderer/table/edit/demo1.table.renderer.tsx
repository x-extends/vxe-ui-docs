import { VxeUI } from 'vxe-pc-ui'

// 创建一个简单输入框渲染
VxeUI.renderer.add('MyInput', {
  // 可编辑激活模板
  renderTableEdit (renderOpts, params) {
    const { row, column } = params
    return <input class="my-cell" type="text" v-model={ row[column.field] } />
  },
  // 可编辑显示模板
  renderTableCell (renderOpts, params) {
    const { row, column } = params
    return <span>{ row[column.field] }</span>
  }
})
