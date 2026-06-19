import { NavVO } from './nav'

export const modalNavConfig: NavVO = {
  i18nKey: 'app.aside.menu.modalTitle',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'modal' } } },
    {
      i18nKey: 'app.aside.menu.modalMessageTitle',
      children: [
        { title: '全局调用', routerLink: { name: 'ComponentModalMessageGlobal' } },
        { title: '唯一', routerLink: { name: 'ComponentModalMessageMultiple' } },
        { title: '状态提示', routerLink: { name: 'ComponentModalMessageStatus' } },
        { title: '显示HTML标签', routerLink: { name: 'ComponentModalMessageHtml' } },
        { title: '自定义插槽模板', routerLink: { name: 'ComponentModalMessageTemplate' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.modalNotificationTitle',
      children: [
        { title: '全局调用', routerLink: { name: 'ComponentModalNotificationGlobal' } },
        { title: '唯一', routerLink: { name: 'ComponentModalNotificationMultiple' } },
        { title: '状态提示', routerLink: { name: 'ComponentModalNotificationStatus' } },
        { title: '显示HTML标签', routerLink: { name: 'ComponentModalNotificationHtml' } },
        { title: '带操作按钮', routerLink: { name: 'ComponentModalNotificationFooter' } },
        { title: '自定义插槽模板', routerLink: { name: 'ComponentModalNotificationTemplate' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.modalAlertTitle',
      children: [
        { title: '全局调用', routerLink: { name: 'ComponentModalAlertGlobal' } },
        { title: '显示HTML标签', routerLink: { name: 'ComponentModalAlertHtml' } },
        { title: '弹出多个', routerLink: { name: 'ComponentModalAlertMultiple' } },
        { title: '禁止拖动', routerLink: { name: 'ComponentModalAlertDraggable' } },
        { title: '按 Esc 键可关闭', routerLink: { name: 'ComponentModalAlertEscClosable' } },
        { title: '状态提示', routerLink: { name: 'ComponentModalAlertStatus' } },
        { title: '手动关闭', routerLink: { name: 'ComponentModalAlertManual' } },
        { title: '自定义插槽模板', routerLink: { name: 'ComponentModalAlertTemplate' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.modalConfirmTitle',
      children: [
        { title: '全局调用', routerLink: { name: 'ComponentModalConfirmGlobal' } },
        { title: '显示HTML标签', routerLink: { name: 'ComponentModalConfirmHtml' } },
        { title: '弹出多个', routerLink: { name: 'ComponentModalConfirmMultiple' } },
        { title: '禁止拖动', routerLink: { name: 'ComponentModalConfirmDraggable' } },
        { title: '按 Esc 键可关闭', routerLink: { name: 'ComponentModalConfirmEscClosable' } },
        { title: '手动关闭', routerLink: { name: 'ComponentModalConfirmManual' } },
        { title: '自定义插槽模板', routerLink: { name: 'ComponentModalConfirmTemplate' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.modalModalTitle',
      children: [
        { title: '全局调用', routerLink: { name: 'ComponentModalModalGlobal' } },
        { title: '弹窗', routerLink: { name: 'ComponentModalModalBase' } },
        { title: '尺寸大小', routerLink: { name: 'ComponentModalModalSize' } },
        { title: '自定义模板', routerLink: { name: 'ComponentModalModalTemplateFooter' } },
        { title: '完整插槽模板', routerLink: { name: 'ComponentModalModalTemplateLayout' } },
        { title: '内边距', routerLink: { name: 'ComponentModalModalPadding' } },
        { title: '加载中', routerLink: { name: 'ComponentModalModalLoading' } },
        { title: '预加载', routerLink: { name: 'ComponentModalModalPreload' } },
        { title: '显示HTML标签', routerLink: { name: 'ComponentModalModalHtml' } },
        { title: '遮罩层', routerLink: { name: 'ComponentModalModalMask' } },
        { title: '锁页面滚动条', routerLink: { name: 'ComponentModalModalLockScroll' } },
        { title: '锁定页面操作', routerLink: { name: 'ComponentModalModalLockView' } },
        { title: '拖动窗口', routerLink: { name: 'ComponentModalModalDraggable' } },
        { title: '同时弹出多个窗口', routerLink: { name: 'ComponentModalModalMultiple' } },
        { title: '按 Esc 键可关闭', routerLink: { name: 'ComponentModalModalEscClosable' } },
        { title: '拦截关闭', routerLink: { name: 'ComponentModalModalBeforeHide' } },
        { title: '操作按钮', routerLink: { name: 'ComponentModalModalButton' } },
        { title: '点击确认按钮不可关闭', routerLink: { name: 'ComponentModalModalConfirmClosable' } },
        { title: '点击取消按钮不可关闭', routerLink: { name: 'ComponentModalModalCancelClosable' } },
        { title: '拖动调整宽高', routerLink: { name: 'ComponentModalModalResize' } },
        { title: '全屏展示', routerLink: { name: 'ComponentModalModalFullscreen' } },
        { title: '窗口最大化', routerLink: { name: 'ComponentModalModalMaximize' } },
        { title: '窗口最小化', routerLink: { name: 'ComponentModalModalMinimize' } },
        { title: '最大化与最小化', routerLink: { name: 'ComponentModalModalZoom' } },
        { title: '自定义窗口最小化的排列方式', routerLink: { name: 'ComponentModalModalMinimizeLayout' } },
        { title: '保留状态', routerLink: { name: 'ComponentModalModalRemember' } },
        { title: '记忆功能', routerLink: { name: 'ComponentModalModalStorage' } },
        { title: '嵌入 iframe', routerLink: { name: 'ComponentModalModalIframe' } },
        { title: '手动操作', routerLink: { name: 'ComponentModalModalManual' } },
        { title: '完整功能', routerLink: { name: 'ComponentModalModalFull' } }
      ]
    },
    {
      title: '功能示例',
      children: [
        { title: '弹窗与表单', routerLink: { name: 'ComponentModalModalOtherForm' } },
        { title: '弹窗与表格', routerLink: { name: 'ComponentModalModalOtherTable' } },
        { title: '弹窗中实现左边树和右边表格', routerLink: { name: 'ComponentModalModalOtherLeftRight' } },
        { title: '弹窗中展示多表格', routerLink: { name: 'ComponentModalModalOtherSplitTable' } }
      ]
    }
  ]
}
