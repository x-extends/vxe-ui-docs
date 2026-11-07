import { NavVO } from './nav'

export const listNavConfig: NavVO = {
  i18nKey: 'app.aside.menu.listTitle',
  icon: 'vxe-icon-num-list',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'list' } }, keywords: 'vxe-list' },
    {
      i18nKey: 'app.aside.menu.listBase',
      children: [
        { i18nKey: 'app.aside.menu.listBase', routerLink: { name: 'ComponentListBaseBasics' } },
        { i18nKey: 'app.aside.menu.listHeight', routerLink: { name: 'ComponentListBaseAutoResize' } },
        { i18nKey: 'app.aside.menu.listRowHeight', routerLink: { name: 'ComponentListBaseItemHeight' } },
        { i18nKey: 'app.aside.menu.listPadding', routerLink: { name: 'ComponentListBasePadding' } },
        { i18nKey: 'app.aside.menu.listHighlightRow', routerLink: { name: 'ComponentListBaseHover' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.listCurrentRow',
      children: [
        { i18nKey: 'app.aside.menu.listHighlightCurrentRow', routerLink: { name: 'ComponentListCurrentBase' } },
        { i18nKey: 'app.aside.menu.listDisabled', routerLink: { name: 'ComponentListCurrentCurrentMethod' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.listRadio',
      children: [
        { i18nKey: 'app.aside.menu.listSingleSelect', routerLink: { name: 'ComponentListRadioBase' } },
        { i18nKey: 'app.aside.menu.listManualOperation', routerLink: { name: 'ComponentListRadioHandleManual' } },
        { i18nKey: 'app.aside.menu.listHighlightSelectedNode', routerLink: { name: 'ComponentListRadioHighlight' } },
        { i18nKey: 'app.aside.menu.listTriggerMethod', routerLink: { name: 'ComponentListRadioTrigger' } },
        { i18nKey: 'app.aside.menu.listIsDisabled', routerLink: { name: 'ComponentListRadioCheckMethod' } },
        { i18nKey: 'app.aside.menu.listIsHidden', routerLink: { name: 'ComponentListRadioVisibleMethod' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.listCheckbox',
      children: [
        { i18nKey: 'app.aside.menu.listMultiSelect', routerLink: { name: 'ComponentListCheckboxBase' } },
        { i18nKey: 'app.aside.menu.listManualOperation', routerLink: { name: 'ComponentListCheckboxHandleManual' } },
        { i18nKey: 'app.aside.menu.listHighlightSelectedNode', routerLink: { name: 'ComponentListCheckboxHighlight' } },
        { i18nKey: 'app.aside.menu.listTriggerMethod', routerLink: { name: 'ComponentListCheckboxTrigger' } },
        { i18nKey: 'app.aside.menu.listIsDisabled', routerLink: { name: 'ComponentListCheckboxCheckMethod' } },
        { i18nKey: 'app.aside.menu.listIsHidden', routerLink: { name: 'ComponentListCheckboxVisibleMethod' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.listContextMenu',
      children: [
        { i18nKey: 'app.aside.menu.listConfigMenu', routerLink: { name: 'ComponentListMenuBasics' } },
        { i18nKey: 'app.aside.menu.listPrefixAndSuffix', routerLink: { name: 'ComponentListMenuIcon' } },
        { i18nKey: 'app.aside.menu.listIsDisabled', routerLink: { name: 'ComponentListMenuDisabled' } },
        { i18nKey: 'app.aside.menu.listIsVisible', routerLink: { name: 'ComponentListMenuVisible' } },
        { i18nKey: 'app.aside.menu.listAsyncLoading', routerLink: { name: 'ComponentListMenuLoading' } },
        { i18nKey: 'app.aside.menu.listPermissionControl', routerLink: { name: 'ComponentListMenuVisibleMethod' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.listDrag',
      children: [
        { i18nKey: 'app.aside.menu.listDragReorderNode', routerLink: { name: 'ComponentListDragSort' } },
        { i18nKey: 'app.aside.menu.listCustomIcon', routerLink: { name: 'ComponentListDragIcon' } },
        { i18nKey: 'app.aside.menu.listDragGuideStyle', routerLink: { name: 'ComponentListDragShowGuidesStatus' } },
        { i18nKey: 'app.aside.menu.listTriggerMode', routerLink: { name: 'ComponentListDragTrigger' } },
        { i18nKey: 'app.aside.menu.listDragEvents', routerLink: { name: 'ComponentListDragEvents' } },
        { i18nKey: 'app.aside.menu.listCustomTip', routerLink: { name: 'ComponentListDragTooltipMethod' } },
        { i18nKey: 'app.aside.menu.listDisableDragButton', routerLink: { name: 'ComponentListDragDisabledMethod' } },
        { i18nKey: 'app.aside.menu.listDragButtonVisible', routerLink: { name: 'ComponentListDragVisibleMethod' } },
        { i18nKey: 'app.aside.menu.listDragIntercept', routerLink: { name: 'ComponentListDragDragMethod' } },
        { i18nKey: 'app.aside.menu.listCrossListDrag', routerLink: { name: 'ComponentListDragDragCossList' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.listAddRemoveRow',
      children: [
        { i18nKey: 'app.aside.menu.listInsertRow', routerLink: { name: 'ComponentListEditInsert' } },
        { i18nKey: 'app.aside.menu.listRemoveRow', routerLink: { name: 'ComponentListEditRemove' } },
        { i18nKey: 'app.aside.menu.listAddRemoveOperation', routerLink: { name: 'ComponentListEditFull' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.listScrollbar',
      children: [
        {
          i18nKey: 'app.aside.menu.listNativeScrollbar',
          children: [
            { i18nKey: 'app.aside.menu.listUseScrollbar', routerLink: { name: 'ComponentListScrollbarNativeScrollbar' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.listVirtualScrollbar',
          children: [
            { i18nKey: 'app.aside.menu.listUseScrollbar', routerLink: { name: 'ComponentListScrollbarUseScrollbarScrollbar' } },
            { i18nKey: 'app.aside.menu.listScrollbarWidth', routerLink: { name: 'ComponentListScrollbarUseScrollbarBarWidth' } },
            { i18nKey: 'app.aside.menu.listScrollbarColor', routerLink: { name: 'ComponentListScrollbarUseScrollbarBarColor' } },
            { i18nKey: 'app.aside.menu.listDisplayPosition', routerLink: { name: 'ComponentListScrollbarUseScrollbarPosition' } },
            { i18nKey: 'app.aside.menu.listAutoHide', routerLink: { name: 'ComponentListScrollbarUseScrollbarAutoHide' } },
            { i18nKey: 'app.aside.menu.listFloatingScrollbar', routerLink: { name: 'ComponentListScrollbarUseScrollbarFluentOverlay' } }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.listVirtualScrollLargeData',
      children: [
        { i18nKey: 'app.aside.menu.listVerticalVirtualScroll', routerLink: { name: 'ComponentListScrollBasics' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.listCustomSlotTemplate',
      children: [
        { i18nKey: 'app.aside.menu.listCustomInnerHeaderTemplate', routerLink: { name: 'ComponentListTemplateHeader' } },
        { i18nKey: 'app.aside.menu.listCustomFooterTemplate', routerLink: { name: 'ComponentListTemplateFooter' } },
        { i18nKey: 'app.aside.menu.listCustomContentTemplate', routerLink: { name: 'ComponentListTemplateContent' } },
        { i18nKey: 'app.aside.menu.listCustomListTemplate', routerLink: { name: 'ComponentListTemplateDefault' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.listFeatureExamples',
      children: [
        { i18nKey: 'app.aside.menu.listVerticalVirtualList', routerLink: { name: 'ComponentListOtherVn' } },
        { i18nKey: 'app.aside.menu.listLightweightVirtualTable', routerLink: { name: 'ComponentListOtherTable' } },
        { i18nKey: 'app.aside.menu.listTransferSelection', routerLink: { name: 'ComponentListOtherListTransfer' } },
        { i18nKey: 'app.aside.menu.listGridList', routerLink: { name: 'ComponentListOtherListMultiCol' } }
      ]
    }
  ]
}
