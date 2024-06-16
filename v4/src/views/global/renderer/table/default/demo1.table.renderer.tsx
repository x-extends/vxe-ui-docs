import { VxeUI } from 'vxe-pc-ui'

// 创建一个简单的超链接渲染
VxeUI.renderer.add('MyLink', {
  // 默认显示模板
  renderTableDefault (renderOpts, params) {
    const { row, column } = params
    return <a class="my-link" href={row.url} target="_black">{row[column.field]}</a>
  }
})
