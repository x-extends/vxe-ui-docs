import { VxeUI } from 'vxe-pc-ui'

// 创建一个超链接渲染器
VxeUI.renderer.add('MyLink', {
  // 默认显示模板
  renderTableDefault (renderOpts, params) {
    const { row, column } = params
    return <vxe-link href={row.url} status="primary" target="_black">{row[column.field]}</vxe-link>
  }
})
