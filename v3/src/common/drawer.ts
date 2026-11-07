import { NavVO } from './nav'

export const drawerNavConfig: NavVO = {
  // 抽屉
  i18nKey: 'app.aside.menu.feedbackDrawerTitle',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'drawer' } } },
    // 尺寸
    { i18nKey: 'app.aside.menu.feedbackDrawerSize', routerLink: { name: 'ComponentDrawerSize' } },
    // 基础用法
    { i18nKey: 'app.aside.menu.feedbackDrawerBase', routerLink: { name: 'ComponentDrawerBase' } },
    // HTML 内容
    { i18nKey: 'app.aside.menu.feedbackDrawerHtml', routerLink: { name: 'ComponentDrawerHtml' } },
    // 宽高
    { i18nKey: 'app.aside.menu.feedbackDrawerWH', routerLink: { name: 'ComponentDrawerWH' } },
    // 边框
    { i18nKey: 'app.aside.menu.feedbackDrawerBorder', routerLink: { name: 'ComponentDrawerBorder' } },
    // 标题背景
    { i18nKey: 'app.aside.menu.feedbackDrawerTitleBg', routerLink: { name: 'ComponentDrawerTitleBg' } },
    // 内边距
    { i18nKey: 'app.aside.menu.feedbackDrawerPadding', routerLink: { name: 'ComponentDrawerPadding' } },
    // 加载中
    { i18nKey: 'app.aside.menu.feedbackDrawerLoading', routerLink: { name: 'ComponentDrawerLoading' } },
    // 预加载
    { i18nKey: 'app.aside.menu.feedbackDrawerPreload', routerLink: { name: 'ComponentDrawerDreload' } },
    // 点击遮罩关闭
    { i18nKey: 'app.aside.menu.feedbackDrawerMaskClosable', routerLink: { name: 'ComponentDrawerMaskClosable' } },
    // 按钮
    { i18nKey: 'app.aside.menu.feedbackDrawerButton', routerLink: { name: 'ComponentDrawerButton' } },
    // 确认按钮关闭
    { i18nKey: 'app.aside.menu.feedbackDrawerConfirmClosable', routerLink: { name: 'ComponentDrawerConfirmClosable' } },
    // 取消按钮关闭
    { i18nKey: 'app.aside.menu.feedbackDrawerCancelClosable', routerLink: { name: 'ComponentDrawerCancelClosable' } },
    // 多层嵌套
    { i18nKey: 'app.aside.menu.feedbackDrawerMultiple', routerLink: { name: 'ComponentDrawerMultiple' } },
    // ESC 调整大小
    { i18nKey: 'app.aside.menu.feedbackDrawerEscResize', routerLink: { name: 'ComponentDrawerEscResize' } },
    // ESC 关闭
    { i18nKey: 'app.aside.menu.feedbackDrawerEscClosable', routerLink: { name: 'ComponentDrawerEscClosable' } },
    // 关闭前回调
    { i18nKey: 'app.aside.menu.feedbackDrawerBeforeHide', routerLink: { name: 'ComponentDrawerBeforeHide' } },
    // 自定义模板
    { i18nKey: 'app.aside.menu.feedbackDrawerCustomTemplate', routerLink: { name: 'ComponentDrawerTemplateFooter' } },
    // 全屏插槽模板
    { i18nKey: 'app.aside.menu.feedbackDrawerFullSlotTemplate', routerLink: { name: 'ComponentDrawerTemplateLayout' } },
    // 内部调用
    { i18nKey: 'app.aside.menu.feedbackDrawerWithin', routerLink: { name: 'ComponentDrawerWithin' } },
    // iframe 嵌入
    { i18nKey: 'app.aside.menu.feedbackDrawerIframe', routerLink: { name: 'ComponentDrawerIframe' } },
    {
      // 虚拟滚动条
      i18nKey: 'app.aside.menu.feedbackDrawerVirtualScrollbar',
      children: [
        // 启用滚动条
        { i18nKey: 'app.aside.menu.feedbackDrawerUseScrollbar', routerLink: { name: 'ComponentDrawerUseScrollbarScrollbar' } }
      ]
    }
  ]
}
