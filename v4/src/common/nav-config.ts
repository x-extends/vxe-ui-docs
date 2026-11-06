import { NavVO, otherUrl } from './nav'
import { datePickerNavConfig } from './date-picker'
import { modalNavConfig } from './modal'
import { formNavConfig } from './form'
import { listNavConfig } from './list'
import { treeNavConfig } from './tree'
import { uploadNavConfig } from './upload'
import { tableNavConfig } from './table'
import { ganttNavConfig } from './gantt'
import { designNavConfig } from './design'
import { timelineNavConfig } from './timeline'
import { stepsNavConfig } from './steps'

export const navConfigList: NavVO[] = [
  {
    i18nKey: 'app.aside.menu.guide',
    icon: 'vxe-icon-rich-text',
    isExpand: true,
    children: [
      {
        i18nKey: 'app.aside.menu.fullInsrall',
        isExpand: true,
        children: [
          { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartUIInstall' } },
          { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartUIUseGlobal' } },
          { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartUIUseImport' } },
          { i18nKey: 'app.aside.menu.useGlobalCDN', routerLink: { name: 'StartUICDN' } },
          { i18nKey: 'app.aside.menu.adminSystem', isTemplate: true, linkUrl: 'https://vxeui.com/admin-template/', linkTarget: '_blank' }
        ]
      },
      {
        i18nKey: 'app.aside.menu.useTableInsrall',
        children: [
          { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartTableInstall' } },
          { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartTableUseGlobal' } },
          { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartTableUseImport' } },
          { i18nKey: 'app.aside.menu.useGlobalCDN', routerLink: { name: 'StartTableCDN' } },
          { i18nKey: 'app.aside.menu.useTableSingleCDN', routerLink: { name: 'StartTableSingleCDN' } },
          { i18nKey: 'app.aside.menu.useThirdUI', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/grid/edit/el-input`, linkTarget: '_blank' }
        ]
      },
      {
        i18nKey: 'app.aside.menu.useGanttInsrall',
        children: [
          { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartGanttInstall' } },
          // { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartGanttUseGlobal' } },
          // { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartGanttUseImport' } },
          { i18nKey: 'app.aside.menu.useGlobalCDN', routerLink: { name: 'StartGanttCDN' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.useDesignInsrall',
        children: [
          { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartDesignInstall' } },
          // { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartDesignUseGlobal' } },
          // { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartDesignUseImport' } },
          { i18nKey: 'app.aside.menu.useGlobalCDN', routerLink: { name: 'StartDesignCDN' } },
          { i18nKey: 'app.aside.menu.useThirdUI', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/form-design/renderView`, linkTarget: '_blank' },
          { i18nKey: 'app.aside.menu.designSystem', isTemplate: true, linkUrl: 'https://vxeui.com/design-template/', linkTarget: '_blank' }
        ]
      },
      { i18nKey: 'app.aside.menu.globalConfig', routerLink: { name: 'StartConfig' } },
      { i18nKey: 'app.aside.menu.globalTheme', routerLink: { name: 'StartTheme' } },
      { i18nKey: 'app.aside.menu.globalIcon', routerLink: { name: 'StartIcons' } },
      { i18nKey: 'app.aside.menu.globalZIndex', routerLink: { name: 'StartUseZIndex' } },
      {
        i18nKey: 'app.aside.menu.i18n',
        children: [
          { i18nKey: 'app.aside.menu.configI18n', routerLink: { name: 'StartI18n' } },
          { i18nKey: 'app.aside.menu.configTranslate', routerLink: { name: 'StartTranslate' } },
          { i18nKey: 'app.aside.menu.configI18nCDN', routerLink: { name: 'StartI18nCDN' } }
        ]
      },
      { i18nKey: 'app.aside.menu.globalPermission', routerLink: { name: 'StartPermission' } },
      { i18nKey: 'app.aside.menu.globalScrollbar', routerLink: { name: 'StartScrollbar' } }
    ]
  },
  {
    i18nKey: 'app.aside.menu.tools',
    icon: 'vxe-icon-tools',
    children: [
      { i18nKey: 'app.aside.menu.clipboard', routerLink: { name: 'ToolClipboard' } },
      { i18nKey: 'app.aside.menu.functions', linkUrl: 'https://util.vxeui.com', linkTarget: '_blank' },
      {
        i18nKey: 'app.aside.menu.uploadUtils',
        children: [
          { i18nKey: 'app.aside.menu.toolsReadFile', routerLink: { name: 'ComponentUploadGlobalReadFile' } },
          { i18nKey: 'app.aside.menu.toolsDownloadFile', routerLink: { name: 'ComponentUploadGlobalSaveFile' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.ctxMenuUtils',
        children: [
          { i18nKey: 'app.aside.menu.toolsContextMenu', routerLink: { name: 'ComponentContextMenuGlobalContextMenu' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.loadingUtils',
        children: [
          { i18nKey: 'app.aside.menu.toolsLoading', routerLink: { name: 'ComponentLoadingGlobalLoading' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.tooltipUtils',
        children: [
          { i18nKey: 'app.aside.menu.toolsSingletonMode', routerLink: { name: 'ComponentTooltipGlobalTooltip' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.colorUtils',
        children: [
          { i18nKey: 'app.aside.menu.toolsFormatConversion', routerLink: { name: 'ComponentUploadGlobalColorType' } },
          { i18nKey: 'app.aside.menu.toolsParseToFormat', routerLink: { name: 'ComponentUploadGlobalColorParse' } },
          { i18nKey: 'app.aside.menu.toolsEffectProcessing', routerLink: { name: 'ComponentUploadGlobalColorEffect' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.printUtils',
        children: [
          { i18nKey: 'app.aside.menu.toolsPrint', routerLink: { name: 'ComponentPrintGlobalPrint' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.iconTitle',
    icon: 'vxe-icon-star',
    children: [
      { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'icon' } }, keywords: 'vxe-icon' },
      { i18nKey: 'app.aside.menu.iconList', routerLink: { name: 'ComponentIconBase' } },
      { i18nKey: 'app.aside.menu.iconSize', routerLink: { name: 'ComponentIconSize' } },
      { i18nKey: 'app.aside.menu.iconEffect', routerLink: { name: 'ComponentIconAnimation' } },
      { i18nKey: 'app.aside.menu.iconStatusColor', routerLink: { name: 'ComponentIconStatus' } }
    ]
  },
  {
    i18nKey: 'app.aside.menu.baseTitle',
    icon: 'vxe-icon-layout',
    showCount: true,
    children: [
      {
        i18nKey: 'app.aside.menu.layoutContainerTitle',
        children: [
          { title: 'Layout Container API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'layout-container' } }, keywords: 'vxe-layout-container' },
          { title: 'Layout Aside API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'layout-aside' } }, keywords: 'vxe-layout-aside' },
          { title: 'Layout Header API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'layout-header' } }, keywords: 'vxe-layout-header' },
          { title: 'Layout Body API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'layout-body' } }, keywords: 'vxe-layout-body' },
          { title: 'Layout Footer API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'layout-footer' } }, keywords: 'vxe-layout-footer' },
          { i18nKey: 'app.aside.menu.basicLayoutBaseLayout', routerLink: { name: 'ComponentLayoutBase' } },
          { i18nKey: 'app.aside.menu.basicLayoutFixed', routerLink: { name: 'ComponentLayoutFixed' } },
          { i18nKey: 'app.aside.menu.basicLayoutAside', routerLink: { name: 'ComponentLayoutAside' } },
          { i18nKey: 'app.aside.menu.basicLayoutHeader', routerLink: { name: 'ComponentLayoutHeader' } },
          { i18nKey: 'app.aside.menu.basicLayoutBody', routerLink: { name: 'ComponentLayoutBody' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.backtopTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'backtop' } }, keywords: 'vxe-backtop' },
          { i18nKey: 'app.aside.menu.basicSize', routerLink: { name: 'ComponentBacktopSize' } },
          { i18nKey: 'app.aside.menu.basicStatusColor', routerLink: { name: 'ComponentBacktopStatus' } },
          { i18nKey: 'app.aside.menu.basicCircle', routerLink: { name: 'ComponentBacktopCircle' } },
          { i18nKey: 'app.aside.menu.basicIcon', routerLink: { name: 'ComponentBacktopIcon' } },
          { i18nKey: 'app.aside.menu.basicText', routerLink: { name: 'ComponentBacktopContent' } },
          { i18nKey: 'app.aside.menu.basicCustomPosition', routerLink: { name: 'ComponentBacktopPos' } },
          {
            i18nKey: 'app.aside.menu.basicCustomSlotTemplate',
            children: [
              { i18nKey: 'app.aside.menu.basicCustomContentTemplate', routerLink: { name: 'ComponentBacktopTemplateDefault' } },
              { i18nKey: 'app.aside.menu.basicCustomTopTemplate', routerLink: { name: 'ComponentBacktopTemplateTop' } },
              { i18nKey: 'app.aside.menu.basicCustomBottomTemplate', routerLink: { name: 'ComponentBacktopTemplateBottom' } }
            ]
          }
        ]
      },
      {
        i18nKey: 'app.aside.menu.rowcolTitle',
        children: [
          { title: 'Row API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'row' } }, keywords: 'vxe-row' },
          { title: 'Col API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'col' } }, keywords: 'vxe-col' },
          { i18nKey: 'app.aside.menu.basicRowColRatio', routerLink: { name: 'ComponentRowBase' } },
          { i18nKey: 'app.aside.menu.basicVerticalLayout', routerLink: { name: 'ComponentRowVertical' } },
          { i18nKey: 'app.aside.menu.basicAutoWrap', routerLink: { name: 'ComponentRowWrap' } },
          { i18nKey: 'app.aside.menu.basicGap', routerLink: { name: 'ComponentRowGutter' } },
          { i18nKey: 'app.aside.menu.basicFixedWidth', routerLink: { name: 'ComponentRowColWidth' } },
          { i18nKey: 'app.aside.menu.basicFillWidth', routerLink: { name: 'ComponentRowColFill' } },
          { i18nKey: 'app.aside.menu.basicAlign', routerLink: { name: 'ComponentRowColAlign' } },
          { i18nKey: 'app.aside.menu.basicOverflowHidden', routerLink: { name: 'ComponentRowColEllipsis' } },
          { i18nKey: 'app.aside.menu.basicGridLayout', routerLink: { name: 'ComponentRowColGrid' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.textTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'text' } }, keywords: 'vxe-textT' },
          { i18nKey: 'app.aside.menu.basicSize', routerLink: { name: 'ComponentTextSize' } },
          { i18nKey: 'app.aside.menu.basicStatusColor', routerLink: { name: 'ComponentTextStatus' } },
          { i18nKey: 'app.aside.menu.basicLoading', routerLink: { name: 'ComponentTextLoading' } },
          { i18nKey: 'app.aside.menu.basicPrefixIcon', routerLink: { name: 'ComponentTextIcon' } },
          { i18nKey: 'app.aside.menu.basicSuffixIcon', routerLink: { name: 'ComponentTextSuffixIcon' } },
          { i18nKey: 'app.aside.menu.basicClickToCopy', routerLink: { name: 'ComponentTextClickToCopy' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.linkTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'link' } }, keywords: 'vxe-link' },
          { i18nKey: 'app.aside.menu.basicSize', routerLink: { name: 'ComponentLinkSize' } },
          { i18nKey: 'app.aside.menu.basicStatusColor', routerLink: { name: 'ComponentLinkStatus' } },
          { i18nKey: 'app.aside.menu.basicIcon', routerLink: { name: 'ComponentLinkIcon' } },
          { i18nKey: 'app.aside.menu.basicUnderline', routerLink: { name: 'ComponentLinkUnderline' } },
          { i18nKey: 'app.aside.menu.basicDisabled', routerLink: { name: 'ComponentLinkDisabled' } },
          { i18nKey: 'app.aside.menu.basicHref', routerLink: { name: 'ComponentLinkHref' } },
          { i18nKey: 'app.aside.menu.basicRouterMode', routerLink: { name: 'ComponentLinkRouter' } },
          { i18nKey: 'app.aside.menu.basicPermissionCode', routerLink: { name: 'ComponentLinkPermissionCode' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.tagTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tag' } }, keywords: 'vxe-tag' },
          { i18nKey: 'app.aside.menu.basicSize', routerLink: { name: 'ComponentTagSize' } },
          { i18nKey: 'app.aside.menu.basicStatus', routerLink: { name: 'ComponentTagStatus' } },
          { i18nKey: 'app.aside.menu.basicIcon', routerLink: { name: 'ComponentTagIcon' } },
          { i18nKey: 'app.aside.menu.basicRound', routerLink: { name: 'ComponentTagRound' } },
          { i18nKey: 'app.aside.menu.basicBorder', routerLink: { name: 'ComponentTagBorder' } },
          { i18nKey: 'app.aside.menu.basicLoading', routerLink: { name: 'ComponentTagLoading' } },
          { i18nKey: 'app.aside.menu.basicColor', routerLink: { name: 'ComponentTagColor' } },
          { i18nKey: 'app.aside.menu.basicClosable', routerLink: { name: 'ComponentTagClosable' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.buttonTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'button' } }, keywords: 'vxe-button' },
          { i18nKey: 'app.aside.menu.basicSize', routerLink: { name: 'ComponentButtonSize' } },
          { i18nKey: 'app.aside.menu.basicStatusColor', routerLink: { name: 'ComponentButtonStatus' } },
          { i18nKey: 'app.aside.menu.basicRound', routerLink: { name: 'ComponentButtonRound' } },
          { i18nKey: 'app.aside.menu.basicCircle', routerLink: { name: 'ComponentButtonCircle' } },
          { i18nKey: 'app.aside.menu.basicIcon', routerLink: { name: 'ComponentButtonIcon' } },
          { i18nKey: 'app.aside.menu.basicTipIcon', routerLink: { name: 'ComponentButtonTipIcon' } },
          { i18nKey: 'app.aside.menu.basicLoading', routerLink: { name: 'ComponentButtonLoading' } },
          { i18nKey: 'app.aside.menu.basicRouterMode', routerLink: { name: 'ComponentButtonRouter' } },
          { i18nKey: 'app.aside.menu.basicButtonGroup', routerLink: { name: 'ComponentButtonGroup' } },
          { i18nKey: 'app.aside.menu.basicLayoutMode', routerLink: { name: 'ComponentButtonVertical' } },
          {
            i18nKey: 'app.aside.menu.basicDropdownButton',
            children: [
              { i18nKey: 'app.aside.menu.basicDropdownButton', routerLink: { name: 'ComponentButtonDropdownOptions' } },
              { i18nKey: 'app.aside.menu.basicStatusColor', routerLink: { name: 'ComponentButtonDropdownStatus' } },
              { i18nKey: 'app.aside.menu.basicTriggerMode', routerLink: { name: 'ComponentButtonDropdownTrigger' } },
              { i18nKey: 'app.aside.menu.basicTipIcon', routerLink: { name: 'ComponentButtonDropdownTipIcon' } },
              { i18nKey: 'app.aside.menu.basicFixedDirection', routerLink: { name: 'ComponentButtonDropdownPlacement' } },
              { i18nKey: 'app.aside.menu.basicDropdownTeleportTo', routerLink: { name: 'ComponentButtonDropdownTeleportTo' } },
              { i18nKey: 'app.aside.menu.basicCustomSlotTemplate', routerLink: { name: 'ComponentButtonDropdownTemplate' } },
              { i18nKey: 'app.aside.menu.basicPermissionCode', routerLink: { name: 'ComponentButtonDropdownPermissionCode' } }
            ]
          },
          { i18nKey: 'app.aside.menu.basicDisabled', routerLink: { name: 'ComponentButtonDisabled' } },
          { i18nKey: 'app.aside.menu.basicUseContextMenu', routerLink: { name: 'ComponentButtonMenu' } },
          { i18nKey: 'app.aside.menu.basicPermissionCode', routerLink: { name: 'ComponentButtonPermissionCode' } },
          {
            i18nKey: 'app.aside.menu.buttonGlobalRenderer',
            children: [
              { title: 'API', routerLink: { name: 'GlobalRendererButtonAPI' } },
              { i18nKey: 'app.aside.menu.basicPrefixIcon', routerLink: { name: 'GlobalRendererButtonPrefix' } },
              { i18nKey: 'app.aside.menu.basicSuffixIcon', routerLink: { name: 'GlobalRendererButtonSuffix' } }
            ]
          },
          { i18nKey: 'app.aside.menu.basicUseThirdPartyIcon', isPlugin: true, linkUrl: `${otherUrl}#/other-iconfont/symbol/button/icon`, linkTarget: '_blank' }
        ]
      },
      {
        i18nKey: 'app.aside.menu.basicDividerTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'divider' } }, keywords: 'vxe-divider' },
          { i18nKey: 'app.aside.menu.basicDividerHorizontal', routerLink: { name: 'ComponentDividerBase' } },
          { i18nKey: 'app.aside.menu.basicDividerVertical', routerLink: { name: 'ComponentDividerVertical' } },
          { i18nKey: 'app.aside.menu.basicShowTitle', routerLink: { name: 'ComponentDividerTitle' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.basicSegmentedTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'segmented' } }, keywords: 'vxe-segmented' },
          { i18nKey: 'app.aside.menu.basicSize', routerLink: { name: 'ComponentSegmentedSize' } },
          { i18nKey: 'app.aside.menu.basicStatusColor', routerLink: { name: 'ComponentSegmentedStatus' } },
          { i18nKey: 'app.aside.menu.basicIcon', routerLink: { name: 'ComponentSegmentedIcon' } },
          { i18nKey: 'app.aside.menu.basicDisabled', routerLink: { name: 'ComponentSegmentedDisabled' } },
          { i18nKey: 'app.aside.menu.basicTypeStyle', routerLink: { name: 'ComponentSegmentedType' } },
          { i18nKey: 'app.aside.menu.basicWidth', routerLink: { name: 'ComponentSegmentedWidth' } },
          {
            i18nKey: 'app.aside.menu.basicCustomSlotTemplate',
            children: [
              { i18nKey: 'app.aside.menu.basicCustomContentTemplate', routerLink: { name: 'ComponentSegmentedTemplateDefault' } }
            ]
          }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.displayTitle',
    icon: 'vxe-icon-row-col',
    showCount: true,
    children: [
      {
        i18nKey: 'app.aside.menu.displayAvatarTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'avatar' } } },
          { i18nKey: 'app.aside.menu.displayBase', routerLink: { name: 'ComponentAvatarBase' } },
          { i18nKey: 'app.aside.menu.displaySize', routerLink: { name: 'ComponentAvatarSize' } },
          { i18nKey: 'app.aside.menu.displayIcon', routerLink: { name: 'ComponentAvatarIcon' } },
          { i18nKey: 'app.aside.menu.displayCircle', routerLink: { name: 'ComponentAvatarCircle' } },
          { i18nKey: 'app.aside.menu.displayStatusColor', routerLink: { name: 'ComponentAvatarStatus' } },
          { i18nKey: 'app.aside.menu.displayDot', routerLink: { name: 'ComponentAvatarDot' } },
          { i18nKey: 'app.aside.menu.displayBadgeCount', routerLink: { name: 'ComponentAvatarCount' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.displayBadgeTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'badge' } } },
          { i18nKey: 'app.aside.menu.displayBase', routerLink: { name: 'ComponentBadgeBase' } },
          { i18nKey: 'app.aside.menu.displaySize', routerLink: { name: 'ComponentBadgerSize' } },
          { i18nKey: 'app.aside.menu.displayIcon', routerLink: { name: 'ComponentBadgerIcon' } },
          { i18nKey: 'app.aside.menu.displayDot', routerLink: { name: 'ComponentBadgerDot' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.textEllipsisTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'text-ellipsis' } } },
          { i18nKey: 'app.aside.menu.displaySize', routerLink: { name: 'ComponentTextEllipsisSize' } },
          { i18nKey: 'app.aside.menu.displayStatusColor', routerLink: { name: 'ComponentTextEllipsisStatus' } },
          { i18nKey: 'app.aside.menu.displaySingleLineEllipsis', routerLink: { name: 'ComponentTextEllipsisIconLineSingle' } },
          { i18nKey: 'app.aside.menu.displayMultiLineEllipsis', routerLink: { name: 'ComponentTextEllipsisLineClamp' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.displayImageTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'image' } } },
          { i18nKey: 'app.aside.menu.displaySetWidthHeight', routerLink: { name: 'ComponentImageBase' } },
          { i18nKey: 'app.aside.menu.displayCircleImage', routerLink: { name: 'ComponentImageCircle' } },
          { i18nKey: 'app.aside.menu.displayPreviewLink', routerLink: { name: 'ComponentImageThumbnail' } },
          { i18nKey: 'app.aside.menu.displayPreviewMultipleImages', routerLink: { name: 'ComponentImageMultiple' } },
          { i18nKey: 'app.aside.menu.displayLazyLoad', routerLink: { name: 'ComponentImageLazy' } },
          { i18nKey: 'app.aside.menu.displayPreview', routerLink: { name: 'ComponentImageShowPreview' } },
          { i18nKey: 'app.aside.menu.displayMaskClosable', routerLink: { name: 'ComponentImageMaskClosable' } },
          // { title: '打印按钮', routerLink: { name: 'ComponentImageShowPrintButton' } },
          { i18nKey: 'app.aside.menu.displayToolbarButton', routerLink: { name: 'ComponentImageToolBtn' } },
          { i18nKey: 'app.aside.menu.displayToolbarIcon', routerLink: { name: 'ComponentImageToolIcon' } },
          { i18nKey: 'app.aside.menu.displayEventListen', routerLink: { name: 'ComponentImageEvents' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.displayImageGroupTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'image-group' } } },
          { i18nKey: 'app.aside.menu.displaySetWidthHeight', routerLink: { name: 'ComponentImageGroupBase' } },
          { i18nKey: 'app.aside.menu.displayPreview', routerLink: { name: 'ComponentImageGroupShowPreview' } },
          { i18nKey: 'app.aside.menu.displayPrintButton', routerLink: { name: 'ComponentImageGroupShowPrintButton' } },
          { i18nKey: 'app.aside.menu.displayDownloadButton', routerLink: { name: 'ComponentImageGroupShowDownloadButton' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.displayImagePreviewTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'image-preview' } } },
          { i18nKey: 'app.aside.menu.displayOpenPreview', routerLink: { name: 'ComponentImagePreview' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.displayCalendarTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'calendar' } } },
          { i18nKey: 'app.aside.menu.displaySize', routerLink: { name: 'ComponentCalendarSize' } },
          { i18nKey: 'app.aside.menu.displayHeight', routerLink: { name: 'ComponentCalendarHeight' } },
          { i18nKey: 'app.aside.menu.displayDateView', routerLink: { name: 'ComponentCalendarDate' } },
          { i18nKey: 'app.aside.menu.displayWeekView', routerLink: { name: 'ComponentCalendarWeek' } },
          { i18nKey: 'app.aside.menu.displayMonthView', routerLink: { name: 'ComponentCalendarMonth' } },
          { i18nKey: 'app.aside.menu.displayQuarterView', routerLink: { name: 'ComponentCalendarQuarter' } },
          { i18nKey: 'app.aside.menu.displayYearView', routerLink: { name: 'ComponentCalendarYear' } },
          { i18nKey: 'app.aside.menu.displayCustomStyle', routerLink: { name: 'ComponentCalendarCellStyle' } },
          { i18nKey: 'app.aside.menu.displayShowFestival', routerLink: { name: 'ComponentCalendarFestivalMethod' } },
          { i18nKey: 'app.aside.menu.displayEventListen', routerLink: { name: 'ComponentCalendarFestivalEvents' } },
          {
            i18nKey: 'app.aside.menu.displayContextMenu',
            children: [
              { i18nKey: 'app.aside.menu.displayConfigMenu', routerLink: { name: 'ComponentCalendarMenuBasics' } },
              { i18nKey: 'app.aside.menu.displayPrefixAndSuffix', routerLink: { name: 'ComponentCalendarMenuIcon' } },
              { i18nKey: 'app.aside.menu.displayIsDisabled', routerLink: { name: 'ComponentCalendarMenuDisabled' } },
              { i18nKey: 'app.aside.menu.displayIsVisible', routerLink: { name: 'ComponentCalendarMenuVisible' } },
              { i18nKey: 'app.aside.menu.displayAsyncLoading', routerLink: { name: 'ComponentCalendarMenuLoading' } },
              { i18nKey: 'app.aside.menu.displayPermissionControl', routerLink: { name: 'ComponentCalendarMenuVisibleMethod' } }
            ]
          }
        ]
      },
      // { title: 'Progress 进度条' },
      {
        i18nKey: 'app.aside.menu.displayCardTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'card' } }, keywords: 'vxe-card' },
          { i18nKey: 'app.aside.menu.displayBase', routerLink: { name: 'ComponentCardBase' } },
          { i18nKey: 'app.aside.menu.displayWidth', routerLink: { name: 'ComponentCardWidth' } },
          { i18nKey: 'app.aside.menu.displayHeight', routerLink: { name: 'ComponentCardHeight' } },
          { i18nKey: 'app.aside.menu.displayLoading', routerLink: { name: 'ComponentCardLoading' } },
          { i18nKey: 'app.aside.menu.displayToggleBorder', routerLink: { name: 'ComponentCardBorder' } },
          { i18nKey: 'app.aside.menu.displayTogglePadding', routerLink: { name: 'ComponentCardPadding' } },
          { i18nKey: 'app.aside.menu.displayBorderShadow', routerLink: { name: 'ComponentCardShadow' } },
          { i18nKey: 'app.aside.menu.displayCustomTemplate', routerLink: { name: 'ComponentCardTemplate' } },
          { i18nKey: 'app.aside.menu.displayImplementRefresh', routerLink: { name: 'ComponentCardRefresh' } },
          {
            i18nKey: 'app.aside.menu.displayScrollbar',
            children: [
              {
                i18nKey: 'app.aside.menu.displayNativeScrollbar',
                children: [
                  { i18nKey: 'app.aside.menu.displayUseScrollbar', routerLink: { name: 'ComponentCardScrollbarNativeScrollbar' } }
                ]
              },
              {
                i18nKey: 'app.aside.menu.displayVirtualScrollbar',
                children: [
                  { i18nKey: 'app.aside.menu.displayUseScrollbar', routerLink: { name: 'ComponentCardScrollbarUseScrollbarScrollbar' } }
                ]
              }
            ]
          }
        ]
      },
      {
        i18nKey: 'app.aside.menu.displayCarouselTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'carousel' } }, keywords: 'vxe-carousel' },
          { i18nKey: 'app.aside.menu.displayBase', routerLink: { name: 'ComponentCarouselBase' } },
          { i18nKey: 'app.aside.menu.displayHeight', routerLink: { name: 'ComponentCarouselHeight' } },
          { i18nKey: 'app.aside.menu.displayVerticalLayout', routerLink: { name: 'ComponentCarouselVertical' } },
          { i18nKey: 'app.aside.menu.displayConfigDriven', routerLink: { name: 'ComponentCarouselOptions' } },
          { i18nKey: 'app.aside.menu.displayCustomSlotTemplate', routerLink: { name: 'ComponentCarouselTemplate' } },
          { i18nKey: 'app.aside.menu.displayAutoPlay', routerLink: { name: 'ComponentCarouselAutoPlay' } },
          { i18nKey: 'app.aside.menu.displayIndicators', routerLink: { name: 'ComponentCarouselShowIndicators' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.displaySpaceTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'space' } }, keywords: 'vxe-space' },
          { i18nKey: 'app.aside.menu.displayBase', routerLink: { name: 'ComponentSpaceBase' } },
          { i18nKey: 'app.aside.menu.displaySize', routerLink: { name: 'ComponentSpaceSize' } },
          { i18nKey: 'app.aside.menu.displayWidth', routerLink: { name: 'ComponentSpaceWidth' } },
          { i18nKey: 'app.aside.menu.displayFillContainer', routerLink: { name: 'ComponentSpaceFill' } },
          { i18nKey: 'app.aside.menu.displayCustomGap', routerLink: { name: 'ComponentSpaceGap' } },
          { i18nKey: 'app.aside.menu.displayVerticalLayout', routerLink: { name: 'ComponentSpaceVertical' } },
          { i18nKey: 'app.aside.menu.displayAutoWrap', routerLink: { name: 'ComponentSpaceWrap' } },
          { i18nKey: 'app.aside.menu.displayAlign', routerLink: { name: 'ComponentSpaceAlign' } },
          { i18nKey: 'app.aside.menu.displayItemWidth', routerLink: { name: 'ComponentSpaceItemWidth' } },
          { i18nKey: 'app.aside.menu.displaySeparator', routerLink: { name: 'ComponentSpaceSeparator' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.displayCollapseTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'collapse' } }, keywords: 'vxe-collapse' },
          { i18nKey: 'app.aside.menu.displayBase', routerLink: { name: 'ComponentCollapseBase' } },
          { i18nKey: 'app.aside.menu.displayBindValue', routerLink: { name: 'ComponentCollapseModel' } },
          { i18nKey: 'app.aside.menu.displayPadding', routerLink: { name: 'ComponentCollapsePadding' } },
          { i18nKey: 'app.aside.menu.displayBorder', routerLink: { name: 'ComponentCollapseBorder' } },
          { i18nKey: 'app.aside.menu.displayIcon', routerLink: { name: 'ComponentCollapseIon' } },
          { i18nKey: 'app.aside.menu.displayPreload', routerLink: { name: 'ComponentCollapsePreload' } },
          { i18nKey: 'app.aside.menu.displayConfigDriven', routerLink: { name: 'ComponentCollapseOptions' } },
          { i18nKey: 'app.aside.menu.displayCustomTitleTemplate', routerLink: { name: 'ComponentCollapseTemplateTitle' } },
          { i18nKey: 'app.aside.menu.displayCustomContentTemplate', routerLink: { name: 'ComponentCollapseTemplateDefault' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.displaySplitterTitle',
        children: [
          { title: 'Splitter API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'splitter' } }, keywords: 'vxe-splitter' },
          { title: 'Splitter Panel API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'splitter-panel' } }, keywords: 'vxe-splitter-panel' },
          {
            i18nKey: 'app.aside.menu.displayBase',
            children: [
              { i18nKey: 'app.aside.menu.displayBase', routerLink: { name: 'ComponentSplitterBasicsBase' } },
              { i18nKey: 'app.aside.menu.displayHeight', routerLink: { name: 'ComponentSplitterBasicsHeight' } },
              { i18nKey: 'app.aside.menu.displayBorder', routerLink: { name: 'ComponentSplitterBasicsBorder' } },
              { i18nKey: 'app.aside.menu.displayPadding', routerLink: { name: 'ComponentSplitterBasicsPadding' } },
              { i18nKey: 'app.aside.menu.displayVerticalLayout', routerLink: { name: 'ComponentSplitterBasicsVertical' } },
              { i18nKey: 'app.aside.menu.displayDragResizeWidth', routerLink: { name: 'ComponentSplitterBasicsResize' } },
              { i18nKey: 'app.aside.menu.displayCombinedLayout', routerLink: { name: 'ComponentSplitterBasicsLayout' } },
              { i18nKey: 'app.aside.menu.displayCollapsible', routerLink: { name: 'ComponentSplitterBasicsAction' } },
              { i18nKey: 'app.aside.menu.displayToggleCollapseButton', routerLink: { name: 'ComponentSplitterBasicsActionConfig' } },
              { i18nKey: 'app.aside.menu.displayModifyStyle', routerLink: { name: 'ComponentSplitterBasicsStyle' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.displayConfigDriven',
            children: [
              { i18nKey: 'app.aside.menu.displayBase', routerLink: { name: 'ComponentSplitterConfigBase' } },
              { i18nKey: 'app.aside.menu.displayHeight', routerLink: { name: 'ComponentSplitterConfigHeight' } },
              { i18nKey: 'app.aside.menu.displayBorder', routerLink: { name: 'ComponentSplitterConfigBorder' } },
              { i18nKey: 'app.aside.menu.displayPadding', routerLink: { name: 'ComponentSplitterConfigPadding' } },
              { i18nKey: 'app.aside.menu.displayVerticalLayout', routerLink: { name: 'ComponentSplitterConfigVertical' } },
              { i18nKey: 'app.aside.menu.displayDragResizeWidth', routerLink: { name: 'ComponentSplitterConfigResize' } },
              { i18nKey: 'app.aside.menu.displayCombinedLayout', routerLink: { name: 'ComponentSplitterConfigLayout' } },
              { i18nKey: 'app.aside.menu.displayCollapsible', routerLink: { name: 'ComponentSplitterConfigAction' } },
              { i18nKey: 'app.aside.menu.displayToggleCollapseButton', routerLink: { name: 'ComponentSplitterConfigActionConfig' } },
              { i18nKey: 'app.aside.menu.displayModifyStyle', routerLink: { name: 'ComponentSplitterConfigStyle' } }
            ]
          }
        ]
      },
      {
        i18nKey: 'app.aside.menu.displayTabsTitle',
        children: [
          { title: 'Tabs API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tabs' } }, keywords: 'vxe-tabs' },
          { title: 'Tab Pane API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tab-pane' } }, keywords: 'vxe-tab-pane' },
          { i18nKey: 'app.aside.menu.displayBase', routerLink: { name: 'ComponentTabsBase' } },
          { i18nKey: 'app.aside.menu.displayCardStyle', routerLink: { name: 'ComponentTabsCard' } },
          { i18nKey: 'app.aside.menu.displayBorderBgStyle', routerLink: { name: 'ComponentTabsBorderCard' } },
          { i18nKey: 'app.aside.menu.displayRoundCardStyle', routerLink: { name: 'ComponentTabsRoundCard' } },
          { i18nKey: 'app.aside.menu.displaySetHeight', routerLink: { name: 'ComponentTabsHeight' } },
          { i18nKey: 'app.aside.menu.displayConfigDriven', routerLink: { name: 'ComponentTabsOptions' } },
          { i18nKey: 'app.aside.menu.displayTabIcon', routerLink: { name: 'ComponentTabsIcon' } },
          { i18nKey: 'app.aside.menu.displayTabTriggerMode', routerLink: { name: 'ComponentTabsRoundTrigger' } },
          { i18nKey: 'app.aside.menu.displayTabPosition', routerLink: { name: 'ComponentTabsRoundPosition' } },
          { i18nKey: 'app.aside.menu.displayShowPanelContent', routerLink: { name: 'ComponentTabsRoundShowContent' } },
          { i18nKey: 'app.aside.menu.displayPreloadTab', routerLink: { name: 'ComponentTabsRoundPreload' } },
          { i18nKey: 'app.aside.menu.displayTabOverflowScroll', routerLink: { name: 'ComponentTabsOver' } },
          { i18nKey: 'app.aside.menu.displayInterceptTabSwitch', routerLink: { name: 'ComponentTabsBeforeChangeMethod' } },
          { i18nKey: 'app.aside.menu.displayClosable', routerLink: { name: 'ComponentTabsCloseConfig' } },
          { i18nKey: 'app.aside.menu.displayInterceptTabClose', routerLink: { name: 'ComponentTabsBeforeClose' } },
          { i18nKey: 'app.aside.menu.displayRefreshable', routerLink: { name: 'ComponentTabsRefreshConfig' } },
          {
            i18nKey: 'app.aside.menu.displayScrollbar',
            children: [
              {
                i18nKey: 'app.aside.menu.displayNativeScrollbar',
                children: [
                  { i18nKey: 'app.aside.menu.displayUseScrollbar', routerLink: { name: 'ComponentTabsScrollbarNativeScrollbar' } }
                ]
              },
              {
                i18nKey: 'app.aside.menu.displayVirtualScrollbar',
                children: [
                  { i18nKey: 'app.aside.menu.displayUseScrollbar', routerLink: { name: 'ComponentTabsScrollbarUseScrollbarScrollbar' } }
                ]
              }
            ]
          },
          {
            i18nKey: 'app.aside.menu.displayCustomSlotTemplate',
            children: [
              { i18nKey: 'app.aside.menu.displayCustomTitle', routerLink: { name: 'ComponentTabsTemplateTitle' } },
              { i18nKey: 'app.aside.menu.displayCustomTitlePrefix', routerLink: { name: 'ComponentTabsTemplateTitlePrefix' } },
              { i18nKey: 'app.aside.menu.displayCustomTitleSuffix', routerLink: { name: 'ComponentTabsTemplateTitleSuffix' } },
              { i18nKey: 'app.aside.menu.displayCustomTabPrefix', routerLink: { name: 'ComponentTabsTemplatePrefix' } },
              { i18nKey: 'app.aside.menu.displayCustomTabSuffix', routerLink: { name: 'ComponentTabsTemplateSuffix' } },
              { i18nKey: 'app.aside.menu.displayCustomPanelHeaderTemplate', routerLink: { name: 'ComponentTabsTemplateHeader' } },
              { i18nKey: 'app.aside.menu.displayCustomPanelFooterTemplate', routerLink: { name: 'ComponentTabsTemplateFooter' } }
            ]
          },
          { i18nKey: 'app.aside.menu.displayPermissionCode', routerLink: { name: 'ComponentTabsPermissionCode' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.displayScrollbarTitle',
        children: [
          { title: 'Scrollbar API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'scrollbar' } }, keywords: 'vxe-scrollbar' },
          { i18nKey: 'app.aside.menu.displayBase', routerLink: { name: 'ComponentScrollbarBase' } },
          { i18nKey: 'app.aside.menu.displayLoading', routerLink: { name: 'ComponentScrollbarLoading' } },
          { i18nKey: 'app.aside.menu.displayNativeScrollbar', routerLink: { name: 'ComponentScrollbarNative' } },
          { i18nKey: 'app.aside.menu.displayPadding', routerLink: { name: 'ComponentScrollbarPadding' } },
          { i18nKey: 'app.aside.menu.displayScrollbarWidth', routerLink: { name: 'ComponentScrollbarBarWidth' } },
          { i18nKey: 'app.aside.menu.displayDisableScrollbar', routerLink: { name: 'ComponentScrollbarScrollbar' } },
          { i18nKey: 'app.aside.menu.displayFloatingScrollbar', routerLink: { name: 'ComponentScrollbarFluentOverlay' } },
          { i18nKey: 'app.aside.menu.displayDisplayPosition', routerLink: { name: 'ComponentScrollbarPosition' } },
          { i18nKey: 'app.aside.menu.displayAutoHide', routerLink: { name: 'ComponentScrollbarAutoHide' } },
          { i18nKey: 'app.aside.menu.displayManualScroll', routerLink: { name: 'ComponentScrollbarScrollTo' } },
          { i18nKey: 'app.aside.menu.displayScrollEvent', routerLink: { name: 'ComponentScrollbarEvents' } },
          {
            i18nKey: 'app.aside.menu.displayInfiniteLoading',
            children: [
              { i18nKey: 'app.aside.menu.displayLoadRowsByThreshold', routerLink: { name: 'ComponentScrollbarLoadMoreBoundaryY' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.cssVar',
            children: [
              { i18nKey: 'app.aside.menu.displayScrollbarWidth', routerLink: { name: 'CssScrollBarWidth' } },
              { i18nKey: 'app.aside.menu.displayScrollbarBgColor', routerLink: { name: 'CssScrollBgColor' } }
            ]
          }
        ]
      },
      timelineNavConfig
    ]
  },
  {
    i18nKey: 'app.aside.menu.navigationTitle',
    icon: 'vxe-icon-menu',
    showCount: true,
    children: [
      {
        i18nKey: 'app.aside.menu.navigationBreadcrumbTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'breadcrumb' } } },
          { i18nKey: 'app.aside.menu.navigationBase', routerLink: { name: 'ComponentBreadcrumb' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.navigationMenuTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'menu' } } },
          { i18nKey: 'app.aside.menu.navigationBase', routerLink: { name: 'ComponentMenuBase' } },
          { i18nKey: 'app.aside.menu.navigationLoading', routerLink: { name: 'ComponentMenuLoading' } },
          { i18nKey: 'app.aside.menu.navigationIcon', routerLink: { name: 'ComponentMenuIcon' } },
          { i18nKey: 'app.aside.menu.navigationAccordion', routerLink: { name: 'ComponentMenuAccordion' } },
          { i18nKey: 'app.aside.menu.navigationCollapsible', routerLink: { name: 'ComponentMenuCollapsed' } },
          { i18nKey: 'app.aside.menu.navigationLinkMode', routerLink: { name: 'ComponentMenuLinkUrl' } },
          { i18nKey: 'app.aside.menu.navigationRouterMode', routerLink: { name: 'ComponentMenuRouterLink' } },
          { i18nKey: 'app.aside.menu.navigationPermissionCode', routerLink: { name: 'ComponentMenuPermissionCode' } },
          {
            i18nKey: 'app.aside.menu.navigationContextMenu',
            children: [
              { i18nKey: 'app.aside.menu.navigationConfigMenu', routerLink: { name: 'ComponentMenuMenuBasics' } },
              { i18nKey: 'app.aside.menu.navigationPrefixAndSuffix', routerLink: { name: 'ComponentMenuMenuIcon' } },
              { i18nKey: 'app.aside.menu.navigationIsDisabled', routerLink: { name: 'ComponentMenuMenuDisabled' } },
              { i18nKey: 'app.aside.menu.navigationIsVisible', routerLink: { name: 'ComponentMenuMenuVisible' } },
              { i18nKey: 'app.aside.menu.navigationAsyncLoading', routerLink: { name: 'ComponentMenuMenuLoading' } },
              { i18nKey: 'app.aside.menu.navigationPermissionControl', routerLink: { name: 'ComponentMenuMenuVisibleMethod' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.navigationCustomSlotTemplate',
            children: [
              { i18nKey: 'app.aside.menu.navigationCustomMenuIcon', routerLink: { name: 'ComponentMenuTemplateIcon' } },
              { i18nKey: 'app.aside.menu.navigationCustomMenuTitle', routerLink: { name: 'ComponentMenuTemplateTitle' } },
              { i18nKey: 'app.aside.menu.navigationCustomMenuItem', routerLink: { name: 'ComponentMenuTemplateOption' } }
            ]
          }
        ]
      },
      {
        i18nKey: 'app.aside.menu.navigationAnchorTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'anchor' } } },
          { i18nKey: 'app.aside.menu.navigationCustomContainer', routerLink: { name: 'ComponentAnchor' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.navigationPagerTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'pager' } } },
          { i18nKey: 'app.aside.menu.navigationSize', routerLink: { name: 'ComponentPagerSize' } },
          { i18nKey: 'app.aside.menu.navigationAlign', routerLink: { name: 'ComponentPagerAlign' } },
          { i18nKey: 'app.aside.menu.navigationCustomPageSizeList', routerLink: { name: 'ComponentPagerPageSize' } },
          { i18nKey: 'app.aside.menu.navigationCustomLayout', routerLink: { name: 'ComponentPagerLayout' } },
          {
            i18nKey: 'app.aside.menu.navigationCustomTemplate',
            children: [
              { i18nKey: 'app.aside.menu.navigationLeftArea', routerLink: { name: 'ComponentPagerTemplateLeft' } },
              { i18nKey: 'app.aside.menu.navigationRightArea', routerLink: { name: 'ComponentPagerTemplateRight' } },
              { i18nKey: 'app.aside.menu.navigationFunctionArea', routerLink: { name: 'ComponentPagerTemplateFunc' } }
            ]
          }
        ]
      },
      {
        i18nKey: 'app.aside.menu.navigationContextMenuTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'context-menu' } } },
          {
            i18nKey: 'app.aside.menu.navigationGlobalInvoke',
            children: [
              { i18nKey: 'app.aside.menu.navigationContextMenu', routerLink: { name: 'ComponentContextMenuGlobalContextMenu' } }
            ]
          },
          { i18nKey: 'app.aside.menu.navigationMenuConfig', routerLink: { name: 'ComponentContextMenuBase' } },
          { i18nKey: 'app.aside.menu.navigationPrefixAndSuffix', routerLink: { name: 'ComponentContextMenuIcon' } },
          { i18nKey: 'app.aside.menu.navigationIsDisabled', routerLink: { name: 'ComponentContextMenuDisabled' } },
          { i18nKey: 'app.aside.menu.navigationIsVisible', routerLink: { name: 'ComponentContextMenuVisible' } },
          { i18nKey: 'app.aside.menu.navigationIsLoading', routerLink: { name: 'ComponentContextMenuLoading' } },
          { i18nKey: 'app.aside.menu.navigationCustomStyle', routerLink: { name: 'ComponentContextMenuStyle' } }
        ]
      },
      stepsNavConfig
    ]
  },
  {
    i18nKey: 'app.aside.menu.dataTitle',
    icon: 'vxe-icon-form',
    showCount: true,
    children: [
      formNavConfig,
      {
        i18nKey: 'app.aside.menu.dataSwitchTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'switch' } } },
          { i18nKey: 'app.aside.menu.dataSwitchSize', routerLink: { name: 'ComponentSwitchSize' } },
          { i18nKey: 'app.aside.menu.dataSwitchDisabled', routerLink: { name: 'ComponentSwitchDisabled' } },
          { i18nKey: 'app.aside.menu.dataSwitchCustomLabel', routerLink: { name: 'ComponentSwitchLabel' } },
          { i18nKey: 'app.aside.menu.dataSwitchCustomValue', routerLink: { name: 'ComponentSwitchValue' } },
          { i18nKey: 'app.aside.menu.dataSwitchCustomIcon', routerLink: { name: 'ComponentSwitchIcon' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.dataRadioTitle',
        children: [
          { title: 'Radio API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'radio' } } },
          { title: 'Radio Button API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'radio-button' } } },
          { title: 'Radio Group API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'radio-group' } } },
          { i18nKey: 'app.aside.menu.dataRadioSize', routerLink: { name: 'ComponentRadioSize' } },
          { i18nKey: 'app.aside.menu.dataRadioCustomValue', routerLink: { name: 'ComponentRadioValue' } },
          { i18nKey: 'app.aside.menu.dataRadioDisabled', routerLink: { name: 'ComponentRadioDisabled' } },
          { i18nKey: 'app.aside.menu.dataRadioAllowCancel', routerLink: { name: 'ComponentRadioStrict' } },
          { i18nKey: 'app.aside.menu.dataRadioGroup', routerLink: { name: 'ComponentRadioGroup' } },
          { i18nKey: 'app.aside.menu.dataRadioButton', routerLink: { name: 'ComponentRadioButton' } },
          { i18nKey: 'app.aside.menu.dataRadioButtonStatus', routerLink: { name: 'ComponentRadioButtonStatus' } },
          { i18nKey: 'app.aside.menu.dataRadioButtonDisabled', routerLink: { name: 'ComponentRadioButtonDisabled' } },
          { i18nKey: 'app.aside.menu.dataRadioButtonIcon', routerLink: { name: 'ComponentRadioButtonIcon' } },
          { i18nKey: 'app.aside.menu.dataRadioOptions', routerLink: { name: 'ComponentRadioOptions' } },
          { i18nKey: 'app.aside.menu.dataRadioDefaultValue', routerLink: { name: 'ComponentRadioDefaultValue' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.dataCheckboxTitle',
        children: [
          { title: 'Checkbox API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'checkbox' } } },
          { title: 'Checkbox Button API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'checkbox-button' } } },
          { title: 'Checkbox Group API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'checkbox-group' } } },
          { i18nKey: 'app.aside.menu.dataCheckboxSize', routerLink: { name: 'ComponentCheckboxSize' } },
          { i18nKey: 'app.aside.menu.dataCheckboxIndeterminate', routerLink: { name: 'ComponentCheckboxIndeterminate' } },
          { i18nKey: 'app.aside.menu.dataCheckboxCustomValue', routerLink: { name: 'ComponentCheckboxValue' } },
          { i18nKey: 'app.aside.menu.dataCheckboxDisabled', routerLink: { name: 'ComponentCheckboxDisabled' } },
          { i18nKey: 'app.aside.menu.dataCheckboxGroup', routerLink: { name: 'ComponentCheckboxGroup' } },
          { i18nKey: 'app.aside.menu.dataCheckboxButton', routerLink: { name: 'ComponentCheckboxButton' } },
          { i18nKey: 'app.aside.menu.dataCheckboxButtonStatus', routerLink: { name: 'ComponentCheckboxButtonStatus' } },
          { i18nKey: 'app.aside.menu.dataCheckboxButtonDisabled', routerLink: { name: 'ComponentCheckboxButtonDisabled' } },
          { i18nKey: 'app.aside.menu.dataCheckboxButtonIcon', routerLink: { name: 'ComponentCheckboxButtonIcon' } },
          { i18nKey: 'app.aside.menu.dataCheckboxMax', routerLink: { name: 'ComponentCheckboxMax' } },
          { i18nKey: 'app.aside.menu.dataCheckboxOptions', routerLink: { name: 'ComponentCheckboxOptions' } },
          { i18nKey: 'app.aside.menu.dataCheckboxDefaultValue', routerLink: { name: 'ComponentCheckboxDefaultValue' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.dataRateTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'rate' } } },
          { i18nKey: 'app.aside.menu.dataRateSize', routerLink: { name: 'ComponentRateSize' } },
          { i18nKey: 'app.aside.menu.dataRateStatusColor', routerLink: { name: 'ComponentRateStatus' } },
          { i18nKey: 'app.aside.menu.dataRateDisabled', routerLink: { name: 'ComponentRateDisabled' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.dataSliderTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'slider' } } },
          { i18nKey: 'app.aside.menu.dataSliderSize', routerLink: { name: 'ComponentSliderSize' } },
          { i18nKey: 'app.aside.menu.dataSliderBase', routerLink: { name: 'ComponentSliderBase' } },
          { i18nKey: 'app.aside.menu.dataSliderStatusColor', routerLink: { name: 'ComponentSliderStatus' } },
          { i18nKey: 'app.aside.menu.dataSliderReadonly', routerLink: { name: 'ComponentSliderReadonly' } },
          { i18nKey: 'app.aside.menu.dataSliderDisabled', routerLink: { name: 'ComponentSliderDisabled' } },
          { i18nKey: 'app.aside.menu.dataSliderRange', routerLink: { name: 'ComponentSliderRange' } },
          { i18nKey: 'app.aside.menu.dataSliderValue', routerLink: { name: 'ComponentSliderValue' } },
          { i18nKey: 'app.aside.menu.dataSliderImmediate', routerLink: { name: 'ComponentSliderImmediate' } },
          { i18nKey: 'app.aside.menu.dataSliderShowTip', routerLink: { name: 'ComponentSliderShowTip' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.dataInputTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'input' } } },
          { i18nKey: 'app.aside.menu.dataInputSize', routerLink: { name: 'ComponentInputSize' } },
          { i18nKey: 'app.aside.menu.dataInputType', routerLink: { name: 'ComponentInputType' } },
          { i18nKey: 'app.aside.menu.dataInputReadonly', routerLink: { name: 'ComponentInputReadonly' } },
          { i18nKey: 'app.aside.menu.dataInputEditable', routerLink: { name: 'ComponentInputEditable' } },
          { i18nKey: 'app.aside.menu.dataInputDisabled', routerLink: { name: 'ComponentInputDisabled' } },
          { i18nKey: 'app.aside.menu.dataInputClearable', routerLink: { name: 'ComponentInputClearable' } },
          { i18nKey: 'app.aside.menu.dataInputWidth', routerLink: { name: 'ComponentInputWidth' } },
          { i18nKey: 'app.aside.menu.dataInputTrim', routerLink: { name: 'ComponentInputTrim' } },
          // { title: '密码类型', routerLink: { name: 'ComponentInputPassword' } },
          // { title: '时间类型', routerLink: { name: 'ComponentInputTime' } },
          // { title: '日期类型', routerLink: { name: 'ComponentInputDate' } },
          // { title: '日期带时间类型', routerLink: { name: 'ComponentInputDatetime' } },
          // { title: '周类型', routerLink: { name: 'ComponentInputWeek' } },
          // { title: '月度类型', routerLink: { name: 'ComponentInputMonth' } },
          // { title: '季度类型', routerLink: { name: 'ComponentInputQuarter' } },
          // { title: '年度类型', routerLink: { name: 'ComponentInputYear' } },
          // { title: '数值类型', routerLink: { name: 'ComponentInputNumber' } },
          // { title: '整数类型', routerLink: { name: 'ComponentInputInteger' } },
          // { title: '小数类型', routerLink: { name: 'ComponentInputFloat' } },
          { i18nKey: 'app.aside.menu.dataInputFloatContent', routerLink: { name: 'ComponentInputFloatContent' } },
          { i18nKey: 'app.aside.menu.dataInputCount', routerLink: { name: 'ComponentInputCount' } },
          { i18nKey: 'app.aside.menu.dataInputPrefix', routerLink: { name: 'ComponentInputPrefix' } },
          { i18nKey: 'app.aside.menu.dataInputSuffix', routerLink: { name: 'ComponentInputSuffix' } },
          {
            i18nKey: 'app.aside.menu.dataInputCustomSlotTemplate',
            children: [
              { i18nKey: 'app.aside.menu.dataInputPrefixTemplate', routerLink: { name: 'ComponentInputTemplatePrefix' } },
              { i18nKey: 'app.aside.menu.dataInputSuffixTemplate', routerLink: { name: 'ComponentInputTemplateSuffix' } }
            ]
          }
        ]
      },
      // { title: 'TextInput 单行文本输入' },
      {
        i18nKey: 'app.aside.menu.dataTextareaTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'textarea' } } },
          { i18nKey: 'app.aside.menu.dataTextareaSize', routerLink: { name: 'ComponentTextareaSize' } },
          { i18nKey: 'app.aside.menu.dataTextareaReadonly', routerLink: { name: 'ComponentTextareaReadonly' } },
          { i18nKey: 'app.aside.menu.dataTextareaEditable', routerLink: { name: 'ComponentTextareaEditable' } },
          { i18nKey: 'app.aside.menu.dataTextareaClearable', routerLink: { name: 'ComponentTextareaClearable' } },
          { i18nKey: 'app.aside.menu.dataTextareaTrim', routerLink: { name: 'ComponentTextareaTrim' } },
          { i18nKey: 'app.aside.menu.dataTextareaDisabled', routerLink: { name: 'ComponentTextareaDisabled' } },
          { i18nKey: 'app.aside.menu.dataTextareaCount', routerLink: { name: 'ComponentTextareaCount' } },
          { i18nKey: 'app.aside.menu.dataTextareaAutosize', routerLink: { name: 'ComponentTextareaAutosize' } },
          { i18nKey: 'app.aside.menu.dataTextareaResize', routerLink: { name: 'ComponentTextareaResize' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.dataNumberInputTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'number-input' } } },
          {
            i18nKey: 'app.aside.menu.dataNumberInputNumberType',
            children: [
              { i18nKey: 'app.aside.menu.dataNumberInputSize', routerLink: { name: 'ComponentNumberInputNumberSize' } },
              { i18nKey: 'app.aside.menu.dataNumberInputBase', routerLink: { name: 'ComponentNumberInputNumberBase' } },
              { i18nKey: 'app.aside.menu.dataNumberInputClearable', routerLink: { name: 'ComponentNumberInputNumberClearable' } },
              { i18nKey: 'app.aside.menu.dataNumberInputReadonly', routerLink: { name: 'ComponentNumberInputNumberReadonly' } },
              { i18nKey: 'app.aside.menu.dataNumberInputWidth', routerLink: { name: 'ComponentNumberInputNumberWidth' } },
              { i18nKey: 'app.aside.menu.dataNumberInputNegative', routerLink: { name: 'ComponentNumberInputNumberNegative' } },
              { i18nKey: 'app.aside.menu.dataNumberInputStep', routerLink: { name: 'ComponentNumberInputNumberStep' } },
              { i18nKey: 'app.aside.menu.dataNumberInputRange', routerLink: { name: 'ComponentNumberInputNumberRange' } },
              { i18nKey: 'app.aside.menu.dataNumberInputControls', routerLink: { name: 'ComponentNumberInputNumberControls' } },
              { i18nKey: 'app.aside.menu.dataNumberInputLayout', routerLink: { name: 'ComponentNumberInputNumberLayout' } },
              { i18nKey: 'app.aside.menu.dataNumberInputControlIcon', routerLink: { name: 'ComponentNumberInputNumberControlIcon' } },
              { i18nKey: 'app.aside.menu.dataNumberInputIcon', routerLink: { name: 'ComponentNumberInputNumberIcon' } },
              { i18nKey: 'app.aside.menu.dataNumberInputFloatContent', routerLink: { name: 'ComponentNumberInputNumberFloatContent' } },
              { i18nKey: 'app.aside.menu.dataNumberInputShowTip', routerLink: { name: 'ComponentNumberInputNumberShowTip' } },
              { i18nKey: 'app.aside.menu.dataNumberInputTemplate', routerLink: { name: 'ComponentNumberInputNumberTemplate' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataNumberInputIntegerType',
            children: [
              { i18nKey: 'app.aside.menu.dataNumberInputBase', routerLink: { name: 'ComponentNumberInputIntegerBase' } },
              { i18nKey: 'app.aside.menu.dataNumberInputClearable', routerLink: { name: 'ComponentNumberInputIntegerClearable' } },
              { i18nKey: 'app.aside.menu.dataNumberInputReadonly', routerLink: { name: 'ComponentNumberInputIntegerReadonly' } },
              { i18nKey: 'app.aside.menu.dataNumberInputNegative', routerLink: { name: 'ComponentNumberInputIntegerNegative' } },
              { i18nKey: 'app.aside.menu.dataNumberInputStep', routerLink: { name: 'ComponentNumberInputIntegerStep' } },
              { i18nKey: 'app.aside.menu.dataNumberInputRange', routerLink: { name: 'ComponentNumberInputIntegerRange' } },
              { i18nKey: 'app.aside.menu.dataNumberInputControls', routerLink: { name: 'ComponentNumberInputIntegerControls' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataNumberInputFloatType',
            children: [
              { i18nKey: 'app.aside.menu.dataNumberInputBase', routerLink: { name: 'ComponentNumberInputFloatBase' } },
              { i18nKey: 'app.aside.menu.dataNumberInputClearable', routerLink: { name: 'ComponentNumberInputFloatClearable' } },
              { i18nKey: 'app.aside.menu.dataNumberInputReadonly', routerLink: { name: 'ComponentNumberInputFloatReadonly' } },
              { i18nKey: 'app.aside.menu.dataNumberInputStep', routerLink: { name: 'ComponentNumberInputFloatStep' } },
              { i18nKey: 'app.aside.menu.dataNumberInputDigits', routerLink: { name: 'ComponentNumberInputFloatDigits' } },
              { i18nKey: 'app.aside.menu.dataNumberInputMode', routerLink: { name: 'ComponentNumberInputFloatMode' } },
              { i18nKey: 'app.aside.menu.dataNumberInputRange', routerLink: { name: 'ComponentNumberInputFloatRange' } },
              { i18nKey: 'app.aside.menu.dataNumberInputAutoFill', routerLink: { name: 'ComponentNumberInputFloatAutoFill' } },
              { i18nKey: 'app.aside.menu.dataNumberInputControls', routerLink: { name: 'ComponentNumberInputFloatControls' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataNumberInputAmountType',
            children: [
              { i18nKey: 'app.aside.menu.dataNumberInputBase', routerLink: { name: 'ComponentNumberInputAmountBase' } },
              { i18nKey: 'app.aside.menu.dataNumberInputAlign', routerLink: { name: 'ComponentNumberInputAmountAlign' } },
              { i18nKey: 'app.aside.menu.dataNumberInputClearable', routerLink: { name: 'ComponentNumberInputAmountClearable' } },
              { i18nKey: 'app.aside.menu.dataNumberInputReadonly', routerLink: { name: 'ComponentNumberInputAmountReadonly' } },
              { i18nKey: 'app.aside.menu.dataNumberInputNegative', routerLink: { name: 'ComponentNumberInputAmountNegative' } },
              { i18nKey: 'app.aside.menu.dataNumberInputStep', routerLink: { name: 'ComponentNumberInputAmountStep' } },
              { i18nKey: 'app.aside.menu.dataNumberInputDigits', routerLink: { name: 'ComponentNumberInputAmountDigits' } },
              { i18nKey: 'app.aside.menu.dataNumberInputMode', routerLink: { name: 'ComponentNumberInputAmountMode' } },
              { i18nKey: 'app.aside.menu.dataNumberInputRange', routerLink: { name: 'ComponentNumberInputAmountRange' } },
              { i18nKey: 'app.aside.menu.dataNumberInputAutoFill', routerLink: { name: 'ComponentNumberInputAmountAutoFill' } },
              { i18nKey: 'app.aside.menu.dataNumberInputShowCurrency', routerLink: { name: 'ComponentNumberInputAmountShowCurrency' } },
              { i18nKey: 'app.aside.menu.dataNumberInputControls', routerLink: { name: 'ComponentNumberInputAmountControls' } },
              { i18nKey: 'app.aside.menu.dataNumberInputLayout', routerLink: { name: 'ComponentNumberInputAmountLayout' } },
              { i18nKey: 'app.aside.menu.dataNumberInputControlIcon', routerLink: { name: 'ComponentNumberInputAmountControlIcon' } },
              { i18nKey: 'app.aside.menu.dataNumberInputIcon', routerLink: { name: 'ComponentNumberInputAmountIcon' } },
              { i18nKey: 'app.aside.menu.dataNumberInputFloatContent', routerLink: { name: 'ComponentNumberInputAmountFloatContent' } },
              { i18nKey: 'app.aside.menu.dataNumberInputShowTip', routerLink: { name: 'ComponentNumberInputAmountShowTip' } },
              { i18nKey: 'app.aside.menu.dataNumberInputTemplate', routerLink: { name: 'ComponentNumberInputAmountTemplate' } }
            ]
          }
        ]
      },
      {
        i18nKey: 'app.aside.menu.dataPasswordInputTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'password-input' } } },
          { i18nKey: 'app.aside.menu.dataPasswordInputSize', routerLink: { name: 'ComponentPasswordInputSize' } },
          { i18nKey: 'app.aside.menu.dataPasswordInputClearable', routerLink: { name: 'ComponentPasswordInputClearable' } },
          { i18nKey: 'app.aside.menu.dataPasswordInputReadonly', routerLink: { name: 'ComponentPasswordInputReadonly' } },
          { i18nKey: 'app.aside.menu.dataPasswordInputEditable', routerLink: { name: 'ComponentPasswordInputEditable' } },
          { i18nKey: 'app.aside.menu.dataPasswordInputWidth', routerLink: { name: 'ComponentPasswordInputWidth' } },
          { i18nKey: 'app.aside.menu.dataPasswordInputIcon', routerLink: { name: 'ComponentPasswordInputIcon' } },
          { i18nKey: 'app.aside.menu.dataPasswordInputFloatContent', routerLink: { name: 'ComponentPasswordInputFloatContent' } },
          // { title: '显示 Tooltip 提示', routerLink: { name: 'ComponentPasswordInputShowTip' } },
          { i18nKey: 'app.aside.menu.dataPasswordInputControls', routerLink: { name: 'ComponentPasswordInputControls' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.dataColorPickerTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'color-picker' } } },
          {
            i18nKey: 'app.aside.menu.dataColorPickerGlobalInvoke',
            children: [
              { i18nKey: 'app.aside.menu.dataColorPickerFormatConversion', routerLink: { name: 'ComponentUploadGlobalColorType' } },
              { i18nKey: 'app.aside.menu.dataColorPickerParseToFormat', routerLink: { name: 'ComponentUploadGlobalColorParse' } },
              { i18nKey: 'app.aside.menu.dataColorPickerEffectProcessing', routerLink: { name: 'ComponentUploadGlobalColorEffect' } }
            ]
          },
          { i18nKey: 'app.aside.menu.dataColorPickerSize', routerLink: { name: 'ComponentColorPickerSize' } },
          { i18nKey: 'app.aside.menu.dataColorPickerClearable', routerLink: { name: 'ComponentColorPickerClearable' } },
          { i18nKey: 'app.aside.menu.dataColorPickerDefaultColor', routerLink: { name: 'ComponentColorPickerDefaultColor' } },
          { i18nKey: 'app.aside.menu.dataColorPickerColors', routerLink: { name: 'ComponentColorPickerColors' } },
          { i18nKey: 'app.aside.menu.dataColorPickerRgb', routerLink: { name: 'ComponentColorPickerRgb' } },
          { i18nKey: 'app.aside.menu.dataColorPickerHex', routerLink: { name: 'ComponentColorPickerHex' } },
          { i18nKey: 'app.aside.menu.dataColorPickerEyeDropper', routerLink: { name: 'ComponentColorPickerShowEyeDropper' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.dataIconPickerTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'icon-picker' } } },
          {
            i18nKey: 'app.aside.menu.dataIconPickerBase',
            children: [
              { i18nKey: 'app.aside.menu.dataIconPickerSize', routerLink: { name: 'ComponentIconPickerBaseSize' } },
              { i18nKey: 'app.aside.menu.dataIconPickerClearable', routerLink: { name: 'ComponentIconPickerBaseClearable' } },
              { i18nKey: 'app.aside.menu.dataIconPickerReadonly', routerLink: { name: 'ComponentIconPickerBaseReadonly' } },
              { i18nKey: 'app.aside.menu.dataIconPickerDisabled', routerLink: { name: 'ComponentIconPickerBaseDisabled' } },
              { i18nKey: 'app.aside.menu.dataIconPickerBuiltinIcons', routerLink: { name: 'ComponentIconPickerBaseIcons' } },
              { i18nKey: 'app.aside.menu.dataIconPickerCustomIcon', routerLink: { name: 'ComponentIconPickerBaseCustomIcon' } },
              { i18nKey: 'app.aside.menu.dataIconPickerShowIconTitle', routerLink: { name: 'ComponentIconPickerBaseTitle' } },
              { i18nKey: 'app.aside.menu.dataIconPickerIconColor', routerLink: { name: 'ComponentIconPickerBaseColor' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataIconPickerSearchable',
            children: [
              { i18nKey: 'app.aside.menu.dataIconPickerSearchable', routerLink: { name: 'ComponentIconPickerSearchFilterable' } },
              { i18nKey: 'app.aside.menu.dataIconPickerCustomFilterMethod', routerLink: { name: 'ComponentIconPickerSearchFilterMethod' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataIconPickerPanelSettings',
            children: [
              { i18nKey: 'app.aside.menu.dataIconPickerPanelWH', routerLink: { name: 'ComponentIconPickerPopupWh' } },
              { i18nKey: 'app.aside.menu.dataIconPickerPanelChunkSize', routerLink: { name: 'ComponentIconPickerPopupChunkSize' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.iconPickerGlobalRenderer',
            children: [
              { title: 'API', routerLink: { name: 'GlobalRendererIconPickerAPI' } },
              { i18nKey: 'app.aside.menu.dataIconPickerOptionIcon', routerLink: { name: 'GlobalRendererIconPickerIcon' } }
            ]
          },
          { i18nKey: 'app.aside.menu.dataIconPickerUseThirdPartyIcon', isPlugin: true, linkUrl: `${otherUrl}#/other-iconfont/symbol/icon-picker/icons`, linkTarget: '_blank' }
        ]
      },
      datePickerNavConfig,
      {
        // 日期范围选择器
        i18nKey: 'app.aside.menu.dataDateRangePickerTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'date-range-picker' } } },
          {
            // 日期类型
            i18nKey: 'app.aside.menu.dataDateRangePickerDateType',
            children: [
              // 尺寸
              { i18nKey: 'app.aside.menu.dataDateRangePickerSize', routerLink: { name: 'ComponentDateRangePickerDateSize' } },
              // 基础
              { i18nKey: 'app.aside.menu.dataDateRangePickerBase', routerLink: { name: 'ComponentDateRangePickerDateBase' } },
              // 值类型
              { i18nKey: 'app.aside.menu.dataDateRangePickerValueType', routerLink: { name: 'ComponentDateRangePickerDateValueType' } },
              // 可清除
              { i18nKey: 'app.aside.menu.dataDateRangePickerClearable', routerLink: { name: 'ComponentDateRangePickerDateClearable' } },
              // 禁用
              { i18nKey: 'app.aside.menu.dataDateRangePickerDisabled', routerLink: { name: 'ComponentDateRangePickerDateDisabled' } },
              // 只读
              { i18nKey: 'app.aside.menu.dataDateRangePickerReadonly', routerLink: { name: 'ComponentDateRangePickerDateReadonly' } },
              // 自动关闭
              { i18nKey: 'app.aside.menu.dataDateRangePickerAutoClose', routerLink: { name: 'ComponentDateRangePickerDateAutoClose' } },
              {
                // 快捷方式
                i18nKey: 'app.aside.menu.dataDateRangePickerShortcut',
                children: [
                  // 内置 Code
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutCode', routerLink: { name: 'ComponentDateRangePickerDateShortcutCode' } },
                  // 按钮状态
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutStatus', routerLink: { name: 'ComponentDateRangePickerDateShortcutStatus' } },
                  // 显示位置
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutPosition', routerLink: { name: 'ComponentDateRangePickerDateShortcutPosition' } },
                  // 自定义
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutCustom', routerLink: { name: 'ComponentDateRangePickerDateShortcutCustom' } }
                ]
              },
              // 禁用方法
              { i18nKey: 'app.aside.menu.dataDateRangePickerDisabledMethod', routerLink: { name: 'ComponentDateRangePickerDateDisabledMethod' } },
              // 前缀图标
              { i18nKey: 'app.aside.menu.dataDateRangePickerPrefixIcon', routerLink: { name: 'ComponentDateRangePickerDatePrefixIcon' } },
              // 后缀图标
              { i18nKey: 'app.aside.menu.dataDateRangePickerSuffixIcon', routerLink: { name: 'ComponentDateRangePickerDateSuffixIcon' } },
              // 默认值
              { i18nKey: 'app.aside.menu.dataDateRangePickerDefVal', routerLink: { name: 'ComponentDateRangePickerDateDefVal' } },
              // 触发方式
              { i18nKey: 'app.aside.menu.dataDateRangePickerTrigger', routerLink: { name: 'ComponentDateRangePickerDateTrigger' } },
              // 联动面板
              { i18nKey: 'app.aside.menu.dataDateRangePickerLinkedPanels', routerLink: { name: 'ComponentDateRangePickerDateLinkedPanels' } },
              {
                // 自定义插槽模板
                i18nKey: 'app.aside.menu.dataDateRangePickerCustomSlotTemplate',
                children: [
                  // 自定义顶部模板
                  { i18nKey: 'app.aside.menu.dataDateRangePickerCustomTopTemplate', routerLink: { name: 'ComponentDateRangePickerDateTemplateTop' } },
                  // 自定义底部模板
                  { i18nKey: 'app.aside.menu.dataDateRangePickerCustomBottomTemplate', routerLink: { name: 'ComponentDateRangePickerDateTemplateBottom' } },
                  // 自定义左侧模板
                  { i18nKey: 'app.aside.menu.dataDateRangePickerCustomLeftTemplate', routerLink: { name: 'ComponentDateRangePickerDateTemplateLeft' } },
                  // 自定义右侧模板
                  { i18nKey: 'app.aside.menu.dataDateRangePickerCustomRightTemplate', routerLink: { name: 'ComponentDateRangePickerDateTemplateRight' } }
                ]
              }
            ]
          },
          {
            // 时间类型
            i18nKey: 'app.aside.menu.dataDateRangePickerTimeType',
            children: [
              // 尺寸
              { i18nKey: 'app.aside.menu.dataDateRangePickerSize', routerLink: { name: 'ComponentDateRangePickerTimeSize' } },
              // 基础
              { i18nKey: 'app.aside.menu.dataDateRangePickerBase', routerLink: { name: 'ComponentDateRangePickerTimeBase' } },
              // 可清除
              { i18nKey: 'app.aside.menu.dataDateRangePickerClearable', routerLink: { name: 'ComponentDateRangePickerTimeClearable' } },
              // 禁用
              { i18nKey: 'app.aside.menu.dataDateRangePickerDisabled', routerLink: { name: 'ComponentDateRangePickerTimeDisabled' } },
              // 值格式
              { i18nKey: 'app.aside.menu.dataDateRangePickerValueFormat', routerLink: { name: 'ComponentDateRangePickerTimeValueFormat' } },
              {
                // 快捷方式
                i18nKey: 'app.aside.menu.dataDateRangePickerShortcut',
                children: [
                  // { title: '内置 Code', routerLink: { name: 'ComponentDateRangePickerTimeShortcutCode' } },
                  // { title: '按钮状态颜色', routerLink: { name: 'ComponentDateRangePickerTimeShortcutStatus' } },
                  // { title: '显示位置', routerLink: { name: 'ComponentDateRangePickerTimeShortcutPosition' } },
                  // 自定义
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutCustom', routerLink: { name: 'ComponentDateRangePickerTimeShortcutCustom' } }
                ]
              },
              // 默认值
              { i18nKey: 'app.aside.menu.dataDateRangePickerDefVal', routerLink: { name: 'ComponentDateRangePickerTimeDefVal' } },
              // 禁用选项
              { i18nKey: 'app.aside.menu.dataDateRangePickerDisabledOpt', routerLink: { name: 'ComponentDateRangePickerTimeDisabledOpt' } },
              // 选项
              { i18nKey: 'app.aside.menu.dataDateRangePickerOpts', routerLink: { name: 'ComponentDateRangePickerTimeOpts' } },
              {
                // 自定义插槽模板
                i18nKey: 'app.aside.menu.dataDateRangePickerCustomSlotTemplate',
                children: [
                  // 自定义顶部模板
                  { i18nKey: 'app.aside.menu.dataDateRangePickerCustomTopTemplate', routerLink: { name: 'ComponentDateRangePickerTimeTemplateTop' } },
                  // 自定义底部模板
                  { i18nKey: 'app.aside.menu.dataDateRangePickerCustomBottomTemplate', routerLink: { name: 'ComponentDateRangePickerTimeTemplateBottom' } },
                  // 自定义左侧模板
                  { i18nKey: 'app.aside.menu.dataDateRangePickerCustomLeftTemplate', routerLink: { name: 'ComponentDateRangePickerTimeTemplateLeft' } },
                  // 自定义右侧模板
                  { i18nKey: 'app.aside.menu.dataDateRangePickerCustomRightTemplate', routerLink: { name: 'ComponentDateRangePickerTimeTemplateRight' } }
                ]
              }
            ]
          },
          {
            // 日期时间类型
            i18nKey: 'app.aside.menu.dataDateRangePickerDatetimeType',
            children: [
              // 基础
              { i18nKey: 'app.aside.menu.dataDateRangePickerBase', routerLink: { name: 'ComponentDateRangePickerDatetimeBase' } },
              // 禁用
              { i18nKey: 'app.aside.menu.dataDateRangePickerDisabled', routerLink: { name: 'ComponentDateRangePickerDatetimeDisabled' } },
              // 可清除
              { i18nKey: 'app.aside.menu.dataDateRangePickerClearable', routerLink: { name: 'ComponentDateRangePickerDatetimeClearable' } },
              // 值格式
              { i18nKey: 'app.aside.menu.dataDateRangePickerValueFormat', routerLink: { name: 'ComponentDateRangePickerDatetimeValueFormat' } },
              {
                // 快捷方式
                i18nKey: 'app.aside.menu.dataDateRangePickerShortcut',
                children: [
                  // 内置 Code
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutCode', routerLink: { name: 'ComponentDateRangePickerDatetimeShortcutCode' } },
                  // 按钮状态
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutStatus', routerLink: { name: 'ComponentDateRangePickerDatetimeShortcutStatus' } },
                  // 显示位置
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutPosition', routerLink: { name: 'ComponentDateRangePickerDatetimeShortcutPosition' } },
                  // 自定义
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutCustom', routerLink: { name: 'ComponentDateRangePickerDatetimeShortcutCustom' } }
                ]
              },
              // 默认值
              { i18nKey: 'app.aside.menu.dataDateRangePickerDefVal', routerLink: { name: 'ComponentDateRangePickerDatetimeDefVal' } },
              // 禁用选项
              { i18nKey: 'app.aside.menu.dataDateRangePickerDisabledOpt', routerLink: { name: 'ComponentDateRangePickerDatetimeDisabledOpt' } },
              // 选项
              { i18nKey: 'app.aside.menu.dataDateRangePickerOpts', routerLink: { name: 'ComponentDateRangePickerDatetimeOpts' } },
              // 联动面板
              { i18nKey: 'app.aside.menu.dataDateRangePickerLinkedPanels', routerLink: { name: 'ComponentDateRangePickerDatetimeLinkedPanels' } },
              {
                // 自定义插槽模板
                i18nKey: 'app.aside.menu.dataDateRangePickerCustomSlotTemplate',
                children: [
                  // 自定义顶部模板
                  { i18nKey: 'app.aside.menu.dataDateRangePickerCustomTopTemplate', routerLink: { name: 'ComponentDateRangePickerDatetimeTemplateTop' } },
                  // 自定义底部模板
                  { i18nKey: 'app.aside.menu.dataDateRangePickerCustomBottomTemplate', routerLink: { name: 'ComponentDateRangePickerDatetimeTemplateBottom' } },
                  // 自定义左侧模板
                  { i18nKey: 'app.aside.menu.dataDateRangePickerCustomLeftTemplate', routerLink: { name: 'ComponentDateRangePickerDatetimeTemplateLeft' } },
                  // 自定义右侧模板
                  { i18nKey: 'app.aside.menu.dataDateRangePickerCustomRightTemplate', routerLink: { name: 'ComponentDateRangePickerDatetimeTemplateRight' } }
                ]
              }
            ]
          },
          {
            // 周类型
            i18nKey: 'app.aside.menu.dataDateRangePickerWeekType',
            children: [
              // 基础
              { i18nKey: 'app.aside.menu.dataDateRangePickerBase', routerLink: { name: 'ComponentDateRangePickerWeekBase' } },
              // 禁用
              { i18nKey: 'app.aside.menu.dataDateRangePickerDisabled', routerLink: { name: 'ComponentDateRangePickerWeekDisabled' } },
              // 可清除
              { i18nKey: 'app.aside.menu.dataDateRangePickerClearable', routerLink: { name: 'ComponentDateRangePickerWeekClearable' } },
              // 开始日
              { i18nKey: 'app.aside.menu.dataDateRangePickerStartDay', routerLink: { name: 'ComponentDateRangePickerWeekStartDay' } },
              // 选择日
              { i18nKey: 'app.aside.menu.dataDateRangePickerSelectDay', routerLink: { name: 'ComponentDateRangePickerWeekSelectDay' } },
              {
                // 快捷方式
                i18nKey: 'app.aside.menu.dataDateRangePickerShortcut',
                children: [
                  // 内置 Code
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutCode', routerLink: { name: 'ComponentDateRangePickerWeekShortcutCode' } },
                  // 按钮状态
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutStatus', routerLink: { name: 'ComponentDateRangePickerWeekShortcutStatus' } },
                  // 显示位置
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutPosition', routerLink: { name: 'ComponentDateRangePickerWeekShortcutPosition' } },
                  // 自定义
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutCustom', routerLink: { name: 'ComponentDateRangePickerWeekShortcutCustom' } }
                ]
              },
              // 联动面板
              { i18nKey: 'app.aside.menu.dataDateRangePickerLinkedPanels', routerLink: { name: 'ComponentDateRangePickerWeekLinkedPanels' } },
              {
                // 自定义插槽模板
                i18nKey: 'app.aside.menu.dataDateRangePickerCustomSlotTemplate',
                children: [
                  // 自定义顶部模板
                  { i18nKey: 'app.aside.menu.dataDateRangePickerCustomTopTemplate', routerLink: { name: 'ComponentDateRangePickerWeekTemplateTop' } },
                  // 自定义底部模板
                  { i18nKey: 'app.aside.menu.dataDateRangePickerCustomBottomTemplate', routerLink: { name: 'ComponentDateRangePickerWeekTemplateBottom' } },
                  // 自定义左侧模板
                  { i18nKey: 'app.aside.menu.dataDateRangePickerCustomLeftTemplate', routerLink: { name: 'ComponentDateRangePickerWeekTemplateLeft' } },
                  // 自定义右侧模板
                  { i18nKey: 'app.aside.menu.dataDateRangePickerCustomRightTemplate', routerLink: { name: 'ComponentDateRangePickerWeekTemplateRight' } }
                ]
              }
            ]
          },
          {
            // 月类型
            i18nKey: 'app.aside.menu.dataDateRangePickerMonthType',
            children: [
              // 基础
              { i18nKey: 'app.aside.menu.dataDateRangePickerBase', routerLink: { name: 'ComponentDateRangePickerMonthBase' } },
              // 可清除
              { i18nKey: 'app.aside.menu.dataDateRangePickerClearable', routerLink: { name: 'ComponentDateRangePickerMonthClearable' } },
              {
                // 快捷方式
                i18nKey: 'app.aside.menu.dataDateRangePickerShortcut',
                children: [
                  // 内置 Code
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutCode', routerLink: { name: 'ComponentDateRangePickerMonthShortcutCode' } },
                  // 按钮状态
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutStatus', routerLink: { name: 'ComponentDateRangePickerMonthShortcutStatus' } },
                  // 显示位置
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutPosition', routerLink: { name: 'ComponentDateRangePickerMonthShortcutPosition' } },
                  // 自定义
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutCustom', routerLink: { name: 'ComponentDateRangePickerMonthShortcutCustom' } }
                ]
              }
            ]
          },
          {
            // 季度类型
            i18nKey: 'app.aside.menu.dataDateRangePickerQuarterType',
            children: [
              // 基础
              { i18nKey: 'app.aside.menu.dataDateRangePickerBase', routerLink: { name: 'ComponentDateRangePickerQuarterBase' } },
              // 可清除
              { i18nKey: 'app.aside.menu.dataDateRangePickerClearable', routerLink: { name: 'ComponentDateRangePickerQuarterClearable' } },
              {
                // 快捷方式
                i18nKey: 'app.aside.menu.dataDateRangePickerShortcut',
                children: [
                  // 内置 Code
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutCode', routerLink: { name: 'ComponentDateRangePickerQuarterShortcutCode' } },
                  // 按钮状态
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutStatus', routerLink: { name: 'ComponentDateRangePickerQuarterShortcutStatus' } },
                  // 显示位置
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutPosition', routerLink: { name: 'ComponentDateRangePickerQuarterShortcutPosition' } },
                  // 自定义
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutCustom', routerLink: { name: 'ComponentDateRangePickerQuarterShortcutCustom' } }
                ]
              }
            ]
          },
          {
            // 年类型
            i18nKey: 'app.aside.menu.dataDateRangePickerYearType',
            children: [
              // 基础
              { i18nKey: 'app.aside.menu.dataDateRangePickerBase', routerLink: { name: 'ComponentDateRangePickerYearBase' } },
              // 可清除
              { i18nKey: 'app.aside.menu.dataDateRangePickerClearable', routerLink: { name: 'ComponentDateRangePickerYearClearable' } },
              {
                // 快捷方式
                i18nKey: 'app.aside.menu.dataDateRangePickerShortcut',
                children: [
                  // 内置 Code
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutCode', routerLink: { name: 'ComponentDateRangePickerYearShortcutCode' } },
                  // 按钮状态
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutStatus', routerLink: { name: 'ComponentDateRangePickerYearShortcutStatus' } },
                  // 显示位置
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutPosition', routerLink: { name: 'ComponentDateRangePickerYearShortcutPosition' } },
                  // 自定义
                  { i18nKey: 'app.aside.menu.dataDateRangePickerShortcutCustom', routerLink: { name: 'ComponentDateRangePickerYearShortcutCustom' } }
                ]
              }
            ]
          },
          {
            // 功能示例
            i18nKey: 'app.aside.menu.dataDateRangePickerFeatureExamples',
            children: [
              // 节日方法
              { i18nKey: 'app.aside.menu.dataDateRangePickerFestivalMethod', routerLink: { name: 'ComponentDateRangePickerFestivalMethod' } },
              // 节假日
              { i18nKey: 'app.aside.menu.dataDateRangePickerHolidays', routerLink: { name: 'ComponentDateRangePickerHolidays' } }
            ]
          },
          {
            // 快捷方式全局命令
            i18nKey: 'app.aside.menu.dataDateRangePickerShortcutGlobalCommands',
            children: [
              { title: 'API', routerLink: { name: 'GlobalCommandsDateRangePickerAPI' } },
              // 快捷方式
              { i18nKey: 'app.aside.menu.dataDateRangePickerShortcut', routerLink: { name: 'GlobalCommandsDateRangePickerBase' } }
            ]
          }
        ]
      },
      {
        i18nKey: 'app.aside.menu.dataPulldownTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'pulldown' } }, keywords: 'vxe-pulldown' },
          { i18nKey: 'app.aside.menu.dataPulldownBase', routerLink: { name: 'ComponentPulldownBase' } },
          { i18nKey: 'app.aside.menu.dataPulldownOptions', routerLink: { name: 'ComponentPulldownOptions' } },
          {
            i18nKey: 'app.aside.menu.dataPulldownCustomSlotTemplate',
            children: [
              { i18nKey: 'app.aside.menu.dataPulldownCustomHeaderTemplate', routerLink: { name: 'ComponentPulldownTemplateHeader' } },
              { i18nKey: 'app.aside.menu.dataPulldownCustomFooterTemplate', routerLink: { name: 'ComponentPulldownTemplateFooter' } },
              { i18nKey: 'app.aside.menu.dataPulldownCustomDropdownTemplate', routerLink: { name: 'ComponentPulldownTemplateDropdown' } }
            ]
          },
          { i18nKey: 'app.aside.menu.dataPulldownSearchable', routerLink: { name: 'ComponentPulldownSelect' } },
          { i18nKey: 'app.aside.menu.dataPulldownUserSelect', routerLink: { name: 'ComponentPulldownSelectUser' } },
          { i18nKey: 'app.aside.menu.dataPulldownTable', routerLink: { name: 'ComponentPulldownTable' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.dataSelectTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'select' } } },
          {
            i18nKey: 'app.aside.menu.dataSelectBase',
            children: [
              { i18nKey: 'app.aside.menu.dataSelectSize', routerLink: { name: 'ComponentSelectBaseSize' } },
              { i18nKey: 'app.aside.menu.dataSelectClearable', routerLink: { name: 'ComponentSelectBaseClearable' } },
              { i18nKey: 'app.aside.menu.dataSelectDisabled', routerLink: { name: 'ComponentSelectBaseDisabled' } },
              { i18nKey: 'app.aside.menu.dataSelectCustomIcon', routerLink: { name: 'ComponentSelectBaseIcon' } },
              { i18nKey: 'app.aside.menu.dataSelectRadio', routerLink: { name: 'ComponentSelectBaseRadio' } },
              { i18nKey: 'app.aside.menu.dataSelectLoading', routerLink: { name: 'ComponentSelectBaseLoading' } },
              { i18nKey: 'app.aside.menu.dataSelectFilterable', routerLink: { name: 'ComponentSelectBaseFilterable' } },
              { i18nKey: 'app.aside.menu.dataSelectRemote', routerLink: { name: 'ComponentSelectBaseRemote' } },
              { i18nKey: 'app.aside.menu.dataSelectGroup', routerLink: { name: 'ComponentSelectBaseGroup' } },
              { i18nKey: 'app.aside.menu.dataSelectEmptyValue', routerLink: { name: 'ComponentSelectBaseEmptyValue' } },
              { i18nKey: 'app.aside.menu.dataSelectDefaultValue', routerLink: { name: 'ComponentSelectBaseDefaultValue' } },
              { i18nKey: 'app.aside.menu.dataSelectMultiple', routerLink: { name: 'ComponentSelectBaseMultiple' } },
              { i18nKey: 'app.aside.menu.dataSelectCheckbox', routerLink: { name: 'ComponentSelectBaseCheckbox' } },
              { i18nKey: 'app.aside.menu.dataSelectMax', routerLink: { name: 'ComponentSelectBaseMax' } },
              { i18nKey: 'app.aside.menu.dataSelectPopupWH', routerLink: { name: 'ComponentSelectBasePopupWH' } },
              { i18nKey: 'app.aside.menu.dataSelectAllowCreate', routerLink: { name: 'ComponentSelectBaseAllowCreate' } },
              { i18nKey: 'app.aside.menu.dataSelectOperBtn', routerLink: { name: 'ComponentSelectBaseOperBtn' } },
              { i18nKey: 'app.aside.menu.dataSelectTrigger', routerLink: { name: 'ComponentSelectBaseTrigger' } },
              { i18nKey: 'app.aside.menu.dataSelectTemplate', routerLink: { name: 'ComponentSelectBaseTemplate' } },
              { i18nKey: 'app.aside.menu.dataSelectScroll', routerLink: { name: 'ComponentSelectBaseScroll' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataSelectConfig',
            children: [
              { i18nKey: 'app.aside.menu.dataSelectClearable', routerLink: { name: 'ComponentSelectConfigClearable' } },
              { i18nKey: 'app.aside.menu.dataSelectDisabled', routerLink: { name: 'ComponentSelectConfigDisabled' } },
              { i18nKey: 'app.aside.menu.dataSelectWidth', routerLink: { name: 'ComponentSelectConfigWidth' } },
              { i18nKey: 'app.aside.menu.dataSelectRadio', routerLink: { name: 'ComponentSelectConfigRadio' } },
              { i18nKey: 'app.aside.menu.dataSelectLoading', routerLink: { name: 'ComponentSelectConfigLoading' } },
              { i18nKey: 'app.aside.menu.dataSelectShowBadge', routerLink: { name: 'ComponentSelectConfigBadge' } },
              { i18nKey: 'app.aside.menu.dataSelectFilterable', routerLink: { name: 'ComponentSelectConfigFilterable' } },
              { i18nKey: 'app.aside.menu.dataSelectRemote', routerLink: { name: 'ComponentSelectConfigRemote' } },
              { i18nKey: 'app.aside.menu.dataSelectGroup', routerLink: { name: 'ComponentSelectConfigGroup' } },
              { i18nKey: 'app.aside.menu.dataSelectEmptyValue', routerLink: { name: 'ComponentSelectConfigEmptyValue' } },
              { i18nKey: 'app.aside.menu.dataSelectDefaultValue', routerLink: { name: 'ComponentSelectConfigDefaultValue' } },
              { i18nKey: 'app.aside.menu.dataSelectMultiple', routerLink: { name: 'ComponentSelectConfigMultiple' } },
              { i18nKey: 'app.aside.menu.dataSelectCheckbox', routerLink: { name: 'ComponentSelectConfigCheckbox' } },
              { i18nKey: 'app.aside.menu.dataSelectMax', routerLink: { name: 'ComponentSelectConfigMax' } },
              { i18nKey: 'app.aside.menu.dataSelectPopupWH', routerLink: { name: 'ComponentSelectConfigPopupWH' } },
              { i18nKey: 'app.aside.menu.dataSelectAllowCreate', routerLink: { name: 'ComponentSelectConfigAllowCreate' } },
              { i18nKey: 'app.aside.menu.dataSelectOperBtn', routerLink: { name: 'ComponentSelectConfigOperBtn' } },
              { i18nKey: 'app.aside.menu.dataSelectTrigger', routerLink: { name: 'ComponentSelectConfigTrigger' } },
              { i18nKey: 'app.aside.menu.dataSelectTemplate', routerLink: { name: 'ComponentSelectConfigTemplate' } },
              { i18nKey: 'app.aside.menu.dataSelectScroll', routerLink: { name: 'ComponentSelectConfigScroll' } },
              { i18nKey: 'app.aside.menu.dataSelectUserSelect', routerLink: { name: 'ComponentSelectConfigUserSelect' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.displayScrollbar',
            children: [
              {
                i18nKey: 'app.aside.menu.displayNativeScrollbar',
                children: [
                  { i18nKey: 'app.aside.menu.displayUseScrollbar', routerLink: { name: 'ComponentSelectScrollbarNativeScrollbar' } }
                ]
              },
              {
                i18nKey: 'app.aside.menu.displayVirtualScrollbar',
                children: [
                  { i18nKey: 'app.aside.menu.displayUseScrollbar', routerLink: { name: 'ComponentSelectScrollbarUseScrollbarScrollbar' } }
                ]
              }
            ]
          }
        ]
      },
      {
        i18nKey: 'app.aside.menu.dataCascaderTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'cascader' } } },
          {
            i18nKey: 'app.aside.menu.dataCascaderBase',
            children: [
              { i18nKey: 'app.aside.menu.dataCascaderSize', routerLink: { name: 'ComponentCascaderBaseSize' } },
              { i18nKey: 'app.aside.menu.dataCascaderHierarchy', routerLink: { name: 'ComponentCascaderBaseHierarchy' } },
              { i18nKey: 'app.aside.menu.dataCascaderLeveling', routerLink: { name: 'ComponentCascaderBaseLeveling' } },
              { i18nKey: 'app.aside.menu.dataCascaderMultiple', routerLink: { name: 'ComponentCascaderBaseMultiple' } },
              { i18nKey: 'app.aside.menu.dataCascaderCustomIcon', routerLink: { name: 'ComponentCascaderBaseIcon' } },
              { i18nKey: 'app.aside.menu.dataCascaderCustomField', routerLink: { name: 'ComponentCascaderBaseOptionProps' } },
              { i18nKey: 'app.aside.menu.dataCascaderFullLabel', routerLink: { name: 'ComponentCascaderBaseFullLabel' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataCascaderRadio',
            children: [
              { i18nKey: 'app.aside.menu.dataCascaderShowRadio', routerLink: { name: 'ComponentCascaderRadioBase' } },
              { i18nKey: 'app.aside.menu.dataCascaderSelectChildNode', routerLink: { name: 'ComponentCascaderRadioTrigger' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataCascaderCheckbox',
            children: [
              { i18nKey: 'app.aside.menu.dataCascaderShowCheckbox', routerLink: { name: 'ComponentCascaderCheckboxBase' } },
              { i18nKey: 'app.aside.menu.dataCascaderCheckStrictly', routerLink: { name: 'ComponentCascaderCheckboxCheckStrictly' } },
              { i18nKey: 'app.aside.menu.dataCascaderSelectChildNode', routerLink: { name: 'ComponentCascaderCheckboxTrigger' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataCascaderSearch',
            children: [
              { i18nKey: 'app.aside.menu.dataCascaderFilterValue', routerLink: { name: 'ComponentCascaderSearchFilterValue' } },
              { i18nKey: 'app.aside.menu.dataCascaderCustomFilterMethod', routerLink: { name: 'ComponentCascaderSearchFilterMethod' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataCascaderOperBtn',
            children: [
              { i18nKey: 'app.aside.menu.dataCascaderCloseButton', routerLink: { name: 'ComponentCascaderOperBtnClose' } },
              { i18nKey: 'app.aside.menu.dataCascaderCheckedButton', routerLink: { name: 'ComponentCascaderOperBtnChecked' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataCascaderFeatureExamples',
            children: [
              { i18nKey: 'app.aside.menu.dataCascaderRegion', routerLink: { name: 'ComponentCascaderOtherRegion' } }
            ]
          }
        ]
      },
      {
        i18nKey: 'app.aside.menu.dataTreeSelectTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tree-select' } } },
          {
            i18nKey: 'app.aside.menu.dataTreeSelectBase',
            children: [
              { i18nKey: 'app.aside.menu.dataTreeSelectSize', routerLink: { name: 'ComponentTreeSelectBaseSize' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectHierarchy', routerLink: { name: 'ComponentTreeSelectBaseHierarchy' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectLeveling', routerLink: { name: 'ComponentTreeSelectBaseLeveling' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectMultiple', routerLink: { name: 'ComponentTreeSelectBaseMultiple' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectCustomIcon', routerLink: { name: 'ComponentTreeSelectBaseIcon' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectCustomField', routerLink: { name: 'ComponentTreeSelectBaseOptionProps' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectFullLabel', routerLink: { name: 'ComponentTreeSelectBaseFullLabel' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectPopupWH', routerLink: { name: 'ComponentTreeSelectBasePopupWH' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectShowLine', routerLink: { name: 'ComponentTreeSelectBaseShowLine' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectExpandAll', routerLink: { name: 'ComponentTreeSelectBaseExpandAll' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectSelectChildNode', routerLink: { name: 'ComponentTreeSelectBaseTrigger' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataTreeSelectRadio',
            children: [
              { i18nKey: 'app.aside.menu.dataTreeSelectShowRadio', routerLink: { name: 'ComponentTreeSelectRadioBase' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectCheckMethod', routerLink: { name: 'ComponentTreeSelectRadioCheckMethod' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectVisibleMethod', routerLink: { name: 'ComponentTreeSelectRadioVisibleMethod' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectSelectChildNode', routerLink: { name: 'ComponentTreeSelectRadioTrigger' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataTreeSelectCheckbox',
            children: [
              { i18nKey: 'app.aside.menu.dataTreeSelectShowCheckbox', routerLink: { name: 'ComponentTreeSelectCheckboxBase' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectCheckStrictly', routerLink: { name: 'ComponentTreeSelectCheckboxCheckStrictly' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectCheckMethod', routerLink: { name: 'ComponentTreeSelectCheckboxCheckMethod' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectVisibleMethod', routerLink: { name: 'ComponentTreeSelectCheckboxVisibleMethod' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectSelectChildNode', routerLink: { name: 'ComponentTreeSelectCheckboxTrigger' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectNodeColor', routerLink: { name: 'ComponentTreeSelectCheckboxColor' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataTreeSelectLocalSearch',
            children: [
              { i18nKey: 'app.aside.menu.dataTreeSelectFilterValue', routerLink: { name: 'ComponentTreeSelectSearchFilterValue' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectCustomFilterMethod', routerLink: { name: 'ComponentTreeSelectSearchFilterMethod' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataTreeSelectRemoteSearch',
            children: [
              { i18nKey: 'app.aside.menu.dataTreeSelectAutoLoad', routerLink: { name: 'ComponentTreeSelectRemoteAutoLoad' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataTreeSelectOperBtn',
            children: [
              { i18nKey: 'app.aside.menu.dataTreeSelectCheckedButton', routerLink: { name: 'ComponentTreeSelectOperBtnChecked' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectToggleButton', routerLink: { name: 'ComponentTreeSelectOperBtnAll' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataTreeSelectLazyLoad',
            children: [
              { i18nKey: 'app.aside.menu.dataTreeSelectLazyBase', routerLink: { name: 'ComponentTreeSelectLazyBase' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectLazyMultiple', routerLink: { name: 'ComponentTreeSelectLazyMultiple' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectLazyOptions', routerLink: { name: 'ComponentTreeSelectLazyLazyOptions' } }
            ]
          },
          // {
          //   title: '右键菜单',
          //   children: [
          //     { title: '配置菜单', routerLink: { name: 'ComponentTreeSelectMenuBasics' } },
          //     { title: '权限控制', routerLink: { name: 'ComponentTreeSelectMenuVisibleMethod' } }
          //   ]
          // },
          {
            i18nKey: 'app.aside.menu.dataTreeSelectVirtualScroll',
            children: [
              { i18nKey: 'app.aside.menu.dataTreeSelectScrollBase', routerLink: { name: 'ComponentTreeSelectScrollBasics' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectScrollFilter', routerLink: { name: 'ComponentTreeSelectScrollFilter' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataTreeSelectCustomSlotTemplate',
            children: [
              { i18nKey: 'app.aside.menu.dataTreeSelectCustomHeaderTemplate', routerLink: { name: 'ComponentTreeSelectTemplateHeader' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectCustomFooterTemplate', routerLink: { name: 'ComponentTreeSelectTemplateFooter' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectCustomTreeTitleTemplate', routerLink: { name: 'ComponentTreeSelectTemplateTreeTitle' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectCustomTreeIconTemplate', routerLink: { name: 'ComponentTreeSelectTemplateTreeIcon' } },
              { i18nKey: 'app.aside.menu.dataTreeSelectCustomTreeExtraTemplate', routerLink: { name: 'ComponentTreeSelectTemplateTreeExtra' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataTreeSelectFeatureExamples',
            children: [
              { i18nKey: 'app.aside.menu.dataTreeSelectRegion', routerLink: { name: 'ComponentTreeSelectOtherRegion' } }
            ]
          }
        ]
      },
      {
        i18nKey: 'app.aside.menu.dataTableSelectTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'table-select' } } },
          {
            i18nKey: 'app.aside.menu.dataTableSelectBase',
            children: [
              { i18nKey: 'app.aside.menu.dataTableSelectSize', routerLink: { name: 'ComponentTableSelectBaseSize' } },
              { i18nKey: 'app.aside.menu.dataTableSelectColumns', routerLink: { name: 'ComponentTableSelectBaseColumns' } },
              { i18nKey: 'app.aside.menu.dataTableSelectLoading', routerLink: { name: 'ComponentTableSelectBaseLoading' } },
              { i18nKey: 'app.aside.menu.dataTableSelectBorder', routerLink: { name: 'ComponentTableSelectBaseBorder' } },
              { i18nKey: 'app.aside.menu.dataTableSelectClearable', routerLink: { name: 'ComponentTableSelectBaseClearable' } },
              { i18nKey: 'app.aside.menu.dataTableSelectCustomField', routerLink: { name: 'ComponentTableSelectBaseOptionProps' } },
              { i18nKey: 'app.aside.menu.dataTableSelectClickRowSelect', routerLink: { name: 'ComponentTableSelectBaseRadioTrigger' } },
              { i18nKey: 'app.aside.menu.dataTableSelectPopupWH', routerLink: { name: 'ComponentTableSelectBasePopupWH' } },
              { i18nKey: 'app.aside.menu.dataTableSelectFooter', routerLink: { name: 'ComponentTableSelectBaseFooter' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataTableSelectRadio',
            children: [
              { i18nKey: 'app.aside.menu.dataTableSelectShowCheckbox', routerLink: { name: 'ComponentTableSelectRadioBase' } },
              { i18nKey: 'app.aside.menu.dataTableSelectClearable', routerLink: { name: 'ComponentTableSelectRadioClearable' } },
              { i18nKey: 'app.aside.menu.dataTableSelectClickRowSelect', routerLink: { name: 'ComponentTableSelectRadioTrigger' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataTableSelectCheckbox',
            children: [
              { i18nKey: 'app.aside.menu.dataTableSelectShowCheckbox', routerLink: { name: 'ComponentTableSelectCheckboxBase' } },
              { i18nKey: 'app.aside.menu.dataTableSelectClearable', routerLink: { name: 'ComponentTableSelectCheckboxClearable' } },
              { i18nKey: 'app.aside.menu.dataTableSelectClickRowSelect', routerLink: { name: 'ComponentTableSelectCheckboxTrigger' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataTableSelectLocalSearch',
            children: [
              { i18nKey: 'app.aside.menu.dataTableSelectFilterable', routerLink: { name: 'ComponentTableSelectSearchFilterable' } },
              { i18nKey: 'app.aside.menu.dataTableSelectCustomFilterMethod', routerLink: { name: 'ComponentTableSelectSearchFilterMethod' } },
              { i18nKey: 'app.aside.menu.dataTableSelectShowResultCount', routerLink: { name: 'ComponentTableSelectSearchShowResultCount' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataTableSelectRemoteSearch',
            children: [
              { i18nKey: 'app.aside.menu.dataTableSelectAutoLoad', routerLink: { name: 'ComponentTableSelectRemoteAutoLoad' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataTableSelectQueryForm',
            children: [
              { i18nKey: 'app.aside.menu.dataTableSelectQueryForm', routerLink: { name: 'ComponentTableSelectFormSearch' } },
              { i18nKey: 'app.aside.menu.dataTableSelectCollapseForm', routerLink: { name: 'ComponentTableSelectFormCollapse' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataTableSelectPager',
            children: [
              { i18nKey: 'app.aside.menu.dataTableSelectPagerSingle', routerLink: { name: 'ComponentTableSelectPagerPage' } },
              { i18nKey: 'app.aside.menu.dataTableSelectPagerMultiple', routerLink: { name: 'ComponentTableSelectPagerCheckbox' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataTableSelectDataProxy',
            children: [
              { i18nKey: 'app.aside.menu.dataTableSelectQueryApi', routerLink: { name: 'ComponentTableSelectProxyQuery' } },
              { i18nKey: 'app.aside.menu.dataTableSelectPagerQueryApi', routerLink: { name: 'ComponentTableSelectProxyPager' } },
              { i18nKey: 'app.aside.menu.dataTableSelectIntegratedFormQuery', routerLink: { name: 'ComponentTableSelectProxyForm' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.dataTableSelectVirtualScroll',
            children: [
              { i18nKey: 'app.aside.menu.dataTableSelectScrollVertical', routerLink: { name: 'ComponentTableSelectScrollVertical' } },
              { i18nKey: 'app.aside.menu.dataTableSelectScrollHorizontal', routerLink: { name: 'ComponentTableSelectScrollHorizontal' } },
              { i18nKey: 'app.aside.menu.dataTableSelectScrollHV', routerLink: { name: 'ComponentTableSelectScrollHV' } },
              { i18nKey: 'app.aside.menu.dataTableSelectScrollGroup', routerLink: { name: 'ComponentTableSelectScrollGroup' } }
            ]
          }
        ]
      },
      uploadNavConfig
      // { title: 'Transfer 穿梭框' }
    ]
  },
  listNavConfig,
  treeNavConfig,
  tableNavConfig,
  {
    // 反馈组件
    i18nKey: 'app.aside.menu.feedbackTitle',
    icon: 'vxe-icon-info-circle',
    showCount: true,
    children: [
      {
        // 空状态
        i18nKey: 'app.aside.menu.emptyTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'empty' } } },
          // 基础用法
          { i18nKey: 'app.aside.menu.feedbackEmptyBase', routerLink: { name: 'ComponentEmptyBase' } },
          // 图标
          { i18nKey: 'app.aside.menu.feedbackEmptyIcon', routerLink: { name: 'ComponentEmptyIcon' } },
          // 状态颜色
          { i18nKey: 'app.aside.menu.feedbackEmptyStatusColor', routerLink: { name: 'ComponentEmptyStatus' } },
          // 自定义图片地址
          { i18nKey: 'app.aside.menu.feedbackEmptyImageUrl', routerLink: { name: 'ComponentEmptyImageUrl' } }
        ]
      },
      {
        // 结果页
        i18nKey: 'app.aside.menu.resultTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'result' } } },
          // 基础用法
          { i18nKey: 'app.aside.menu.feedbackResultBase', routerLink: { name: 'ComponentResultBase' } },
          // 图标
          { i18nKey: 'app.aside.menu.feedbackResultIcon', routerLink: { name: 'ComponentResultIcon' } },
          // 状态颜色
          { i18nKey: 'app.aside.menu.feedbackResultStatusColor', routerLink: { name: 'ComponentResultStatus' } },
          // 自定义图片地址
          { i18nKey: 'app.aside.menu.feedbackResultImageUrl', routerLink: { name: 'ComponentResultImageUrl' } },
          // 额外内容
          { i18nKey: 'app.aside.menu.feedbackResultExtra', routerLink: { name: 'ComponentResultExtra' } }
        ]
      },
      {
        // 通告栏
        i18nKey: 'app.aside.menu.noticeBarTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'notice-bar' } } },
          // 尺寸
          { i18nKey: 'app.aside.menu.feedbackNoticeBarSize', routerLink: { name: 'ComponentNoticeBarSize' } },
          // 横向滚动
          { i18nKey: 'app.aside.menu.feedbackNoticeBarHorizontal', routerLink: { name: 'ComponentNoticeBarHorizontal' } },
          // 滚动方向
          { i18nKey: 'app.aside.menu.feedbackNoticeBarDirection', routerLink: { name: 'ComponentNoticeBarDirection' } },
          // 滚动速度
          { i18nKey: 'app.aside.menu.feedbackNoticeBarSpeed', routerLink: { name: 'ComponentNoticeBarSpeed' } },
          // 停留时长
          { i18nKey: 'app.aside.menu.feedbackNoticeBarDuration', routerLink: { name: 'ComponentNoticeBarDuration' } },
          // 循环次数
          { i18nKey: 'app.aside.menu.feedbackNoticeBarLoop', routerLink: { name: 'ComponentNoticeBarLoop' } },
          {
          // 自定义插槽模板
            i18nKey: 'app.aside.menu.feedbackNoticeBarCustomSlotTemplate',
            children: [
            // 自定义内容模板
              { i18nKey: 'app.aside.menu.feedbackNoticeBarCustomContentTemplate', routerLink: { name: 'ComponentNoticeBarTemplateDefault' } },
              // 自定义前缀模板
              { i18nKey: 'app.aside.menu.feedbackNoticeBarCustomPrefixTemplate', routerLink: { name: 'ComponentNoticeBarTemplatePrefix' } },
              // 自定义后缀模板
              { i18nKey: 'app.aside.menu.feedbackNoticeBarCustomSuffixTemplate', routerLink: { name: 'ComponentNoticeBarTemplateSuffix' } }
            ]
          }
        ]
      },
      {
        // 加载中
        i18nKey: 'app.aside.menu.loadingTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'loading' } } },
          // 全局调用
          { i18nKey: 'app.aside.menu.feedbackLoadingGlobalInvoke', routerLink: { name: 'ComponentLoadingGlobalLoading' } },
          // 基础用法
          { i18nKey: 'app.aside.menu.feedbackLoadingBase', routerLink: { name: 'ComponentLoadingBase' } },
          // 状态
          { i18nKey: 'app.aside.menu.feedbackLoadingStatus', routerLink: { name: 'ComponentLoadingStatus' } },
          // 图标
          { i18nKey: 'app.aside.menu.feedbackLoadingIcon', routerLink: { name: 'ComponentLoadingIcon' } },
          // 文字
          { i18nKey: 'app.aside.menu.feedbackLoadingText', routerLink: { name: 'ComponentLoadingText' } },
          // 自定义插槽模板
          { i18nKey: 'app.aside.menu.feedbackLoadingCustomSlotTemplate', routerLink: { name: 'ComponentLoadingTemplate' } }
        ]
      },
      {
        // 提示
        i18nKey: 'app.aside.menu.feedbackTipTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tip' } } },
          // 基础用法
          { i18nKey: 'app.aside.menu.feedbackTipBase', routerLink: { name: 'ComponentTipBase' } },
          // 图标
          { i18nKey: 'app.aside.menu.feedbackTipIcon', routerLink: { name: 'ComponentTipIcon' } },
          // 标题
          { i18nKey: 'app.aside.menu.feedbackTipTitle', routerLink: { name: 'ComponentTipTitle' } }
        ]
      },
      {
        // 警告提示
        i18nKey: 'app.aside.menu.feedbackAlertTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'alert' } } },
          // 基础用法
          { i18nKey: 'app.aside.menu.feedbackAlertBase', routerLink: { name: 'ComponentAlertBase' } },
          // 图标
          { i18nKey: 'app.aside.menu.feedbackAlertIcon', routerLink: { name: 'ComponentAlertIcon' } },
          // 标题
          { i18nKey: 'app.aside.menu.feedbackAlertTitle', routerLink: { name: 'ComponentAlertTitle' } },
          // 可关闭
          { i18nKey: 'app.aside.menu.feedbackAlertClose', routerLink: { name: 'ComponentAlertClose' } }
        ]
      },
      {
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
      },
      // { title: 'Popover 气泡提示框' },
      {
        // 文字提示
        i18nKey: 'app.aside.menu.feedbackTooltipTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tooltip' } } },
          {
          // 全局调用
            i18nKey: 'app.aside.menu.feedbackTooltipGlobalInvoke',
            children: [
            // 单例模式
              { i18nKey: 'app.aside.menu.feedbackTooltipSingletonMode', routerLink: { name: 'ComponentTooltipGlobalTooltip' } }
            ]
          },
          // 触发方式
          { i18nKey: 'app.aside.menu.feedbackTooltipTriggerMode', routerLink: { name: 'ComponentTooltipTrigger' } },
          // 可悬停
          { i18nKey: 'app.aside.menu.feedbackTooltipEnterable', routerLink: { name: 'ComponentTooltipEnterable' } },
          // 样式
          { i18nKey: 'app.aside.menu.feedbackTooltipStyle', routerLink: { name: 'ComponentTooltipStyle' } },
          // HTML 内容
          { i18nKey: 'app.aside.menu.feedbackTooltipHtml', routerLink: { name: 'ComponentTooltipHtml' } },
          // 手动模式
          { i18nKey: 'app.aside.menu.feedbackTooltipManualMode', routerLink: { name: 'ComponentTooltipManual' } },
          // 单例模式
          { i18nKey: 'app.aside.menu.feedbackTooltipSingletonMode', routerLink: { name: 'ComponentTooltipSingle' } },
          // 在表格中使用
          { i18nKey: 'app.aside.menu.feedbackTooltipInTable', routerLink: { name: 'ComponentTooltipTable' } }
        ]
      }
    ]
  },
  modalNavConfig,
  ganttNavConfig,
  designNavConfig,
  {
    i18nKey: 'app.aside.menu.otherTitle',
    icon: 'vxe-icon-more',
    showCount: true,
    children: [
      {
        i18nKey: 'app.aside.menu.otherWatermarkTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'watermark' } } },
          { i18nKey: 'app.aside.menu.otherWatermarkGlobal', routerLink: { name: 'ComponentWatermarkGlobal' } },
          { i18nKey: 'app.aside.menu.otherWatermarkBase', routerLink: { name: 'ComponentWatermarkBase' } },
          { i18nKey: 'app.aside.menu.otherWatermarkColor', routerLink: { name: 'ComponentWatermarkColor' } },
          { i18nKey: 'app.aside.menu.otherWatermarkFontSize', routerLink: { name: 'ComponentWatermarkFontSize' } },
          { i18nKey: 'app.aside.menu.otherWatermarkGap', routerLink: { name: 'ComponentWatermarkGap' } },
          { i18nKey: 'app.aside.menu.otherWatermarkTable', routerLink: { name: 'ComponentWatermarkTable' } },
          { i18nKey: 'app.aside.menu.otherWatermarkForm', routerLink: { name: 'ComponentWatermarkForm' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.otherCountdownTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'countdown' } } },
          { i18nKey: 'app.aside.menu.otherCountdownSize', routerLink: { name: 'ComponentCountdownSize' } },
          { i18nKey: 'app.aside.menu.otherCountdownBase', routerLink: { name: 'ComponentCountdownBase' } },
          { i18nKey: 'app.aside.menu.otherCountdownFormat', routerLink: { name: 'ComponentCountdownFormat' } },
          { i18nKey: 'app.aside.menu.otherCountdownCustomSlotTemplate', routerLink: { name: 'ComponentCountdownTemplate' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.printTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'print' } } },
          {
            i18nKey: 'app.aside.menu.otherPrintGlobalInvoke',
            children: [
              { i18nKey: 'app.aside.menu.otherPrint', routerLink: { name: 'ComponentPrintGlobalPrint' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.otherPrintNormal',
            children: [
              { i18nKey: 'app.aside.menu.otherPrintHtml', routerLink: { name: 'ComponentPrintBaseHtml' } },
              { i18nKey: 'app.aside.menu.otherPrintImage', routerLink: { name: 'ComponentPrintBaseImg' } },
              { i18nKey: 'app.aside.menu.otherPrintTable', routerLink: { name: 'ComponentPrintBaseTable' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.otherPrintPagination',
            children: [
              { i18nKey: 'app.aside.menu.otherPrintPaginationBase', routerLink: { name: 'ComponentPrintPageBasics' } },
              { i18nKey: 'app.aside.menu.otherPrintSetStyle', routerLink: { name: 'ComponentPrintPageStyle' } },
              { i18nKey: 'app.aside.menu.otherPrintStyleUrls', routerLink: { name: 'ComponentPrintPageStyleUrls' } },
              { i18nKey: 'app.aside.menu.otherPrintHeader', routerLink: { name: 'ComponentPrintPageHeader' } },
              { i18nKey: 'app.aside.menu.otherPrintFooter', routerLink: { name: 'ComponentPrintPageFooter' } },
              { i18nKey: 'app.aside.menu.otherPrintMargin', routerLink: { name: 'ComponentPrintPageMargin' } },
              { i18nKey: 'app.aside.menu.otherPrintBatchImage', routerLink: { name: 'ComponentPrintPageImage' } },
              { i18nKey: 'app.aside.menu.otherPrintPaginationTable', routerLink: { name: 'ComponentPrintPageTable' } },
              { i18nKey: 'app.aside.menu.otherPrintCustomTemplate', routerLink: { name: 'ComponentPrintPageTemplate' } }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'API',
    icon: 'vxe-icon-doc-search',
    isExpand: true,
    showCount: true,
    children: []
  }
]
