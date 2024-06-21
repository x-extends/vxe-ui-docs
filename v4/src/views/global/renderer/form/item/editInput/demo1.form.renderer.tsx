// main.js

import { VxeUI } from 'vxe-pc-ui'

// 创建一个输入框渲染器
VxeUI.renderer.add('EditInput', {
  // 项显示模板
  renderFormItemContent (renderOpts, params) {
    const { data, field } = params
    return <vxe-input v-model={ data[field] } clearable></vxe-input>
  }
})
