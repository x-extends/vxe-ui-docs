import { NavVO } from './nav'

export const modalNavConfig: NavVO = {
  i18nKey: 'app.aside.menu.modalTitle',
  icon: 'vxe-icon-modal',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'modal' } } },
    {
      i18nKey: 'app.aside.menu.modalMessageTitle',
      children: [
        { i18nKey: 'app.aside.menu.modalGlobalInvoke', routerLink: { name: 'ComponentModalMessageGlobal' } },
        { i18nKey: 'app.aside.menu.modalUnique', routerLink: { name: 'ComponentModalMessageMultiple' } },
        { i18nKey: 'app.aside.menu.modalStatusTip', routerLink: { name: 'ComponentModalMessageStatus' } },
        { i18nKey: 'app.aside.menu.modalHtml', routerLink: { name: 'ComponentModalMessageHtml' } },
        { i18nKey: 'app.aside.menu.modalCustomSlotTemplate', routerLink: { name: 'ComponentModalMessageTemplate' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.modalNotificationTitle',
      children: [
        { i18nKey: 'app.aside.menu.modalGlobalInvoke', routerLink: { name: 'ComponentModalNotificationGlobal' } },
        { i18nKey: 'app.aside.menu.modalUnique', routerLink: { name: 'ComponentModalNotificationMultiple' } },
        { i18nKey: 'app.aside.menu.modalStatusTip', routerLink: { name: 'ComponentModalNotificationStatus' } },
        { i18nKey: 'app.aside.menu.modalHtml', routerLink: { name: 'ComponentModalNotificationHtml' } },
        { i18nKey: 'app.aside.menu.modalWithActionButtons', routerLink: { name: 'ComponentModalNotificationFooter' } },
        { i18nKey: 'app.aside.menu.modalCustomSlotTemplate', routerLink: { name: 'ComponentModalNotificationTemplate' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.modalAlertTitle',
      children: [
        { i18nKey: 'app.aside.menu.modalGlobalInvoke', routerLink: { name: 'ComponentModalAlertGlobal' } },
        { i18nKey: 'app.aside.menu.modalHtml', routerLink: { name: 'ComponentModalAlertHtml' } },
        { i18nKey: 'app.aside.menu.modalMultiplePopup', routerLink: { name: 'ComponentModalAlertMultiple' } },
        { i18nKey: 'app.aside.menu.modalDraggableDisabled', routerLink: { name: 'ComponentModalAlertDraggable' } },
        { i18nKey: 'app.aside.menu.modalEscClosable', routerLink: { name: 'ComponentModalAlertEscClosable' } },
        { i18nKey: 'app.aside.menu.modalStatusTip', routerLink: { name: 'ComponentModalAlertStatus' } },
        { i18nKey: 'app.aside.menu.modalManualClose', routerLink: { name: 'ComponentModalAlertManual' } },
        { i18nKey: 'app.aside.menu.modalCustomSlotTemplate', routerLink: { name: 'ComponentModalAlertTemplate' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.modalConfirmTitle',
      children: [
        { i18nKey: 'app.aside.menu.modalGlobalInvoke', routerLink: { name: 'ComponentModalConfirmGlobal' } },
        { i18nKey: 'app.aside.menu.modalLoading', routerLink: { name: 'ComponentModalConfirmLoading' } },
        { i18nKey: 'app.aside.menu.modalHtml', routerLink: { name: 'ComponentModalConfirmHtml' } },
        { i18nKey: 'app.aside.menu.modalMultiplePopup', routerLink: { name: 'ComponentModalConfirmMultiple' } },
        { i18nKey: 'app.aside.menu.modalDraggableDisabled', routerLink: { name: 'ComponentModalConfirmDraggable' } },
        { i18nKey: 'app.aside.menu.modalEscClosable', routerLink: { name: 'ComponentModalConfirmEscClosable' } },
        { i18nKey: 'app.aside.menu.modalManualClose', routerLink: { name: 'ComponentModalConfirmManual' } },
        { i18nKey: 'app.aside.menu.modalCustomSlotTemplate', routerLink: { name: 'ComponentModalConfirmTemplate' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.modalModalTitle',
      children: [
        { i18nKey: 'app.aside.menu.modalGlobalInvoke', routerLink: { name: 'ComponentModalModalGlobal' } },
        { i18nKey: 'app.aside.menu.modalDialog', routerLink: { name: 'ComponentModalModalBase' } },
        { i18nKey: 'app.aside.menu.modalSize', routerLink: { name: 'ComponentModalModalSize' } },
        { i18nKey: 'app.aside.menu.modalCustomTemplate', routerLink: { name: 'ComponentModalModalTemplateFooter' } },
        { i18nKey: 'app.aside.menu.modalFullSlotTemplate', routerLink: { name: 'ComponentModalModalTemplateLayout' } },
        { i18nKey: 'app.aside.menu.modalBorder', routerLink: { name: 'ComponentModalModalBorder' } },
        { i18nKey: 'app.aside.menu.modalTitleBg', routerLink: { name: 'ComponentModalModalTitleBg' } },
        { i18nKey: 'app.aside.menu.modalPadding', routerLink: { name: 'ComponentModalModalPadding' } },
        { i18nKey: 'app.aside.menu.modalLoading', routerLink: { name: 'ComponentModalModalLoading' } },
        { i18nKey: 'app.aside.menu.modalPreload', routerLink: { name: 'ComponentModalModalPreload' } },
        { i18nKey: 'app.aside.menu.modalHtml', routerLink: { name: 'ComponentModalModalHtml' } },
        { i18nKey: 'app.aside.menu.modalMask', routerLink: { name: 'ComponentModalModalMask' } },
        { i18nKey: 'app.aside.menu.modalLockScroll', routerLink: { name: 'ComponentModalModalLockScroll' } },
        { i18nKey: 'app.aside.menu.modalLockView', routerLink: { name: 'ComponentModalModalLockView' } },
        { i18nKey: 'app.aside.menu.modalDraggable', routerLink: { name: 'ComponentModalModalDraggable' } },
        { i18nKey: 'app.aside.menu.modalMultipleWindows', routerLink: { name: 'ComponentModalModalMultiple' } },
        { i18nKey: 'app.aside.menu.modalEscClosable', routerLink: { name: 'ComponentModalModalEscClosable' } },
        { i18nKey: 'app.aside.menu.modalBeforeHide', routerLink: { name: 'ComponentModalModalBeforeHide' } },
        { i18nKey: 'app.aside.menu.modalButton', routerLink: { name: 'ComponentModalModalButton' } },
        { i18nKey: 'app.aside.menu.modalConfirmClosable', routerLink: { name: 'ComponentModalModalConfirmClosable' } },
        { i18nKey: 'app.aside.menu.modalCancelClosable', routerLink: { name: 'ComponentModalModalCancelClosable' } },
        { i18nKey: 'app.aside.menu.modalResize', routerLink: { name: 'ComponentModalModalResize' } },
        { i18nKey: 'app.aside.menu.modalFullscreen', routerLink: { name: 'ComponentModalModalFullscreen' } },
        { i18nKey: 'app.aside.menu.modalMaximize', routerLink: { name: 'ComponentModalModalMaximize' } },
        { i18nKey: 'app.aside.menu.modalMinimize', routerLink: { name: 'ComponentModalModalMinimize' } },
        { i18nKey: 'app.aside.menu.modalZoom', routerLink: { name: 'ComponentModalModalZoom' } },
        { i18nKey: 'app.aside.menu.modalMinimizeLayout', routerLink: { name: 'ComponentModalModalMinimizeLayout' } },
        { i18nKey: 'app.aside.menu.modalRemember', routerLink: { name: 'ComponentModalModalRemember' } },
        { i18nKey: 'app.aside.menu.modalStorage', routerLink: { name: 'ComponentModalModalStorage' } },
        { i18nKey: 'app.aside.menu.modalWithin', routerLink: { name: 'ComponentModalModalWithin' } },
        { i18nKey: 'app.aside.menu.modalIframe', routerLink: { name: 'ComponentModalModalIframe' } },
        { i18nKey: 'app.aside.menu.modalManual', routerLink: { name: 'ComponentModalModalManual' } },
        { i18nKey: 'app.aside.menu.modalFull', routerLink: { name: 'ComponentModalModalFull' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.modalScrollbar',
      children: [
        {
          i18nKey: 'app.aside.menu.modalNativeScrollbar',
          children: [
            { i18nKey: 'app.aside.menu.modalUseScrollbar', routerLink: { name: 'ComponentModalModalScrollbarNativeScrollbar' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.modalVirtualScrollbar',
          children: [
            { i18nKey: 'app.aside.menu.modalUseScrollbar', routerLink: { name: 'ComponentModalModalScrollbarUseScrollbarScrollbar' } }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.modalFeatureExamples',
      children: [
        { i18nKey: 'app.aside.menu.modalWithForm', routerLink: { name: 'ComponentModalModalOtherForm' } },
        { i18nKey: 'app.aside.menu.modalWithTable', routerLink: { name: 'ComponentModalModalOtherTable' } },
        { i18nKey: 'app.aside.menu.modalLeftRightInModal', routerLink: { name: 'ComponentModalModalOtherLeftRight' } },
        { i18nKey: 'app.aside.menu.modalSplitTableInModal', routerLink: { name: 'ComponentModalModalOtherSplitTable' } }
      ]
    }
  ]
}
