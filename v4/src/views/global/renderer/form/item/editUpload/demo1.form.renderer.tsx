import { VxeUI } from 'vxe-pc-ui'
import EditUploadFile from './EditUploadFile.vue'

// 创建一个附件上传渲染器
VxeUI.renderer.add('EditUpload', {
  // 项显示模板
  renderFormItemContent (renderOpts, params) {
    return <EditUploadFile params={ params } />
  }
})
