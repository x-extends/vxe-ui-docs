// main.js

import { VxeUI } from 'vxe-pc-ui'
import { getMyWidgetInputConfig } from './myInputWidget'
import MyInputWidgetView from './MyInputWidgetView.vue'
import MyInputWidgetProps from './MyInputWidgetProps.vue'

// 创建表单设计器控件 - 单行输入
VxeUI.renderer.add('MyInputWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getMyWidgetInputConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <MyInputWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <MyInputWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
