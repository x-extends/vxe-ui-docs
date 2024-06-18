import { VxeUI } from 'vxe-pc-ui'

// 创建一个附件上传渲染器
VxeUI.renderer.add('EditUpload', {
  // 项显示模板
  renderFormItemContent (renderOpts, params) {
    const { data, field } = params
    return <vxe-upload v-model={ data[field] }></vxe-upload>
  }
})
