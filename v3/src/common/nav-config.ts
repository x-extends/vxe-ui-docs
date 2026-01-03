import { NavVO, otherUrl } from './nav'
import { tableNavConfig } from './table'
import { ganttNavConfig } from './gantt'
import { designNavConfig } from './design'

export const navConfigList: NavVO[] = [
  {
    i18nKey: 'app.aside.menu.guide',
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
          { title: '后台管理系统模板', isTemplate: true, linkUrl: 'https://vxeui.com/admin-template/' }
        ]
      },
      {
        i18nKey: 'app.aside.menu.useTableInsrall',
        children: [
          { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartTableInstall' } },
          { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartTableUseGlobal' } },
          { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartTableUseImport' } },
          { i18nKey: 'app.aside.menu.useGlobalCDN', routerLink: { name: 'StartTableCDN' } },
          { title: '使用第三方 UI 库', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/edit/el-input` }
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
          // { title: '使用第三方 UI 库', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form-design/renderView` },
          { title: '可视化设计器模板', isTemplate: true, linkUrl: 'https://vxeui.com/design-template/' }
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
          { i18nKey: 'app.aside.menu.configTranslate', routerLink: { name: 'StartTranslate' } }
        ]
      },
      { i18nKey: 'app.aside.menu.globalPermission', routerLink: { name: 'StartPermission' } }
    ]
  },
  {
    i18nKey: 'app.aside.menu.tools',
    children: [
      { i18nKey: 'app.aside.menu.clipboard', routerLink: { name: 'ToolClipboard' } },
      { i18nKey: 'app.aside.menu.functions', linkUrl: 'https://vxeui.com/xe-utils/' }
    ]
  },
  {
    i18nKey: 'app.aside.menu.baseTitle',
    children: [
      {
        i18nKey: 'app.aside.menu.iconTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'icon' } } },
          { title: '图标列表', routerLink: { name: 'ComponentIconBase' } },
          { title: '尺寸大小', routerLink: { name: 'ComponentIconSize' } },
          { title: '效果', routerLink: { name: 'ComponentIconAnimation' } },
          { title: '状态颜色', routerLink: { name: 'ComponentIconStatus' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.textTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'text' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentTextSize' } },
          { title: '状态颜色', routerLink: { name: 'ComponentTextStatus' } },
          { title: '加载中', routerLink: { name: 'ComponentTextLoading' } },
          { title: '前缀图标', routerLink: { name: 'ComponentTextIcon' } },
          { title: '后缀图标', routerLink: { name: 'ComponentTextSuffixIcon' } },
          { title: '点击复制内容', routerLink: { name: 'ComponentTextClickToCopy' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.linkTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'link' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentLinkSize' } },
          { title: '状态颜色', routerLink: { name: 'ComponentLinkStatus' } },
          { title: '图标', routerLink: { name: 'ComponentLinkIcon' } },
          { title: '下划线', routerLink: { name: 'ComponentLinkUnderline' } },
          { title: '禁用', routerLink: { name: 'ComponentLinkDisabled' } },
          { title: '超链接', routerLink: { name: 'ComponentLinkHref' } },
          { title: '路由模式', routerLink: { name: 'ComponentLinkRouter' } },
          { title: '权限码', routerLink: { name: 'ComponentLinkPermissionCode' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.tagTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tag' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentTagSize' } },
          { title: '状态', routerLink: { name: 'ComponentTagStatus' } },
          { title: '图标', routerLink: { name: 'ComponentTagIcon' } },
          { title: '圆角', routerLink: { name: 'ComponentTagRound' } },
          { title: '边框', routerLink: { name: 'ComponentTagBorder' } },
          { title: '加载中', routerLink: { name: 'ComponentTagLoading' } },
          { title: '颜色', routerLink: { name: 'ComponentTagColor' } },
          { title: '可关闭', routerLink: { name: 'ComponentTagClosable' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.buttonTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'button' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentButtonSize' } },
          { title: '状态', routerLink: { name: 'ComponentButtonStatus' } },
          { title: '圆角', routerLink: { name: 'ComponentButtonRound' } },
          { title: '圆形', routerLink: { name: 'ComponentButtonCircle' } },
          { title: '图标', routerLink: { name: 'ComponentButtonIcon' } },
          { title: '提示图标', routerLink: { name: 'ComponentButtonTipIcon' } },
          { title: '加载中', routerLink: { name: 'ComponentButtonLoading' } },
          { title: '按钮组', routerLink: { name: 'ComponentButtonGroup' } },
          { title: '排版方式', routerLink: { name: 'ComponentButtonVertical' } },
          {
            title: '下拉按钮',
            children: [
              { title: '下拉按钮', routerLink: { name: 'ComponentButtonDropdownOptions' } },
              { title: '状态颜色', routerLink: { name: 'ComponentButtonDropdownStatus' } },
              { title: '触发方式', routerLink: { name: 'ComponentButtonDropdownTrigger' } },
              { title: '提示图标', routerLink: { name: 'ComponentButtonDropdownTipIcon' } },
              { title: '固定方向', routerLink: { name: 'ComponentButtonDropdownPlacement' } },
              { title: '下拉面板挂载 Body', routerLink: { name: 'ComponentButtonDropdownTeleportTo' } },
              { title: '自定义插槽模板', routerLink: { name: 'ComponentButtonDropdownTemplate' } },
              { title: '权限码', routerLink: { name: 'ComponentButtonDropdownPermissionCode' } }
            ]
          },
          { title: '禁用', routerLink: { name: 'ComponentButtonDisabled' } },
          { title: '权限码', routerLink: { name: 'ComponentButtonPermissionCode' } },
          {
            i18nKey: 'app.aside.menu.buttonGlobalRenderer',
            children: [
              { title: 'API', routerLink: { name: 'GlobalRendererButtonAPI' } },
              { title: '前缀图标', routerLink: { name: 'GlobalRendererButtonPrefix' } },
              { title: '后缀图标', routerLink: { name: 'GlobalRendererButtonSuffix' } }
            ]
          },
          { title: '使用第三方图标', isPlugin: true, linkUrl: `${otherUrl}/#/other-iconfont/symbol/button/icon` }
        ]
      },
      {
        title: 'Segmented 分段器',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'segmented' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentSegmentedSize' } },
          { title: '状态颜色', routerLink: { name: 'ComponentSegmentedStatus' } },
          { title: '图标', routerLink: { name: 'ComponentSegmentedIcon' } },
          { title: '禁用', routerLink: { name: 'ComponentSegmentedDisabled' } },
          { title: '类型样式', routerLink: { name: 'ComponentSegmentedType' } },
          { title: '宽度', routerLink: { name: 'ComponentSegmentedWidth' } },
          {
            title: '自定义插槽模板',
            children: [
              { title: '自定义内容模板', routerLink: { name: 'ComponentSegmentedTemplateDefault' } }
            ]
          }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.layoutTitle',
    children: [
      {
        title: 'Layout 页面布局',
        children: [
          { title: 'Layout Container API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'layout-container' } } },
          { title: 'Layout Aside API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'layout-aside' } } },
          { title: 'Layout Header API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'layout-header' } } },
          { title: 'Layout Body API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'layout-body' } } },
          { title: 'Layout Footer API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'layout-footer' } } },
          { title: '基础布局', routerLink: { name: 'ComponentLayoutBase' } },
          { title: '固定头部和底部', routerLink: { name: 'ComponentLayoutFixed' } },
          { title: '侧边栏，内容区滚动条', routerLink: { name: 'ComponentLayoutAside' } },
          { title: '头部固定，中间内容区滚动', routerLink: { name: 'ComponentLayoutHeader' } },
          { title: '左侧与内容区滚动', routerLink: { name: 'ComponentLayoutBody' } }
        ]
      },
      {
        title: 'Backtop 回到顶部',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'backtop' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentBacktopSize' } },
          { title: '状态颜色', routerLink: { name: 'ComponentBacktopStatus' } },
          { title: '圆形', routerLink: { name: 'ComponentBacktopCircle' } },
          { title: '图标', routerLink: { name: 'ComponentBacktopIcon' } },
          { title: '文字', routerLink: { name: 'ComponentBacktopContent' } },
          { title: '自定义位置', routerLink: { name: 'ComponentBacktopPos' } },
          {
            title: '自定义插槽模板',
            children: [
              { title: '自定义内容模板', routerLink: { name: 'ComponentBacktopTemplateDefault' } }
            ]
          }
        ]
      },
      {
        title: 'Row 行与列',
        children: [
          { title: 'Row API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'row' } } },
          { title: 'Col API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'col' } } },
          { title: '占比', routerLink: { name: 'ComponentRowBase' } },
          { title: '垂直布局', routerLink: { name: 'ComponentRowVertical' } },
          { title: '自动换行', routerLink: { name: 'ComponentRowWrap' } },
          { title: '间距', routerLink: { name: 'ComponentRowGutter' } },
          { title: '固定宽度', routerLink: { name: 'ComponentRowColWidth' } },
          { title: '铺满宽度', routerLink: { name: 'ComponentRowColFill' } },
          { title: '对齐方式', routerLink: { name: 'ComponentRowColAlign' } },
          { title: '溢出隐藏', routerLink: { name: 'ComponentRowColEllipsis' } }
        ]
      },
      // { title: 'Progress 进度条' },
      {
        title: 'Card 卡片',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'card' } } },
          { title: '基础', routerLink: { name: 'ComponentCardBase' } },
          { title: '宽度', routerLink: { name: 'ComponentCardWidth' } },
          { title: '高度', routerLink: { name: 'ComponentCardHeight' } },
          { title: '加载中', routerLink: { name: 'ComponentCardLoading' } },
          { title: '显示/隐藏边框', routerLink: { name: 'ComponentCardBorder' } },
          { title: '显示/隐藏边距', routerLink: { name: 'ComponentCardPadding' } },
          { title: '边框阴影', routerLink: { name: 'ComponentCardShadow' } },
          { title: '自定义模板', routerLink: { name: 'ComponentCardTemplate' } },
          { title: '实现可刷新', routerLink: { name: 'ComponentCardRefresh' } }
        ]
      },
      {
        title: 'Carousel 轮播图',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'carousel' } } },
          { title: '基础', routerLink: { name: 'ComponentCarouselBase' } },
          { title: '高度', routerLink: { name: 'ComponentCarouselHeight' } },
          { title: '纵向排版', routerLink: { name: 'ComponentCarouselVertical' } },
          { title: '配置式', routerLink: { name: 'ComponentCarouselOptions' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentCarouselTemplate' } },
          { title: '自动切换', routerLink: { name: 'ComponentCarouselAutoPlay' } },
          { title: '指示器', routerLink: { name: 'ComponentCarouselShowIndicators' } }
        ]
      },
      {
        title: 'Collapse 折叠面板',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'collapse' } } },
          { title: '基础', routerLink: { name: 'ComponentCollapseBase' } },
          { title: '图标', routerLink: { name: 'ComponentCollapseIon' } },
          { title: '配置式', routerLink: { name: 'ComponentCollapseOptions' } },
          { title: '自定义标题模板', routerLink: { name: 'ComponentCollapseTemplateTitle' } },
          { title: '自定义内容模板', routerLink: { name: 'ComponentCollapseTemplateDefault' } }
        ]
      },
      {
        title: 'Splitter 分割面板',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'splitter' } } },
          { title: 'Item API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'splitter-panel' } } },
          {
            title: '基础',
            children: [
              { title: '基础', routerLink: { name: 'ComponentSplitterBasicsBase' } },
              { title: '高度', routerLink: { name: 'ComponentSplitterBasicsHeight' } },
              { title: '边框', routerLink: { name: 'ComponentSplitterBasicsBorder' } },
              { title: '边距', routerLink: { name: 'ComponentSplitterBasicsPadding' } },
              { title: '垂直布局', routerLink: { name: 'ComponentSplitterBasicsVertical' } },
              { title: '拖拽调整宽度', routerLink: { name: 'ComponentSplitterBasicsResize' } },
              { title: '组合布局', routerLink: { name: 'ComponentSplitterBasicsLayout' } },
              { title: '可折叠', routerLink: { name: 'ComponentSplitterBasicsAction' } },
              { title: '显示隐藏折叠按钮', routerLink: { name: 'ComponentSplitterBasicsActionConfig' } }
            ]
          },
          {
            title: '配置式',
            children: [
              { title: '基础', routerLink: { name: 'ComponentSplitterConfigBase' } },
              { title: '高度', routerLink: { name: 'ComponentSplitterConfigHeight' } },
              { title: '边框', routerLink: { name: 'ComponentSplitterConfigBorder' } },
              { title: '边距', routerLink: { name: 'ComponentSplitterConfigPadding' } },
              { title: '垂直布局', routerLink: { name: 'ComponentSplitterConfigVertical' } },
              { title: '拖拽调整宽度', routerLink: { name: 'ComponentSplitterConfigResize' } },
              { title: '组合布局', routerLink: { name: 'ComponentSplitterConfigLayout' } },
              { title: '可折叠', routerLink: { name: 'ComponentSplitterConfigAction' } },
              { title: '显示隐藏折叠按钮', routerLink: { name: 'ComponentSplitterConfigActionConfig' } }
            ]
          }
        ]
      },
      {
        title: 'Tabs 页签',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tabs' } } },
          { title: '基础', routerLink: { name: 'ComponentTabsBase' } },
          { title: '样式 - 卡片风格', routerLink: { name: 'ComponentTabsCard' } },
          { title: '样式 - 边框背景', routerLink: { name: 'ComponentTabsBorderCard' } },
          { title: '样式 - 圆角边框背景', routerLink: { name: 'ComponentTabsRoundCard' } },
          { title: '设置高度', routerLink: { name: 'ComponentTabsHeight' } },
          { title: '配置式', routerLink: { name: 'ComponentTabsOptions' } },
          { title: '页签图标', routerLink: { name: 'ComponentTabsIcon' } },
          { title: '页签触发方式', routerLink: { name: 'ComponentTabsRoundTrigger' } },
          { title: '页签显示位置', routerLink: { name: 'ComponentTabsRoundPosition' } },
          { title: '是否显示面板内容', routerLink: { name: 'ComponentTabsRoundShowContent' } },
          { title: '预加载页签', routerLink: { name: 'ComponentTabsRoundPreload' } },
          { title: '页签超出可滚动', routerLink: { name: 'ComponentTabsOver' } },
          { title: '拦截页签切换', routerLink: { name: 'ComponentTabsBeforeChangeMethod' } },
          { title: '可关闭', routerLink: { name: 'ComponentTabsCloseConfig' } },
          { title: '拦截页签关闭', routerLink: { name: 'ComponentTabsBeforeClose' } },
          { title: '可刷新', routerLink: { name: 'ComponentTabsRefreshConfig' } },
          {
            title: '自定义插槽模板',
            children: [
              { title: '自定义标题', routerLink: { name: 'ComponentTabsTemplateTitle' } },
              { title: '自定义标题前缀', routerLink: { name: 'ComponentTabsTemplateTitlePrefix' } },
              { title: '自定义标题后缀', routerLink: { name: 'ComponentTabsTemplateTitleSuffix' } },
              { title: '自定义页签前缀', routerLink: { name: 'ComponentTabsTemplatePrefix' } },
              { title: '自定义页签后缀', routerLink: { name: 'ComponentTabsTemplateSuffix' } },
              { title: '自定义面板头部模板', routerLink: { name: 'ComponentTabsTemplateHeader' } },
              { title: '自定义面板底部模板', routerLink: { name: 'ComponentTabsTemplateFooter' } }
            ]
          },
          { title: '权限码', routerLink: { name: 'ComponentTabsPermissionCode' } }
        ]
      },
      {
        title: 'Pulldown 下拉容器',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'pulldown' } } },
          { title: '基础', routerLink: { name: 'ComponentPulldownBase' } },
          { title: '配置列表', routerLink: { name: 'ComponentPulldownOptions' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentPulldownTemplate' } },
          { title: '可搜索的下拉框', routerLink: { name: 'ComponentPulldownSelect' } },
          { title: '实现下拉表格', routerLink: { name: 'ComponentPulldownTable' } }
        ]
      },
      {
        title: 'List 虚拟列表',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'list' } } },
          { title: '纵向虚拟列表', routerLink: { name: 'ComponentListBase' } },
          { title: '响应式高度', routerLink: { name: 'ComponentListAutoResize' } },
          { title: '实现轻量级虚拟表格', routerLink: { name: 'ComponentListTable' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.displayTitle',
    children: [
      {
        title: 'Avatar 头像',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'avatar' } } },
          { title: '基础', routerLink: { name: 'ComponentAvatarBase' } },
          { title: '尺寸大小', routerLink: { name: 'ComponentAvatarSize' } },
          { title: '图标', routerLink: { name: 'ComponentAvatarIcon' } },
          { title: '圆形', routerLink: { name: 'ComponentAvatarCircle' } },
          { title: '状态颜色', routerLink: { name: 'ComponentAvatarStatus' } },
          { title: '小圆点', routerLink: { name: 'ComponentAvatarDot' } },
          { title: '微标数量', routerLink: { name: 'ComponentAvatarCount' } }
        ]
      },
      {
        title: 'Badge 微标',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'badge' } } },
          { title: '基础', routerLink: { name: 'ComponentBadgeBase' } },
          { title: '尺寸大小', routerLink: { name: 'ComponentBadgerSize' } },
          { title: '图标', routerLink: { name: 'ComponentBadgerIcon' } },
          { title: '小圆点', routerLink: { name: 'ComponentBadgerDot' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.textEllipsisTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'text-ellipsis' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentTextEllipsisSize' } },
          { title: '状态颜色', routerLink: { name: 'ComponentTextEllipsisStatus' } },
          { title: '单行溢出省略', routerLink: { name: 'ComponentTextEllipsisIconLineSingle' } },
          { title: '多行溢出省略', routerLink: { name: 'ComponentTextEllipsisLineClamp' } }
        ]
      },
      {
        title: 'Image 图片',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'image' } } },
          { title: '设置宽高', routerLink: { name: 'ComponentImageBase' } },
          { title: '圆形图片', routerLink: { name: 'ComponentImageCircle' } },
          { title: '预览链接', routerLink: { name: 'ComponentImageThumbnail' } },
          { title: '预览多张图片', routerLink: { name: 'ComponentImageMultiple' } },
          { title: '懒加载', routerLink: { name: 'ComponentImageLazy' } },
          { title: '预览', routerLink: { name: 'ComponentImageShowPreview' } },
          { title: '点击遮罩层关闭', routerLink: { name: 'ComponentImageMaskClosable' } },
          // { title: '打印按钮', routerLink: { name: 'ComponentImageShowPrintButton' } },
          { title: '工具栏按钮', routerLink: { name: 'ComponentImageToolBtn' } },
          { title: '工具栏图标', routerLink: { name: 'ComponentImageToolIcon' } },
          { title: '事件监听', routerLink: { name: 'ComponentImageEvents' } }
        ]
      },
      {
        title: 'ImageGroup 图片组',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'image-group' } } },
          { title: '设置宽高', routerLink: { name: 'ComponentImageGroupBase' } },
          { title: '预览', routerLink: { name: 'ComponentImageGroupShowPreview' } },
          { title: '打印按钮', routerLink: { name: 'ComponentImageGroupShowPrintButton' } },
          { title: '下载按钮', routerLink: { name: 'ComponentImageGroupShowDownloadButton' } }
        ]
      },
      {
        title: 'ImagePreview 图片预览',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'image-preview' } } },
          { title: '打开预览', routerLink: { name: 'ComponentImagePreview' } }
        ]
      },
      {
        title: 'Calendar 日历',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'calendar' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentCalendarSize' } },
          { title: '高度', routerLink: { name: 'ComponentCalendarHeight' } },
          { title: '日期视图', routerLink: { name: 'ComponentCalendarDate' } },
          { title: '周视图', routerLink: { name: 'ComponentCalendarWeek' } },
          { title: '月度图', routerLink: { name: 'ComponentCalendarMonth' } },
          { title: '季度图', routerLink: { name: 'ComponentCalendarQuarter' } },
          { title: '年度视图', routerLink: { name: 'ComponentCalendarYear' } },
          { title: '自定义样式', routerLink: { name: 'ComponentCalendarCellStyle' } },
          { title: '显示节假日', routerLink: { name: 'ComponentCalendarFestivalMethod' } },
          { title: '事件监听', routerLink: { name: 'ComponentCalendarFestivalEvents' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.navigationTitle',
    children: [
      {
        title: 'Breadcrumb 面包屑',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'breadcrumb' } } },
          { title: '基础', routerLink: { name: 'ComponentBreadcrumb' } }
        ]
      },
      {
        title: 'Menu 菜单',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'menu' } } },
          { title: '基础', routerLink: { name: 'ComponentMenuBase' } },
          { title: '加载中', routerLink: { name: 'ComponentMenuLoading' } },
          { title: '图标', routerLink: { name: 'ComponentMenuIcon' } },
          { title: '手风琴效果', routerLink: { name: 'ComponentMenuAccordion' } },
          { title: '可折叠', routerLink: { name: 'ComponentMenuCollapsed' } },
          { title: '路由模式', routerLink: { name: 'ComponentMenuRouterLink' } },
          { title: '权限码', routerLink: { name: 'ComponentMenuPermissionCode' } },
          {
            title: '自定义插槽模板',
            children: [
              { title: '自定义菜单图标', routerLink: { name: 'ComponentMenuTemplateIcon' } },
              { title: '自定义菜单标题', routerLink: { name: 'ComponentMenuTemplateTitle' } },
              { title: '自定义菜单项', routerLink: { name: 'ComponentMenuTemplateOption' } }
            ]
          }
        ]
      },
      {
        title: 'Anchor 锚点',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'anchor' } } },
          { title: '自定义容器', routerLink: { name: 'ComponentAnchor' } }
        ]
      },
      {
        title: 'Pager 分页',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'pager' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentPagerSize' } },
          { title: '对齐方式', routerLink: { name: 'ComponentPagerAlign' } },
          { title: '自定义页大小列表', routerLink: { name: 'ComponentPagerPageSize' } },
          { title: '自定义布局', routerLink: { name: 'ComponentPagerLayout' } },
          {
            title: '自定义模板',
            children: [
              { title: '左侧区域', routerLink: { name: 'ComponentPagerTemplateLeft' } },
              { title: '右侧区域', routerLink: { name: 'ComponentPagerTemplateRight' } },
              { title: '功能区', routerLink: { name: 'ComponentPagerTemplateFunc' } }
            ]
          }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.formTitle',
    children: [
      { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form' } } },
      { title: 'Item API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form-item' } } },
      {
        i18nKey: 'app.aside.menu.formBaseTitle',
        children: [
          { title: '基础功能', routerLink: { name: 'ComponentFormBasicsBase' } },
          { title: '尺寸大小', routerLink: { name: 'ComponentFormBasicsSize' } },
          { title: '数据类型', routerLink: { name: 'ComponentFormBasicsField' } },
          { title: '横向排列', routerLink: { name: 'ComponentFormBasicsHorizontal' } },
          { title: '上下布局', routerLink: { name: 'ComponentFormBasicsVertical' } },
          { title: '边距', routerLink: { name: 'ComponentFormBasicsPadding' } },
          { title: '标题冒号', routerLink: { name: 'ComponentFormBasicsColon' } },
          { title: '标题加粗', routerLink: { name: 'ComponentFormBasicsBold' } },
          { title: '标题宽度', routerLink: { name: 'ComponentFormBasicsWidth' } },
          { title: '标题对齐方式', routerLink: { name: 'ComponentFormBasicsTitleAlign' } },
          { title: '内容对齐方式', routerLink: { name: 'ComponentFormBasicsAlign' } },
          { title: '溢出隐藏', routerLink: { name: 'ComponentFormBasicsOverflow' } },
          { title: '标题前缀图标', routerLink: { name: 'ComponentFormBasicsTitlePrefix' } },
          { title: '标题后缀图标', routerLink: { name: 'ComponentFormBasicsTitleSuffix' } },
          { title: '边框', routerLink: { name: 'ComponentFormBasicsBorder' } },
          { title: '标题背景', routerLink: { name: 'ComponentFormBasicsTitleBackground' } },
          { title: '格式化内容', routerLink: { name: 'ComponentFormBasicsFormat' } },
          { title: '分行/分列', routerLink: { name: 'ComponentFormBasicsChildren' } },
          { title: '分组', routerLink: { name: 'ComponentFormBasicsGroup' } },
          { title: '自定义布局', routerLink: { name: 'ComponentFormBasicsCustomLayout' } },
          {
            title: '折叠表单',
            children: [
              { title: '展开与收起', routerLink: { name: 'ComponentFormBasicsCollapseBase' } },
              { title: '自定义按钮文字', routerLink: { name: 'ComponentFormBasicsCollapseButtonText' } },
              { title: '自定义按钮图标', routerLink: { name: 'ComponentFormBasicsCollapseButtonIcon' } }
            ]
          },
          {
            title: '数据校验',
            children: [
              { title: '校验规则配置', routerLink: { name: 'ComponentFormBasicsValidateRules' } },
              { title: '字符串校验规则', routerLink: { name: 'ComponentFormBasicsValidateString' } },
              { title: '数值校验规则', routerLink: { name: 'ComponentFormBasicsValidateNumber' } },
              { title: '正则校验规则', routerLink: { name: 'ComponentFormBasicsValidateRegexp' } },
              { title: '数组校验规则', routerLink: { name: 'ComponentFormBasicsValidateArray' } },
              { title: '自定义校验规则', routerLink: { name: 'ComponentFormBasicsValidateCustom' } },
              { title: '显示提示消息', routerLink: { name: 'ComponentFormBasicsValidateShowMessage' } },
              { title: '显示提示图标', routerLink: { name: 'ComponentFormBasicsValidateShowErrorIcon' } },
              { title: '错误提示样式', routerLink: { name: 'ComponentFormBasicsValidateTheme' } },
              // { title: '值改变时自动提交', routerLink: { name: 'ComponentFormBasicsValidateChangeToSubmit' } },
              { title: '手动调用', routerLink: { name: 'ComponentFormBasicsValidateManual' } }
            ]
          },
          {
            title: '渲染 - 配置式',
            children: [
              { title: 'input 原生-输入框', routerLink: { name: 'ComponentFormBasicsItemRenderInput' } },
              { title: 'textarea 原生-文本域', routerLink: { name: 'ComponentFormBasicsItemRenderTextarea' } },
              { title: 'select 原生-下拉框', routerLink: { name: 'ComponentFormBasicsItemRenderSelect' } },
              { title: 'VxeButtonGroup 按钮组', routerLink: { name: 'ComponentFormBasicsItemRenderVxeButtonGroup' } },
              { title: 'VxeInput 输入框', routerLink: { name: 'ComponentFormBasicsItemRenderVxeInput' } },
              { title: 'VxeNumberInput 数值输入框', routerLink: { name: 'ComponentFormBasicsItemRenderVxeNumberInput' } },
              { title: 'VxeTextarea 文本域', routerLink: { name: 'ComponentFormBasicsItemRenderVxeTextarea' } },
              { title: 'VxeSelect 下拉框', routerLink: { name: 'ComponentFormBasicsItemRenderVxeSelect' } },
              { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentFormBasicsItemRenderVxeDatePicker' } },
              { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentFormBasicsItemRenderVxeDateRangePicker' } },
              { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentFormBasicsItemRenderVxeTreeSelect' } },
              { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentFormBasicsItemRenderVxeTableSelect' } },
              { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentFormBasicsItemRenderVxeSwitch' } },
              { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentFormBasicsItemRenderVxeRadioGroup' } },
              { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentFormBasicsItemRenderVxeCheckboxGroup' } },
              { title: 'VxeRate 评分', routerLink: { name: 'ComponentFormBasicsItemRenderVxeRate' } },
              { title: 'VxeSlider 滑块', routerLink: { name: 'ComponentFormBasicsItemRenderVxeSlider' } },
              { title: 'VxeUpload 上传', routerLink: { name: 'ComponentFormBasicsItemRenderVxeUpload' } },
              // { title: 'WangEditor 第三方扩展-富文本', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-wangeditor/form/itemTemplate/wang-editor` },
              { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form/itemTemplate/el-input` },
              { title: '只读模式', routerLink: { name: 'ComponentFormBasicsItemRenderReadonly' } },
              { title: '禁用模式', routerLink: { name: 'ComponentFormBasicsItemRenderDisabled' } },
              { title: '实现联动禁用', routerLink: { name: 'ComponentFormBasicsItemRenderLinkageDisabled' } }
            ]
          },
          {
            title: '渲染 - 插槽式',
            children: [
              { title: 'VxeButton 按钮', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeButton' } },
              { title: 'VxeInput 输入框', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeInput' } },
              { title: 'VxeNumberInput 数值输入框', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeNumberInput' } },
              { title: 'VxeTextarea 文本域', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeTextarea' } },
              { title: 'VxeSelect 下拉框', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeSelect' } },
              { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeDatePicker' } },
              { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeDateRangePicker' } },
              { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeTreeSelect' } },
              { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeSwitch' } },
              { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeRadioGroup' } },
              { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeCheckboxGroup' } },
              { title: 'VxeRate 评分', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeRate' } },
              { title: 'VxeSlider 滑块', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeSlider' } },
              { title: 'VxeUpload 上传', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeUpload' } },
              // { title: 'WangEditor 第三方扩展-富文本', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-wangeditor/form/itemTemplate/wang-editor` },
              { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form/itemTemplate/el-input` }
            ]
          },
          {
            title: '自定义插槽模板',
            children: [
              { title: '自定义标题模板', routerLink: { name: 'ComponentFormBasicsTemplateTitle' } },
              { title: '自定义标题前缀模板', routerLink: { name: 'ComponentFormBasicsTemplatePrefix' } },
              { title: '自定义标题后缀模板', routerLink: { name: 'ComponentFormBasicsTemplateSuffix' } },
              { title: '自定义内容模板', routerLink: { name: 'ComponentFormBasicsTemplateContent' } }
            ]
          },
          { title: '在页签中使用', routerLink: { name: 'ComponentFormBasicsTabs' } },
          { title: '实现简历模板', routerLink: { name: 'ComponentFormBasicsResumeTemplate' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.formConfigTitle',
        children: [
          { title: '基础功能', routerLink: { name: 'ComponentFormConfigBase' } },
          { title: '数据类型', routerLink: { name: 'ComponentFormConfigField' } },
          { title: '横向排列', routerLink: { name: 'ComponentFormConfigHorizontal' } },
          { title: '上下布局', routerLink: { name: 'ComponentFormConfigVertical' } },
          { title: '边距', routerLink: { name: 'ComponentFormConfigPadding' } },
          { title: '标题冒号', routerLink: { name: 'ComponentFormConfigColon' } },
          { title: '标题加粗', routerLink: { name: 'ComponentFormConfigBold' } },
          { title: '标题宽度', routerLink: { name: 'ComponentFormConfigWidth' } },
          { title: '标题对齐方式', routerLink: { name: 'ComponentFormConfigTitleAlign' } },
          { title: '内容对齐方式', routerLink: { name: 'ComponentFormConfigAlign' } },
          { title: '溢出隐藏', routerLink: { name: 'ComponentFormConfigOverflow' } },
          { title: '标题前缀图标', routerLink: { name: 'ComponentFormConfigTitlePrefix' } },
          { title: '标题后缀图标', routerLink: { name: 'ComponentFormConfigTitleSuffix' } },
          { title: '边框', routerLink: { name: 'ComponentFormConfigBorder' } },
          { title: '标题背景', routerLink: { name: 'ComponentFormConfigTitleBackground' } },
          { title: '格式化内容', routerLink: { name: 'ComponentFormConfigFormat' } },
          { title: '分行/分列', routerLink: { name: 'ComponentFormConfigChildren' } },
          { title: '分组', routerLink: { name: 'ComponentFormConfigGroup' } },
          {
            title: '折叠表单',
            children: [
              { title: '展开与收起', routerLink: { name: 'ComponentFormConfigCollapseBase' } },
              { title: '自定义按钮文字', routerLink: { name: 'ComponentFormConfigCollapseButtonText' } },
              { title: '自定义按钮图标', routerLink: { name: 'ComponentFormConfigCollapseButtonIcon' } }
            ]
          },
          {
            title: '数据校验',
            children: [
              { title: '校验规则配置', routerLink: { name: 'ComponentFormConfigValidateRules' } },
              { title: '字符串校验规则', routerLink: { name: 'ComponentFormConfigValidateString' } },
              { title: '数值校验规则', routerLink: { name: 'ComponentFormConfigValidateNumber' } },
              { title: '正则校验规则', routerLink: { name: 'ComponentFormConfigValidateRegexp' } },
              { title: '数组校验规则', routerLink: { name: 'ComponentFormConfigValidateArray' } },
              { title: '自定义校验规则', routerLink: { name: 'ComponentFormConfigValidateCustom' } },
              { title: '显示提示消息', routerLink: { name: 'ComponentFormConfigValidateShowMessage' } },
              { title: '显示提示图标', routerLink: { name: 'ComponentFormConfigValidateShowErrorIcon' } },
              { title: '错误提示样式', routerLink: { name: 'ComponentFormConfigValidateTheme' } },
              { title: '值改变时自动提交', routerLink: { name: 'ComponentFormConfigValidateChangeToSubmit' } },
              { title: '手动调用', routerLink: { name: 'ComponentFormConfigValidateManual' } }
            ]
          },
          {
            title: '渲染 - 配置式',
            children: [
              { title: 'input 原生-输入框', routerLink: { name: 'ComponentFormConfigItemRenderInput' } },
              { title: 'textarea 原生-文本域', routerLink: { name: 'ComponentFormConfigItemRenderTextarea' } },
              { title: 'select 原生-下拉框', routerLink: { name: 'ComponentFormConfigItemRenderSelect' } },
              { title: 'VxeInput 输入框', routerLink: { name: 'ComponentFormConfigItemRenderVxeInput' } },
              { title: 'VxeButtonGroup 按钮组', routerLink: { name: 'ComponentFormConfigItemRenderVxeButtonGroup' } },
              { title: 'VxeTextarea 文本域', routerLink: { name: 'ComponentFormConfigItemRenderVxeTextarea' } },
              { title: 'VxeNumberInput 数值输入', routerLink: { name: 'ComponentFormConfigItemRenderVxeNumberInput' } },
              { title: 'VxeSelect 下拉框', routerLink: { name: 'ComponentFormConfigItemRenderVxeSelect' } },
              { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentFormConfigItemRenderVxeDatePicker' } },
              { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentFormConfigItemRenderVxeDateRangePicker' } },
              { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentFormConfigItemRenderVxeTreeSelect' } },
              { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentFormConfigItemRenderVxeTableSelect' } },
              { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentFormConfigItemRenderVxeSwitch' } },
              { title: 'VxeRadioGroup 单选组件', routerLink: { name: 'ComponentFormConfigItemRenderVxeRadioGroup' } },
              { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentFormConfigItemRenderVxeCheckboxGroup' } },
              { title: 'VxeRate 评分', routerLink: { name: 'ComponentFormConfigItemRenderVxeRate' } },
              { title: 'VxeRate 滑块', routerLink: { name: 'ComponentFormConfigItemRenderVxeSlider' } },
              { title: 'VxeImage 图片', routerLink: { name: 'ComponentFormConfigItemRenderVxeImage' } },
              { title: 'VxeImageGroup 图片组', routerLink: { name: 'ComponentFormConfigItemRenderVxeImageGroup' } },
              { title: 'VxeUpload 上传', routerLink: { name: 'ComponentFormConfigItemRenderVxeUpload' } },
              // { title: 'WangEditor 第三方扩展-富文本', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-wangeditor/form/itemRender/wang-editor` },
              { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form/itemRender/el-input` },
              { title: '只读模式', routerLink: { name: 'ComponentFormConfigItemRenderReadonly' } },
              { title: '禁用模式', routerLink: { name: 'ComponentFormConfigItemRenderDisabled' } },
              { title: '实现联动禁用', routerLink: { name: 'ComponentFormConfigItemRenderLinkageDisabled' } }
            ]
          },
          {
            title: '渲染 - 插槽式',
            children: [
              { title: 'VxeButton 按钮', routerLink: { name: 'ComponentFormConfigItemTemplateVxeButton' } },
              { title: 'VxeInput 输入框', routerLink: { name: 'ComponentFormConfigItemTemplateVxeInput' } },
              { title: 'VxeTextarea 文本域', routerLink: { name: 'ComponentFormConfigItemTemplateVxeTextarea' } },
              { title: 'VxeNumberInput 数值输入', routerLink: { name: 'ComponentFormConfigItemTemplateVxeNumberInput' } },
              { title: 'VxeSelect 下拉框', routerLink: { name: 'ComponentFormConfigItemTemplateVxeSelect' } },
              { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentFormConfigItemTemplateVxeDatePicker' } },
              { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentFormConfigItemTemplateVxeDateRangePicker' } },
              { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentFormConfigItemTemplateVxeTreeSelect' } },
              { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentFormConfigItemTemplateVxeSwitch' } },
              { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentFormConfigItemTemplateVxeRadioGroup' } },
              { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentFormConfigItemTemplateVxeCheckboxGroup' } },
              { title: 'VxeRate 评分', routerLink: { name: 'ComponentFormConfigItemTemplateVxeRate' } },
              { title: 'VxeRate 滑块', routerLink: { name: 'ComponentFormConfigItemTemplateVxeSlider' } },
              { title: 'VxeImage 图片', routerLink: { name: 'ComponentFormConfigItemTemplateVxeImage' } },
              { title: 'VxeImageGroup 图片组', routerLink: { name: 'ComponentFormConfigItemTemplateVxeImageGroup' } },
              { title: 'VxeUpload 上传', routerLink: { name: 'ComponentFormConfigItemTemplateVxeUpload' } },
              // { title: 'WangEditor 第三方扩展-富文本', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-wangeditor/form/itemRender/wang-editor` },
              { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form/itemRender/el-input` }
            ]
          },
          {
            title: '自定义插槽模板',
            children: [
              { title: '自定义标题模板', routerLink: { name: 'ComponentFormConfigTemplateTitle' } },
              { title: '自定义标题前缀模板', routerLink: { name: 'ComponentFormConfigTemplatePrefix' } },
              { title: '自定义标题后缀模板', routerLink: { name: 'ComponentFormConfigTemplateSuffix' } },
              { title: '自定义内容模板', routerLink: { name: 'ComponentFormConfigTemplateContent' } }
            ]
          },
          { title: '在页签中使用', routerLink: { name: 'ComponentFormConfigTabs' } },
          { title: '实现简历模板', routerLink: { name: 'ComponentFormConfigResumeTemplate' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.formGlobalValidators',
        children: [
          { title: 'API', routerLink: { name: 'GlobalValidatorsFormAPI' } },
          { title: '表单项校验', routerLink: { name: 'GlobalValidatorsFormBase' } },
          { title: '便捷校验配置插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-validator/form/base` }
        ]
      },
      {
        i18nKey: 'app.aside.menu.formGlobalFormats',
        children: [
          { title: 'API', routerLink: { name: 'GlobalFormatsFormAPI' } },
          { title: '表单项', routerLink: { name: 'GlobalFormatsFormBase' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.formGlobalRenderer',
        children: [
          { title: 'API', routerLink: { name: 'GlobalRendererFormAPI' } },
          {
            title: '表单项',
            children: [
              { title: '实现一个金额输入', routerLink: { name: 'GlobalRendererFormItemMyItemAmount' } },
              { title: '实现一个附件上传', routerLink: { name: 'GlobalRendererFormItemMyItemUpload' } },
              { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form/itemRender/el-input` }
            ]
          }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.dataTitle',
    children: [
      {
        title: 'Switch 开关',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'switch' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentSwitchSize' } },
          { title: '禁用状态', routerLink: { name: 'ComponentSwitchDisabled' } },
          { title: '自定义显示值', routerLink: { name: 'ComponentSwitchLabel' } },
          { title: '自定义实际值', routerLink: { name: 'ComponentSwitchValue' } },
          { title: '自定义图标', routerLink: { name: 'ComponentSwitchIcon' } }
        ]
      },
      {
        title: 'Radio 单选框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'radio' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentRadioSize' } },
          { title: '自定义值', routerLink: { name: 'ComponentRadioValue' } },
          { title: '禁用状态', routerLink: { name: 'ComponentRadioDisabled' } },
          { title: '允许取消', routerLink: { name: 'ComponentRadioStrict' } },
          { title: '单选组', routerLink: { name: 'ComponentRadioGroup' } },
          { title: '单选按钮', routerLink: { name: 'ComponentRadioButton' } },
          { title: '配置式选项', routerLink: { name: 'ComponentRadioOptions' } },
          { title: '默认值', routerLink: { name: 'ComponentRadioDefaultValue' } }
        ]
      },
      {
        title: 'Checkbox 复选框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'checkbox' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentCheckboxSize' } },
          { title: '半选状态', routerLink: { name: 'ComponentCheckboxIndeterminate' } },
          { title: '自定义值', routerLink: { name: 'ComponentCheckboxValue' } },
          { title: '禁用状态', routerLink: { name: 'ComponentCheckboxDisabled' } },
          { title: '复选组', routerLink: { name: 'ComponentCheckboxGroup' } },
          { title: '复选按钮', routerLink: { name: 'ComponentCheckboxButton' } },
          { title: '限制最大数量', routerLink: { name: 'ComponentCheckboxMax' } },
          { title: '配置式选项', routerLink: { name: 'ComponentCheckboxOptions' } },
          { title: '默认值', routerLink: { name: 'ComponentCheckboxDefaultValue' } }
        ]
      },
      {
        title: 'Rate 评分',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'rate' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentRateSize' } },
          { title: '状态颜色', routerLink: { name: 'ComponentRateStatus' } },
          { title: '禁用状态', routerLink: { name: 'ComponentRateDisabled' } }
        ]
      },
      {
        title: 'Slider 滑块',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'slider' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentSliderSize' } },
          { title: '基础', routerLink: { name: 'ComponentSliderBase' } },
          { title: '范围滑动', routerLink: { name: 'ComponentSliderRange' } },
          { title: '只读', routerLink: { name: 'ComponentSliderReadonly' } },
          { title: '禁用', routerLink: { name: 'ComponentSliderDisabled' } }
        ]
      },
      {
        title: 'Input 输入框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'input' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentInputSize' } },
          { title: '文本类型', routerLink: { name: 'ComponentInputText' } },
          { title: '搜索类型', routerLink: { name: 'ComponentInputSearch' } },
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
          { title: '显示字数统计', routerLink: { name: 'ComponentInputCount' } },
          { title: '前缀图标', routerLink: { name: 'ComponentInputPrefix' } },
          { title: '后缀图标', routerLink: { name: 'ComponentInputSuffix' } },
          {
            title: '自定义插槽模板',
            children: [
              { title: '前缀插槽模板', routerLink: { name: 'ComponentInputTemplatePrefix' } },
              { title: '后缀插槽模板', routerLink: { name: 'ComponentInputTemplateSuffix' } }
            ]
          }
        ]
      },
      // { title: 'TextInput 单行文本输入' },
      {
        title: 'Textarea 多行文本输入',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'textarea' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentTextareaSize' } },
          { title: '禁用状态', routerLink: { name: 'ComponentTextareaDisabled' } },
          { title: '只读状态', routerLink: { name: 'ComponentTextareaReadonly' } },
          { title: '字数统计', routerLink: { name: 'ComponentTextareaCount' } },
          { title: '自适应高度', routerLink: { name: 'ComponentTextareaAutosize' } },
          { title: '可调节高度', routerLink: { name: 'ComponentTextareaResize' } }
        ]
      },
      {
        title: 'NumberInput 数值输入',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'number-input' } } },
          {
            title: '数值',
            children: [
              { title: '基础', routerLink: { name: 'ComponentNumberInputNumberBase' } },
              { title: '可清除', routerLink: { name: 'ComponentNumberInputNumberClearable' } },
              { title: '只读模式', routerLink: { name: 'ComponentNumberInputNumberReadonly' } },
              { title: '设置步数', routerLink: { name: 'ComponentNumberInputNumberStep' } },
              { title: '最小值与最大值', routerLink: { name: 'ComponentNumberInputNumberRange' } },
              { title: '控制按钮', routerLink: { name: 'ComponentNumberInputNumberControls' } },
              { title: '按钮布局', routerLink: { name: 'ComponentNumberInputNumberLayout' } },
              { title: '自定义按钮图标', routerLink: { name: 'ComponentNumberInputNumberControlIcon' } },
              { title: '前缀后缀图标', routerLink: { name: 'ComponentNumberInputNumberIcon' } },
              { title: '自定义模板', routerLink: { name: 'ComponentNumberInputNumberTemplate' } }
            ]
          },
          {
            title: '整数',
            children: [
              { title: '基础', routerLink: { name: 'ComponentNumberInputIntegerBase' } },
              { title: '可清除', routerLink: { name: 'ComponentNumberInputIntegerClearable' } },
              { title: '只读模式', routerLink: { name: 'ComponentNumberInputIntegerReadonly' } },
              { title: '设置步数', routerLink: { name: 'ComponentNumberInputIntegerStep' } },
              { title: '最小值与最大值', routerLink: { name: 'ComponentNumberInputIntegerRange' } },
              { title: '控制按钮', routerLink: { name: 'ComponentNumberInputIntegerControls' } }
            ]
          },
          {
            title: '小数',
            children: [
              { title: '基础', routerLink: { name: 'ComponentNumberInputFloatBase' } },
              { title: '可清除', routerLink: { name: 'ComponentNumberInputFloatClearable' } },
              { title: '只读模式', routerLink: { name: 'ComponentNumberInputFloatReadonly' } },
              { title: '设置步数', routerLink: { name: 'ComponentNumberInputFloatStep' } },
              { title: '小数位数', routerLink: { name: 'ComponentNumberInputFloatDigits' } },
              { title: '最小值与最大值', routerLink: { name: 'ComponentNumberInputFloatRange' } },
              { title: '自动补0', routerLink: { name: 'ComponentNumberInputFloatAutoFill' } },
              { title: '控制按钮', routerLink: { name: 'ComponentNumberInputFloatControls' } }
            ]
          },
          {
            title: '金额',
            children: [
              { title: '基础', routerLink: { name: 'ComponentNumberInputAmountBase' } },
              { title: '对其方式', routerLink: { name: 'ComponentNumberInputAmountAlign' } },
              { title: '可清除', routerLink: { name: 'ComponentNumberInputAmountClearable' } },
              { title: '只读模式', routerLink: { name: 'ComponentNumberInputAmountReadonly' } },
              { title: '设置步数', routerLink: { name: 'ComponentNumberInputAmountStep' } },
              { title: '小数位数', routerLink: { name: 'ComponentNumberInputAmountDigits' } },
              { title: '最小值与最大值', routerLink: { name: 'ComponentNumberInputAmountRange' } },
              { title: '自动补0', routerLink: { name: 'ComponentNumberInputAmountAutoFill' } },
              { title: '显示货币符号', routerLink: { name: 'ComponentNumberInputAmountShowCurrency' } },
              { title: '控制按钮', routerLink: { name: 'ComponentNumberInputAmountControls' } },
              { title: '按钮布局', routerLink: { name: 'ComponentNumberInputAmountLayout' } },
              { title: '自定义按钮图标', routerLink: { name: 'ComponentNumberInputAmountControlIcon' } },
              { title: '前缀后缀图标', routerLink: { name: 'ComponentNumberInputAmountIcon' } },
              { title: '自定义模板', routerLink: { name: 'ComponentNumberInputAmountTemplate' } }
            ]
          }
        ]
      },
      {
        title: 'PasswordInput 密码输入',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'password-input' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentPasswordInputSize' } },
          { title: '可清除', routerLink: { name: 'ComponentPasswordInputClearable' } },
          { title: '控制按钮', routerLink: { name: 'ComponentPasswordInputControls' } }
        ]
      },
      {
        title: 'ColorPicker 颜色选择',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'color-picker' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentColorPickerSize' } },
          { title: '可清除', routerLink: { name: 'ComponentColorPickerClearable' } },
          { title: '快捷颜色', routerLink: { name: 'ComponentColorPickerColors' } },
          { title: 'RGB 色值', routerLink: { name: 'ComponentColorPickerType' } },
          { title: '取色器', routerLink: { name: 'ComponentColorPickerShowEyeDropper' } }
        ]
      },
      {
        title: 'IconPicker 图标选择',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'icon-picker' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentIconPickerSize' } },
          { title: '可清除', routerLink: { name: 'ComponentIconPickerClearable' } },
          { title: '内置图标', routerLink: { name: 'ComponentIconPickerIcons' } },
          { title: '自定义图标', routerLink: { name: 'ComponentIconPickerCustomIcon' } },
          { title: '图标颜色', routerLink: { name: 'ComponentIconPickerColor' } },
          {
            i18nKey: 'app.aside.menu.iconPickerGlobalRenderer',
            children: [
              { title: 'API', routerLink: { name: 'GlobalRendererIconPickerAPI' } },
              { title: '选项图标', routerLink: { name: 'GlobalRendererIconPickerIcon' } }
            ]
          },
          { title: '使用第三方图标', isPlugin: true, linkUrl: `${otherUrl}/#/other-iconfont/symbol/icon-picker/icons` }
        ]
      },
      {
        title: 'DatePicker 日期选择',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'date-picker' } } },
          {
            title: '日期类型',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentDatePickerDateSize' } },
              { title: '绑定值', routerLink: { name: 'ComponentDatePickerDateBase' } },
              { title: '可清除', routerLink: { name: 'ComponentDatePickerDateClearable' } },
              { title: '禁用', routerLink: { name: 'ComponentDatePickerDateDisabled' } },
              { title: '查看模式', routerLink: { name: 'ComponentDatePickerDateReadonly' } },
              { title: '禁用输入', routerLink: { name: 'ComponentDatePickerDateEditable' } },
              { title: '多选', routerLink: { name: 'ComponentDatePickerDateMultiple' } },
              { title: '自动关闭', routerLink: { name: 'ComponentDatePickerDateAutoClose' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDatePickerDateShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerDateShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDatePickerDateShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerDateShortcutCustom' } }
                ]
              },
              { title: '限制日期范围', routerLink: { name: 'ComponentDatePickerDateMinMax' } },
              { title: '限制指定日期', routerLink: { name: 'ComponentDatePickerDateDisabledMethod' } },
              { title: '前缀图标', routerLink: { name: 'ComponentDatePickerDatePrefixIcon' } },
              { title: '后缀图标', routerLink: { name: 'ComponentDatePickerDateSuffixIcon' } },
              { title: '面板的默认日期', routerLink: { name: 'ComponentDatePickerDateDefVal' } },
              { title: '小圆点', routerLink: { name: 'ComponentDatePickerDateDot' } },
              { title: '农历及节假日', routerLink: { name: 'ComponentDatePickerDateHolidays' } },
              {
                title: '自定义插槽模板',
                children: [
                  { title: '自定义顶部模板', routerLink: { name: 'ComponentDatePickerDateTemplateTop' } },
                  { title: '自定义底部模板', routerLink: { name: 'ComponentDatePickerDateTemplateBottom' } },
                  { title: '自定义左侧模板', routerLink: { name: 'ComponentDatePickerDateTemplateLeft' } },
                  { title: '自定义右侧模板', routerLink: { name: 'ComponentDatePickerDateTemplateRight' } }
                ]
              }
            ]
          },
          {
            title: '时间类型',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentDatePickerTimeSize' } },
              { title: '绑定值', routerLink: { name: 'ComponentDatePickerTimeBase' } },
              { title: '可清除', routerLink: { name: 'ComponentDatePickerTimeClearable' } },
              { title: '禁用', routerLink: { name: 'ComponentDatePickerTimeDisabled' } },
              { title: '自定义格式', routerLink: { name: 'ComponentDatePickerTimeValueFormat' } },
              {
                title: '快捷按钮',
                children: [
                  // { title: '内置 Code', routerLink: { name: 'ComponentDatePickerTimeShortcutCode' } },
                  // { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerTimeShortcutStatus' } },
                  // { title: '显示位置', routerLink: { name: 'ComponentDatePickerTimeShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerTimeShortcutCustom' } }
                ]
              },
              { title: '面板的默认日期', routerLink: { name: 'ComponentDatePickerTimeDefVal' } },
              {
                title: '自定义插槽模板',
                children: [
                  { title: '自定义顶部模板', routerLink: { name: 'ComponentDatePickerTimeTemplateTop' } },
                  { title: '自定义底部模板', routerLink: { name: 'ComponentDatePickerTimeTemplateBottom' } },
                  { title: '自定义左侧模板', routerLink: { name: 'ComponentDatePickerTimeTemplateLeft' } },
                  { title: '自定义右侧模板', routerLink: { name: 'ComponentDatePickerTimeTemplateRight' } }
                ]
              }
            ]
          },
          {
            title: '日期带时间类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDatePickerDatetimeBase' } },
              { title: '可清除', routerLink: { name: 'ComponentDatePickerDatetimeClearable' } },
              { title: '禁用', routerLink: { name: 'ComponentDatePickerDatetimeDisabled' } },
              { title: '禁止输入', routerLink: { name: 'ComponentDatePickerDatetimeEditable' } },
              { title: '多选', routerLink: { name: 'ComponentDatePickerDatetimeMultiple' } },
              { title: '自定义格式', routerLink: { name: 'ComponentDatePickerDatetimeValueFormat' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDatePickerDatetimeShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerDatetimeShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDatePickerDatetimeShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerDatetimeShortcutCustom' } }
                ]
              },
              { title: '面板的默认日期', routerLink: { name: 'ComponentDatePickerDatetimeDefVal' } },
              { title: '小圆点', routerLink: { name: 'ComponentDatePickerDatetimeDot' } },
              { title: '农历及节假日', routerLink: { name: 'ComponentDatePickerDatetimeHolidays' } },
              {
                title: '自定义插槽模板',
                children: [
                  { title: '自定义顶部模板', routerLink: { name: 'ComponentDatePickerDatetimeTemplateTop' } },
                  { title: '自定义底部模板', routerLink: { name: 'ComponentDatePickerDatetimeTemplateBottom' } },
                  { title: '自定义左侧模板', routerLink: { name: 'ComponentDatePickerDatetimeTemplateLeft' } },
                  { title: '自定义右侧模板', routerLink: { name: 'ComponentDatePickerDatetimeTemplateRight' } }
                ]
              }
            ]
          },
          {
            title: '周类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDatePickerWeekBase' } },
              { title: '可清除', routerLink: { name: 'ComponentDatePickerWeekClearable' } },
              { title: '禁用', routerLink: { name: 'ComponentDatePickerWeekDisabled' } },
              { title: '多选', routerLink: { name: 'ComponentDatePickerWeekMultiple' } },
              { title: '自定义开始日', routerLink: { name: 'ComponentDatePickerWeekStartDay' } },
              { title: '自定义返回值', routerLink: { name: 'ComponentDatePickerWeekSelectDay' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDatePickerWeekShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerWeekShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDatePickerWeekShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerWeekShortcutCustom' } }
                ]
              },
              { title: '面板的默认日期', routerLink: { name: 'ComponentDatePickerWeekDefVal' } },
              {
                title: '自定义插槽模板',
                children: [
                  { title: '自定义顶部模板', routerLink: { name: 'ComponentDatePickerWeekTemplateTop' } },
                  { title: '自定义底部模板', routerLink: { name: 'ComponentDatePickerWeekTemplateBottom' } },
                  { title: '自定义左侧模板', routerLink: { name: 'ComponentDatePickerWeekTemplateLeft' } },
                  { title: '自定义右侧模板', routerLink: { name: 'ComponentDatePickerWeekTemplateRight' } }
                ]
              }
            ]
          },
          {
            title: '月度类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDatePickerMonthBase' } },
              { title: '可清除', routerLink: { name: 'ComponentDatePickerMonthClearable' } },
              { title: '多选', routerLink: { name: 'ComponentDatePickerMonthMultiple' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDatePickerMonthShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerMonthShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDatePickerMonthShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerMonthShortcutCustom' } }
                ]
              },
              { title: '面板的默认日期', routerLink: { name: 'ComponentDatePickerMonthDefVal' } }
            ]
          },
          {
            title: '季度类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDatePickerQuarterBase' } },
              { title: '可清除', routerLink: { name: 'ComponentDatePickerQuarterClearable' } },
              { title: '多选', routerLink: { name: 'ComponentDatePickerQuarterMultiple' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDatePickerQuarterShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerQuarterShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDatePickerQuarterShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerQuarterShortcutCustom' } }
                ]
              },
              { title: '面板的默认日期', routerLink: { name: 'ComponentDatePickerQuarterDefVal' } }
            ]
          },
          {
            title: '年度类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDatePickerYearBase' } },
              { title: '可清除', routerLink: { name: 'ComponentDatePickerYearClearable' } },
              { title: '多选', routerLink: { name: 'ComponentDatePickerYearMultiple' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDatePickerYearShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerYearShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDatePickerYearShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerYearShortcutCustom' } }
                ]
              },
              { title: '面板的默认日期', routerLink: { name: 'ComponentDatePickerYearDefVal' } }
            ]
          },
          {
            title: '功能示例',
            children: [
              { title: '实现日期带小圆点', routerLink: { name: 'ComponentDatePickerFestivalMethod' } },
              { title: '实现农历及节假日', routerLink: { name: 'ComponentDatePickerHolidays' } }
            ]
          },
          {
            title: '快捷按钮指令（全局复用）',
            children: [
              { title: 'API', routerLink: { name: 'GlobalCommandsDatePickerAPI' } },
              { title: '快捷按钮', routerLink: { name: 'GlobalCommandsDatePickerBase' } }
            ]
          }
        ]
      },
      {
        title: 'DateRangePicker 日期范围选择',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'date-range-picker' } } },
          {
            title: '日期类型',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentDateRangePickerDateSize' } },
              { title: '绑定值', routerLink: { name: 'ComponentDateRangePickerDateBase' } },
              { title: '可清除', routerLink: { name: 'ComponentDateRangePickerDateClearable' } },
              { title: '禁用', routerLink: { name: 'ComponentDateRangePickerDateDisabled' } },
              { title: '查看模式', routerLink: { name: 'ComponentDateRangePickerDateReadonly' } },
              { title: '自动关闭', routerLink: { name: 'ComponentDateRangePickerDateAutoClose' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDateRangePickerDateShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDateRangePickerDateShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDateRangePickerDateShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDateRangePickerDateShortcutCustom' } }
                ]
              },
              { title: '限制指定日期', routerLink: { name: 'ComponentDateRangePickerDateDisabledMethod' } },
              { title: '前缀图标', routerLink: { name: 'ComponentDateRangePickerDatePrefixIcon' } },
              { title: '后缀图标', routerLink: { name: 'ComponentDateRangePickerDateSuffixIcon' } },
              { title: '面板的默认日期', routerLink: { name: 'ComponentDateRangePickerDateDefVal' } },
              {
                title: '自定义插槽模板',
                children: [
                  { title: '自定义顶部模板', routerLink: { name: 'ComponentDateRangePickerDateTemplateTop' } },
                  { title: '自定义底部模板', routerLink: { name: 'ComponentDateRangePickerDateTemplateBottom' } },
                  { title: '自定义左侧模板', routerLink: { name: 'ComponentDateRangePickerDateTemplateLeft' } },
                  { title: '自定义右侧模板', routerLink: { name: 'ComponentDateRangePickerDateTemplateRight' } }
                ]
              }
            ]
          },
          {
            title: '时间类型',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentDateRangePickerTimeSize' } },
              { title: '绑定值', routerLink: { name: 'ComponentDateRangePickerTimeBase' } },
              { title: '可清除', routerLink: { name: 'ComponentDateRangePickerTimeClearable' } },
              { title: '禁用', routerLink: { name: 'ComponentDateRangePickerTimeDisabled' } },
              { title: '自定义格式', routerLink: { name: 'ComponentDateRangePickerTimeValueFormat' } },
              {
                title: '快捷按钮',
                children: [
                  // { title: '内置 Code', routerLink: { name: 'ComponentDateRangePickerTimeShortcutCode' } },
                  // { title: '按钮状态颜色', routerLink: { name: 'ComponentDateRangePickerTimeShortcutStatus' } },
                  // { title: '显示位置', routerLink: { name: 'ComponentDateRangePickerTimeShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDateRangePickerTimeShortcutCustom' } }
                ]
              },
              { title: '面板的默认日期', routerLink: { name: 'ComponentDateRangePickerTimeDefVal' } },
              {
                title: '自定义插槽模板',
                children: [
                  { title: '自定义顶部模板', routerLink: { name: 'ComponentDateRangePickerTimeTemplateTop' } },
                  { title: '自定义底部模板', routerLink: { name: 'ComponentDateRangePickerTimeTemplateBottom' } },
                  { title: '自定义左侧模板', routerLink: { name: 'ComponentDateRangePickerTimeTemplateLeft' } },
                  { title: '自定义右侧模板', routerLink: { name: 'ComponentDateRangePickerTimeTemplateRight' } }
                ]
              }
            ]
          },
          {
            title: '日期带时间类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDateRangePickerDatetimeBase' } },
              { title: '禁用', routerLink: { name: 'ComponentDateRangePickerDatetimeDisabled' } },
              { title: '可清除', routerLink: { name: 'ComponentDateRangePickerDatetimeClearable' } },
              { title: '自定义格式', routerLink: { name: 'ComponentDateRangePickerDatetimeValueFormat' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDateRangePickerDatetimeShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDateRangePickerDatetimeShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDateRangePickerDatetimeShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDateRangePickerDatetimeShortcutCustom' } }
                ]
              },
              { title: '面板的默认日期', routerLink: { name: 'ComponentDateRangePickerDatetimeDefVal' } },
              {
                title: '自定义插槽模板',
                children: [
                  { title: '自定义顶部模板', routerLink: { name: 'ComponentDateRangePickerDatetimeTemplateTop' } },
                  { title: '自定义底部模板', routerLink: { name: 'ComponentDateRangePickerDatetimeTemplateBottom' } },
                  { title: '自定义左侧模板', routerLink: { name: 'ComponentDateRangePickerDatetimeTemplateLeft' } },
                  { title: '自定义右侧模板', routerLink: { name: 'ComponentDateRangePickerDatetimeTemplateRight' } }
                ]
              }
            ]
          },
          {
            title: '周类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDateRangePickerWeekBase' } },
              { title: '禁用', routerLink: { name: 'ComponentDateRangePickerWeekDisabled' } },
              { title: '可清除', routerLink: { name: 'ComponentDateRangePickerWeekClearable' } },
              { title: '自定义开始日', routerLink: { name: 'ComponentDateRangePickerWeekStartDay' } },
              { title: '自定义返回值', routerLink: { name: 'ComponentDateRangePickerWeekSelectDay' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDateRangePickerWeekShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDateRangePickerWeekShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDateRangePickerWeekShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDateRangePickerWeekShortcutCustom' } }
                ]
              },
              {
                title: '自定义插槽模板',
                children: [
                  { title: '自定义顶部模板', routerLink: { name: 'ComponentDateRangePickerWeekTemplateTop' } },
                  { title: '自定义底部模板', routerLink: { name: 'ComponentDateRangePickerWeekTemplateBottom' } },
                  { title: '自定义左侧模板', routerLink: { name: 'ComponentDateRangePickerWeekTemplateLeft' } },
                  { title: '自定义右侧模板', routerLink: { name: 'ComponentDateRangePickerWeekTemplateRight' } }
                ]
              }
            ]
          },
          {
            title: '月度类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDateRangePickerMonthBase' } },
              { title: '可清除', routerLink: { name: 'ComponentDateRangePickerMonthClearable' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDateRangePickerMonthShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDateRangePickerMonthShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDateRangePickerMonthShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDateRangePickerMonthShortcutCustom' } }
                ]
              }
            ]
          },
          {
            title: '季度类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDateRangePickerQuarterBase' } },
              { title: '可清除', routerLink: { name: 'ComponentDateRangePickerQuarterClearable' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDateRangePickerQuarterShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDateRangePickerQuarterShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDateRangePickerQuarterShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDateRangePickerQuarterShortcutCustom' } }
                ]
              }
            ]
          },
          {
            title: '年度类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDateRangePickerYearBase' } },
              { title: '可清除', routerLink: { name: 'ComponentDateRangePickerYearClearable' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDateRangePickerYearShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDateRangePickerYearShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDateRangePickerYearShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDateRangePickerYearShortcutCustom' } }
                ]
              }
            ]
          },
          {
            title: '功能示例',
            children: [
              { title: '实现日期带小圆点', routerLink: { name: 'ComponentDateRangePickerFestivalMethod' } },
              { title: '实现农历及节假日', routerLink: { name: 'ComponentDateRangePickerHolidays' } }
            ]
          },
          {
            title: '快捷按钮指令（全局复用）',
            children: [
              { title: 'API', routerLink: { name: 'GlobalCommandsDateRangePickerAPI' } },
              { title: '快捷按钮', routerLink: { name: 'GlobalCommandsDateRangePickerBase' } }
            ]
          }
        ]
      },
      {
        title: 'Select 下拉框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'select' } } },
          {
            title: '基础',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentSelectBaseSize' } },
              { title: '可清除', routerLink: { name: 'ComponentSelectBaseClearable' } },
              { title: '禁用', routerLink: { name: 'ComponentSelectBaseDisabled' } },
              { title: '自定义图标', routerLink: { name: 'ComponentSelectBaseIcon' } },
              { title: '加载中', routerLink: { name: 'ComponentSelectBaseLoading' } },
              { title: '本地搜索', routerLink: { name: 'ComponentSelectBaseFilterable' } },
              { title: '远程搜索', routerLink: { name: 'ComponentSelectBaseRemote' } },
              { title: '分组', routerLink: { name: 'ComponentSelectBaseGroup' } },
              { title: '默认值', routerLink: { name: 'ComponentSelectBaseDefaultValue' } },
              { title: '多选', routerLink: { name: 'ComponentSelectBaseMultiple' } },
              { title: '限制最大数量', routerLink: { name: 'ComponentSelectBaseMax' } },
              { title: '自定义宽高', routerLink: { name: 'ComponentSelectBasePopupWH' } },
              { title: '可新增', routerLink: { name: 'ComponentSelectBaseAllowCreate' } },
              { title: '操作按钮', routerLink: { name: 'ComponentSelectBaseOperBtn' } },
              { title: '自定义插槽模板', routerLink: { name: 'ComponentSelectBaseTemplate' } },
              { title: '虚拟滚动（大量数据选项）', routerLink: { name: 'ComponentSelectBaseScroll' } }
            ]
          },
          {
            title: '配置式',
            children: [
              { title: '可清除', routerLink: { name: 'ComponentSelectConfigClearable' } },
              { title: '禁用', routerLink: { name: 'ComponentSelectConfigDisabled' } },
              { title: '加载中', routerLink: { name: 'ComponentSelectConfigLoading' } },
              { title: '本地搜索', routerLink: { name: 'ComponentSelectConfigFilterable' } },
              { title: '远程搜索', routerLink: { name: 'ComponentSelectConfigRemote' } },
              { title: '分组', routerLink: { name: 'ComponentSelectConfigGroup' } },
              { title: '默认值', routerLink: { name: 'ComponentSelectConfigDefaultValue' } },
              { title: '多选', routerLink: { name: 'ComponentSelectConfigMultiple' } },
              { title: '限制最大数量', routerLink: { name: 'ComponentSelectConfigMax' } },
              { title: '自定义宽高', routerLink: { name: 'ComponentSelectConfigPopupWH' } },
              { title: '可新增', routerLink: { name: 'ComponentSelectConfigAllowCreate' } },
              { title: '操作按钮', routerLink: { name: 'ComponentSelectConfigOperBtn' } },
              { title: '自定义插槽模板', routerLink: { name: 'ComponentSelectConfigTemplate' } },
              { title: '虚拟滚动（大量数据选项）', routerLink: { name: 'ComponentSelectConfigScroll' } },
              { title: '实现人员选择', routerLink: { name: 'ComponentSelectConfigUserSelect' } }
            ]
          }
        ]
      },
      {
        title: 'TreeSelect 下拉树选择',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tree-select' } } },
          {
            title: '基础',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentTreeSelectBaseSize' } },
              { title: '层级结构', routerLink: { name: 'ComponentTreeSelectBaseHierarchy' } },
              { title: '平级结构', routerLink: { name: 'ComponentTreeSelectBaseLeveling' } },
              { title: '多选', routerLink: { name: 'ComponentTreeSelectBaseMultiple' } },
              { title: '自定义图标', routerLink: { name: 'ComponentTreeSelectBaseIcon' } },
              { title: '自定义字段', routerLink: { name: 'ComponentTreeSelectBaseOptionProps' } },
              { title: '自定义宽高', routerLink: { name: 'ComponentTreeSelectBasePopupWH' } },
              { title: '连接线', routerLink: { name: 'ComponentTreeSelectBaseShowLine' } },
              { title: '默认展开', routerLink: { name: 'ComponentTreeSelectBaseExpandAll' } },
              { title: '选中子节点', routerLink: { name: 'ComponentTreeSelectBaseTrigger' } }
            ]
          },
          {
            title: '单选框',
            children: [
              { title: '显示单选框', routerLink: { name: 'ComponentTreeSelectRadioBase' } },
              { title: '选中子节点', routerLink: { name: 'ComponentTreeSelectRadioTrigger' } }
            ]
          },
          {
            title: '复选框',
            children: [
              { title: '显示复选框', routerLink: { name: 'ComponentTreeSelectCheckboxBase' } },
              { title: '节点不关联', routerLink: { name: 'ComponentTreeSelectCheckboxCheckStrictly' } },
              { title: '选中子节点', routerLink: { name: 'ComponentTreeSelectCheckboxTrigger' } }
            ]
          },
          {
            title: '搜索',
            children: [
              { title: '过滤节点', routerLink: { name: 'ComponentTreeSelectSearchFilterValue' } },
              { title: '自定义过滤方法', routerLink: { name: 'ComponentTreeSelectSearchFilterMethod' } }
            ]
          },
          {
            title: '操作按钮',
            children: [
              { title: '多选按钮', routerLink: { name: 'ComponentTreeSelectOperBtnChecked' } },
              { title: '展开收起按钮', routerLink: { name: 'ComponentTreeSelectOperBtnAll' } }
            ]
          },
          {
            title: '懒加载',
            children: [
              { title: '加载子节点', routerLink: { name: 'ComponentTreeSelectLazyBase' } },
              { title: '多选', routerLink: { name: 'ComponentTreeSelectLazyMultiple' } },
              { title: '处理回显', routerLink: { name: 'ComponentTreeSelectLazyLazyOptions' } }
            ]
          },
          {
            title: '虚拟滚动',
            children: [
              { title: '纵向虚拟滚动', routerLink: { name: 'ComponentTreeSelectScrollBasics' } },
              { title: '可过滤', routerLink: { name: 'ComponentTreeSelectScrollFilter' } }
            ]
          }
        ]
      },
      {
        title: 'TableSelect 下拉表格选择',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'table-select' } } },
          {
            title: '基础',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentTableSelectBaseSize' } },
              { title: '列配置', routerLink: { name: 'ComponentTableSelectBaseColumns' } },
              { title: '加载中', routerLink: { name: 'ComponentTableSelectBaseLoading' } },
              { title: '边框', routerLink: { name: 'ComponentTableSelectBaseBorder' } },
              { title: '可清除', routerLink: { name: 'ComponentTableSelectBaseClearable' } },
              { title: '自定义字段', routerLink: { name: 'ComponentTableSelectBaseOptionProps' } },
              { title: '点击行自动选中', routerLink: { name: 'ComponentTableSelectBaseRadioTrigger' } },
              { title: '自定义宽高', routerLink: { name: 'ComponentTableSelectBasePopupWH' } },
              { title: '表尾数据', routerLink: { name: 'ComponentTableSelectBaseFooter' } }
            ]
          },
          {
            title: '复选框',
            children: [
              { title: '显示复选框', routerLink: { name: 'ComponentTableSelectCheckboxBase' } },
              { title: '可清除', routerLink: { name: 'ComponentTableSelectCheckboxClearable' } },
              { title: '点击行自动选中', routerLink: { name: 'ComponentTableSelectCheckboxTrigger' } }
            ]
          },
          {
            title: '查询表单',
            children: [
              { title: '查询表单', routerLink: { name: 'ComponentTableSelectFormSearch' } },
              { title: '折叠表单', routerLink: { name: 'ComponentTableSelectFormCollapse' } }
            ]
          },
          {
            title: '分页',
            children: [
              { title: '数据分页', routerLink: { name: 'ComponentTableSelectPagerPage' } }
            ]
          },
          {
            title: '数据代理',
            children: [
              { title: '查询接口', routerLink: { name: 'ComponentTableSelectProxyQuery' } },
              { title: '分页查询接口', routerLink: { name: 'ComponentTableSelectProxyPager' } },
              { title: '集成表单查询', routerLink: { name: 'ComponentTableSelectProxyForm' } }
            ]
          },
          {
            title: '虚拟滚动（大量数据选项）',
            children: [
              { title: '纵向虚拟滚动', routerLink: { name: 'ComponentTableSelectScrollVertical' } },
              { title: '横向虚拟滚动', routerLink: { name: 'ComponentTableSelectScrollHorizontal' } },
              { title: '纵向和横向虚拟滚动', routerLink: { name: 'ComponentTableSelectScrollHV' } },
              { title: '使用分组表头', routerLink: { name: 'ComponentTableSelectScrollGroup' } }
            ]
          }
        ]
      },
      {
        title: 'Upload 上传',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'upload' } } },
          {
            title: '全局调用',
            children: [
              { title: '读取文件', routerLink: { name: 'ComponentUploadGlobalReadFile' } },
              { title: '下载文件', routerLink: { name: 'ComponentUploadGlobalSaveFile' } }
            ]
          },
          {
            title: '文件上传',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentUploadFileSize' } },
              { title: '单选模式', routerLink: { name: 'ComponentUploadFileBase' } },
              { title: '只读状态', routerLink: { name: 'ComponentUploadFileReadonly' } },
              { title: '禁用状态', routerLink: { name: 'ComponentUploadFileDisabled' } },
              { title: '自定义预览', routerLink: { name: 'ComponentUploadFileCustomReview' } },
              { title: '上传方法', routerLink: { name: 'ComponentUploadFileUploadMethod' } },
              { title: '下载文件', routerLink: { name: 'ComponentUploadFileDownloadMethod' } },
              { title: '阻止下载', routerLink: { name: 'ComponentUploadFileBeforeDownloadMethod' } },
              { title: '多选模式', routerLink: { name: 'ComponentUploadFileMultiple' } },
              { title: '提示', routerLink: { name: 'ComponentUploadFileTip' } },
              { title: '拖拽上传', routerLink: { name: 'ComponentUploadFileDragToUpload' } },
              { title: '粘贴上传', routerLink: { name: 'ComponentUploadFilePasteToUpload' } },
              { title: '上传进度', routerLink: { name: 'ComponentUploadFileProgress' } },
              { title: '唯一值模式', routerLink: { name: 'ComponentUploadFileSingleMode' } },
              { title: 'URL 模式', routerLink: { name: 'ComponentUploadFileUrlMode' } },
              { title: '指定文件类型', routerLink: { name: 'ComponentUploadFileTypes' } },
              { title: '限制上传数量', routerLink: { name: 'ComponentUploadFileLimitCount' } },
              { title: '限制附件大小', routerLink: { name: 'ComponentUploadFileLimitSize' } },
              { title: '删除文件', routerLink: { name: 'ComponentUploadFileRemoveMethod' } },
              { title: '阻止删除', routerLink: { name: 'ComponentUploadFileBeforeRemoveMethod' } },
              // { title: '自定义上传按钮', routerLink: { name: 'ComponentUploadFileShowUploadButton' } },
              { title: '自动隐藏上传按钮', routerLink: { name: 'ComponentUploadFileAutoHidden' } },
              { title: '显示更多', routerLink: { name: 'ComponentUploadFileMoreBtn' } },
              { title: '拖拽调整顺序', routerLink: { name: 'ComponentUploadFileDragSort' } },
              { title: '失败重新上传', routerLink: { name: 'ComponentUploadFileShowError' } },
              { title: '手动上传', routerLink: { name: 'ComponentUploadFileManualSubmit' } },
              // { title: '自定义操作按钮', routerLink: { name: 'ComponentUploadFileAction' } },
              {
                title: '自定义操作按钮',
                children: [
                  { title: '自定义上传按钮模板', routerLink: { name: 'ComponentUploadFileTemplateDefault' } },
                  { title: '自定义上传提示模板', routerLink: { name: 'ComponentUploadFileTemplateTip' } },
                  { title: '自定义文件名模板', routerLink: { name: 'ComponentUploadFileTemplateName' } },
                  { title: '自定义操作按钮模板', routerLink: { name: 'ComponentUploadFileTemplateAction' } },
                  { title: '自定义额外操作按钮模板', routerLink: { name: 'ComponentUploadFileTemplateCorner' } },
                  { title: '自定义文件项模板', routerLink: { name: 'ComponentUploadFileTemplateOption' } }
                ]
              }
            ]
          },
          {
            title: '图片上传',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentUploadImageSize' } },
              { title: '单选模式', routerLink: { name: 'ComponentUploadImageBase' } },
              { title: '只读状态', routerLink: { name: 'ComponentUploadImageReadonly' } },
              { title: '禁用状态', routerLink: { name: 'ComponentUploadImageDisabled' } },
              { title: '自定义图片宽高', routerLink: { name: 'ComponentUploadImageImgStyle' } },
              { title: '圆形图片', routerLink: { name: 'ComponentUploadImageCircle' } },
              { title: '自定义预览', routerLink: { name: 'ComponentUploadImageCustomReview' } },
              { title: '下载文件', routerLink: { name: 'ComponentUploadImageDownloadMethod' } },
              { title: '上传方法', routerLink: { name: 'ComponentUploadImageUploadMethod' } },
              { title: '阻止下载', routerLink: { name: 'ComponentUploadImageBeforeDownloadMethod' } },
              { title: '多选模式', routerLink: { name: 'ComponentUploadImageMultiple' } },
              { title: '提示', routerLink: { name: 'ComponentUploadImageTip' } },
              { title: '拖拽上传', routerLink: { name: 'ComponentUploadImageDragToUpload' } },
              { title: '粘贴上传', routerLink: { name: 'ComponentUploadImagePasteToUpload' } },
              { title: '上传进度', routerLink: { name: 'ComponentUploadImageProgress' } },
              { title: '唯一值模式', routerLink: { name: 'ComponentUploadImageSingleMode' } },
              { title: 'URL 模式', routerLink: { name: 'ComponentUploadImageUrlMode' } },
              { title: '缩略图链接地址', routerLink: { name: 'ComponentUploadImageThumbnailUrl' } },
              { title: '指定文件类型', routerLink: { name: 'ComponentUploadImageTypes' } },
              { title: '限制上传数量', routerLink: { name: 'ComponentUploadImageLimitCount' } },
              { title: '限制附件大小', routerLink: { name: 'ComponentUploadImageLimitSize' } },
              { title: '删除图片', routerLink: { name: 'ComponentUploadImageRemoveMethod' } },
              { title: '阻止删除', routerLink: { name: 'ComponentUploadImageBeforeRemoveMethod' } },
              // { title: '自定义上传按钮', routerLink: { name: 'ComponentUploadImageShowUploadButton' } },
              { title: '自动隐藏按钮', routerLink: { name: 'ComponentUploadImageAutoHidden' } },
              { title: '显示更多', routerLink: { name: 'ComponentUploadImageMoreBtn' } },
              { title: '拖拽调整顺序', routerLink: { name: 'ComponentUploadImageDragSort' } },
              { title: '失败重新上传', routerLink: { name: 'ComponentUploadImageShowError' } },
              { title: '手动上传', routerLink: { name: 'ComponentUploadImageManualSubmit' } },
              // { title: '自定义操作按钮', routerLink: { name: 'ComponentUploadImageAction' } },
              {
                title: '自定义操作按钮',
                children: [
                  { title: '自定义上传按钮模板', routerLink: { name: 'ComponentUploadImageTemplateDefault' } },
                  { title: '自定义上传提示模板', routerLink: { name: 'ComponentUploadImageTemplateTip' } },
                  // { title: '自定义文件名模板', routerLink: { name: 'ComponentUploadImageTemplateName' } },
                  { title: '自定义操作按钮模板', routerLink: { name: 'ComponentUploadImageTemplateAction' } },
                  { title: '自定义额外操作按钮模板', routerLink: { name: 'ComponentUploadImageTemplateCorner' } },
                  { title: '自定义文件项模板', routerLink: { name: 'ComponentUploadImageTemplateOption' } }
                ]
              }
            ]
          }
        ]
      }
      // { title: 'Transfer 穿梭框' }
    ]
  },
  tableNavConfig,
  {
    i18nKey: 'app.aside.menu.treeTitle',
    children: [
      { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tree' } } },
      {
        title: '基础',
        children: [
          { title: '基础', routerLink: { name: 'ComponentTreeBaseBasics' } },
          { title: '尺寸大小', routerLink: { name: 'ComponentTreeBaseSize' } },
          { title: '层级结构', routerLink: { name: 'ComponentTreeBaseHierarchy' } },
          { title: '平级结构', routerLink: { name: 'ComponentTreeBaseLeveling' } },
          { title: '高度', routerLink: { name: 'ComponentTreeBaseHeight' } },
          { title: '加载中', routerLink: { name: 'ComponentTreeBaseLoading' } },
          { title: '自定义字段', routerLink: { name: 'ComponentTreeBaseField' } },
          { title: '触发方式', routerLink: { name: 'ComponentTreeBaseTrigger' } },
          { title: '隐藏图标', routerLink: { name: 'ComponentTreeBaseShowIcon' } },
          { title: '自定义图标', routerLink: { name: 'ComponentTreeBaseIcon' } },
          { title: '手风琴展开效果', routerLink: { name: 'ComponentTreeBaseAccordion' } },
          { title: '连接线', routerLink: { name: 'ComponentTreeBaseShowLine' } },
          { title: '默认展开', routerLink: { name: 'ComponentTreeBaseExpandAll' } }
        ]
      },
      {
        title: '高亮节点',
        children: [
          { title: '当前节点', routerLink: { name: 'ComponentTreeCurrentBase' } },
          { title: '触发方式', routerLink: { name: 'ComponentTreeCurrentTrigger' } },
          { title: '禁用', routerLink: { name: 'ComponentTreeCurrentCurrentMethod' } }
        ]
      },
      {
        title: '单选框',
        children: [
          { title: '单选', routerLink: { name: 'ComponentTreeRadioBase' } },
          { title: '手动操作', routerLink: { name: 'ComponentTreeRadioHandleManual' } },
          { title: '高亮选中节点', routerLink: { name: 'ComponentTreeRadioHighlight' } },
          { title: '默认选中', routerLink: { name: 'ComponentTreeRadioDefaultSelect' } },
          { title: '禁用', routerLink: { name: 'ComponentTreeRadioCheckMethod' } },
          { title: '显示隐藏', routerLink: { name: 'ComponentTreeRadioVisibleMethod' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentTreeRadioTemplate' } }
        ]
      },
      {
        title: '复选框',
        children: [
          { title: '多选', routerLink: { name: 'ComponentTreeCheckboxBase' } },
          { title: '手动操作', routerLink: { name: 'ComponentTreeCheckboxHandleManual' } },
          { title: '高亮选中节点', routerLink: { name: 'ComponentTreeCheckboxHighlight' } },
          { title: '默认选中', routerLink: { name: 'ComponentTreeCheckboxDefaultSelect' } },
          { title: '节点不关联', routerLink: { name: 'ComponentTreeCheckboxCheckStrictly' } },
          { title: '禁用', routerLink: { name: 'ComponentTreeCheckboxCheckMethod' } },
          { title: '显示隐藏', routerLink: { name: 'ComponentTreeCheckboxVisibleMethod' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentTreeCheckboxTemplate' } }
        ]
      },
      {
        title: '搜索',
        children: [
          { title: '过滤节点', routerLink: { name: 'ComponentTreeSearchFilterValue' } },
          { title: '自定义过滤方法', routerLink: { name: 'ComponentTreeSearchFilterMethod' } },
          { title: '实现关键字高亮', routerLink: { name: 'ComponentTreeSearchLight' } }
        ]
      },
      {
        title: '拖拽',
        children: [
          { title: '拖拽调整节点顺序', routerLink: { name: 'ComponentTreeDragSort' } },
          { title: '自定义图标', routerLink: { name: 'ComponentTreeDragIcon' } },
          { title: '拖拽辅助样式', routerLink: { name: 'ComponentTreeDragShowGuidesStatus' } },
          { title: '触发方式', routerLink: { name: 'ComponentTreeDragTrigger' } },
          { title: '拖拽事件', routerLink: { name: 'ComponentTreeDragEvents' } },
          { title: '自定义提示', routerLink: { name: 'ComponentTreeDragTooltipMethod' } },
          { title: '禁用拖拽按钮', routerLink: { name: 'ComponentTreeDragDisabledMethod' } },
          { title: '拖拽按钮可视', routerLink: { name: 'ComponentTreeDragVisibleMethod' } },
          { title: '同层级拖拽', routerLink: { name: 'ComponentTreeDragPeerDrag' } },
          { title: '跨层级拖拽', routerLink: { name: 'ComponentTreeDragCossDrag' } },
          { title: '自己拖拽给自己子级', routerLink: { name: 'ComponentTreeDragSelfToChildDrag' } },
          { title: '拖拽转成子节点', routerLink: { name: 'ComponentTreeDragToChildDrag' } },
          { title: '拖拽拦截', routerLink: { name: 'ComponentTreeDragDragMethod' } }
          // { title: '跨树拖拽', routerLink: { name: 'ComponentTreeDragCossTree' } }
        ]
      },
      {
        title: '懒加载',
        children: [
          { title: '懒加载子节点', routerLink: { name: 'ComponentTreeLazyLoadMethod' } },
          { title: '加载失败', routerLink: { name: 'ComponentTreeLazyError' } },
          { title: '显示连接线', routerLink: { name: 'ComponentTreeLazyShowLine' } }
        ]
      },
      {
        title: '虚拟滚动',
        children: [
          { title: '纵向虚拟滚动', routerLink: { name: 'ComponentTreeScrollBasics' } },
          { title: '函数式加载', routerLink: { name: 'ComponentTreeScrollLoadData' } },
          { title: '滚动到指定位置', routerLink: { name: 'ComponentTreeScrollScrollTo' } }
        ]
      },
      {
        title: '自定义插槽模板',
        children: [
          { title: '自定义标题模板', routerLink: { name: 'ComponentTreeTemplateTitle' } },
          { title: '自定义图标模板', routerLink: { name: 'ComponentTreeTemplateIcon' } },
          { title: '自定义右侧模板', routerLink: { name: 'ComponentTreeTemplateExtra' } },
          { title: '自定义头部模板', routerLink: { name: 'ComponentTreeTemplateHeader' } },
          { title: '自定义尾部模板', routerLink: { name: 'ComponentTreeTemplateFooter' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.feedbackTitle',
    children: [
      {
        i18nKey: 'app.aside.menu.emptyTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'empty' } } },
          { title: '基础', routerLink: { name: 'ComponentEmptyBase' } },
          { title: '自定义图标', routerLink: { name: 'ComponentEmptyIcon' } },
          { title: '状态颜色', routerLink: { name: 'ComponentEmptyStatus' } },
          { title: '自定义图片', routerLink: { name: 'ComponentEmptyImageUrl' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.resultTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'result' } } },
          { title: '基础', routerLink: { name: 'ComponentResultBase' } },
          { title: '自定义图标', routerLink: { name: 'ComponentResultIcon' } },
          { title: '状态颜色', routerLink: { name: 'ComponentResultStatus' } },
          { title: '自定义图片', routerLink: { name: 'ComponentResultImageUrl' } },
          { title: '自定义操作按钮', routerLink: { name: 'ComponentResultExtra' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.noticeBarTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'notice-bar' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentNoticeBarSize' } },
          { title: '横向滚动', routerLink: { name: 'ComponentNoticeBarHorizontal' } },
          { title: '滚动方向', routerLink: { name: 'ComponentNoticeBarDirection' } },
          { title: '滚动速度', routerLink: { name: 'ComponentNoticeBarSpeed' } },
          { title: '动画时间', routerLink: { name: 'ComponentNoticeBarDuration' } },
          { title: '循环滚动', routerLink: { name: 'ComponentNoticeBarLoop' } },
          {
            title: '自定义插槽模板',
            children: [
              { title: '自定义内容模板', routerLink: { name: 'ComponentNoticeBarTemplateDefault' } },
              { title: '自定义前缀模板', routerLink: { name: 'ComponentNoticeBarTemplatePrefix' } },
              { title: '自定义后缀模板', routerLink: { name: 'ComponentNoticeBarTemplateSuffix' } }
            ]
          }
        ]
      },
      {
        i18nKey: 'app.aside.menu.loadingTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'loading' } } },
          { title: '全局调用', routerLink: { name: 'ComponentLoadingGlobalLoading' } },
          { title: '加载中', routerLink: { name: 'ComponentLoadingBase' } },
          { title: '状态', routerLink: { name: 'ComponentLoadingStatus' } },
          { title: '自定义图标', routerLink: { name: 'ComponentLoadingIcon' } },
          { title: '自定义提示', routerLink: { name: 'ComponentLoadingText' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentLoadingTemplate' } }
        ]
      },
      {
        title: 'Tip 提示',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tip' } } },
          { title: '状态', routerLink: { name: 'ComponentTipBase' } },
          { title: '图标', routerLink: { name: 'ComponentTipIcon' } },
          { title: '带标题', routerLink: { name: 'ComponentTipTitle' } }
        ]
      },
      {
        title: 'Alert 警告提示',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'alert' } } },
          { title: '状态', routerLink: { name: 'ComponentAlertBase' } },
          { title: '图标', routerLink: { name: 'ComponentAlertIcon' } },
          { title: '带标题', routerLink: { name: 'ComponentAlertTitle' } },
          { title: '可关闭', routerLink: { name: 'ComponentAlertClose' } }
        ]
      },
      {
        title: 'Drawer 抽屉',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'drawer' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentDrawerSize' } },
          { title: '自定义弹出方向', routerLink: { name: 'ComponentDrawerBase' } },
          { title: '宽度与高度', routerLink: { name: 'ComponentDrawerWH' } },
          { title: '内边距', routerLink: { name: 'ComponentDrawerPadding' } },
          { title: '加载中', routerLink: { name: 'ComponentDrawerLoading' } },
          { title: '点击遮罩层关闭', routerLink: { name: 'ComponentDrawerMaskClosable' } },
          { title: '操作按钮', routerLink: { name: 'ComponentDrawerButton' } },
          { title: '点击确认按钮不可关闭', routerLink: { name: 'ComponentDrawerConfirmClosable' } },
          { title: '点击取消按钮不可关闭', routerLink: { name: 'ComponentDrawerCancelClosable' } },
          { title: '同时弹出多个抽屉', routerLink: { name: 'ComponentDrawerMultiple' } },
          { title: '拖拽调整大小', routerLink: { name: 'ComponentDrawerEscResize' } },
          { title: '按 Esc 键可关闭', routerLink: { name: 'ComponentDrawerEscClosable' } },
          { title: '拦截关闭', routerLink: { name: 'ComponentDrawerBeforeHide' } },
          { title: '自定义模板', routerLink: { name: 'ComponentDrawerTemplateFooter' } },
          { title: '完整插槽模板', routerLink: { name: 'ComponentDrawerTemplateLayout' } },
          { title: '嵌入 iframe', routerLink: { name: 'ComponentDrawerIframe' } }
        ]
      },
      // { title: 'Popover 气泡提示框' },
      {
        title: 'Tooltip 文字提示',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tooltip' } } },
          { title: '触发方式', routerLink: { name: 'ComponentTooltipTrigger' } },
          { title: '可操作', routerLink: { name: 'ComponentTooltipEnterable' } },
          { title: '设置宽高', routerLink: { name: 'ComponentTooltipStyle' } },
          { title: '手动模式', routerLink: { name: 'ComponentTooltipManual' } },
          { title: '单例模式', routerLink: { name: 'ComponentTooltipSingle' } },
          { title: '在表格中使用', routerLink: { name: 'ComponentTooltipTable' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.modalTitle',
    children: [
      { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'modal' } } },
      {
        i18nKey: 'app.aside.menu.modalMessageTitle',
        children: [
          { title: '全局调用', routerLink: { name: 'ComponentModalMessageGlobal' } },
          { title: '唯一', routerLink: { name: 'ComponentModalMessageMultiple' } },
          { title: '状态提示', routerLink: { name: 'ComponentModalMessageStatus' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentModalMessageTemplate' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.modalNotificationTitle',
        children: [
          { title: '全局调用', routerLink: { name: 'ComponentModalNotificationGlobal' } },
          { title: '唯一', routerLink: { name: 'ComponentModalNotificationMultiple' } },
          { title: '状态提示', routerLink: { name: 'ComponentModalNotificationStatus' } },
          { title: '带操作按钮', routerLink: { name: 'ComponentModalNotificationFooter' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentModalNotificationTemplate' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.modalAlertTitle',
        children: [
          { title: '全局调用', routerLink: { name: 'ComponentModalAlertGlobal' } },
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
          { title: '弹窗中实现左边树和右边表格', routerLink: { name: 'ComponentModalModalOtherLeftRight' } }
        ]
      }
    ]
  },
  ganttNavConfig,
  designNavConfig,
  {
    i18nKey: 'app.aside.menu.otherTitle',
    children: [
      {
        title: 'Watermark 水印',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'watermark' } } },
          { title: '全局调用', routerLink: { name: 'ComponentWatermarkGlobal' } },
          { title: '基础', routerLink: { name: 'ComponentWatermarkBase' } },
          { title: '字体颜色', routerLink: { name: 'ComponentWatermarkColor' } },
          { title: '字体大小', routerLink: { name: 'ComponentWatermarkFontSize' } },
          { title: '表格水印', routerLink: { name: 'ComponentWatermarkTable' } },
          { title: '表单水印', routerLink: { name: 'ComponentWatermarkForm' } }
        ]
      },
      {
        title: 'Countdown 倒计时',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'countdown' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentCountdownSize' } },
          { title: '基础', routerLink: { name: 'ComponentCountdownBase' } },
          { title: '格式化', routerLink: { name: 'ComponentCountdownFormat' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentCountdownTemplate' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.printTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'print' } } },
          {
            title: '全局调用',
            children: [
              { title: '打印', routerLink: { name: 'ComponentPrintGlobalPrint' } }
            ]
          },
          {
            title: '常规打印',
            children: [
              { title: '打印 HTML', routerLink: { name: 'ComponentPrintBaseHtml' } },
              { title: '打印图片', routerLink: { name: 'ComponentPrintBaseImg' } },
              { title: '打印表格', routerLink: { name: 'ComponentPrintBaseTable' } }
            ]
          },
          {
            title: '分页打印',
            children: [
              { title: '基础', routerLink: { name: 'ComponentPrintPageBasics' } },
              { title: '页眉/标题', routerLink: { name: 'ComponentPrintPageHeader' } },
              { title: '页尾/页码', routerLink: { name: 'ComponentPrintPageFooter' } },
              { title: '设置边距', routerLink: { name: 'ComponentPrintPageMargin' } },
              { title: '批量打印图片', routerLink: { name: 'ComponentPrintPageImage' } },
              { title: '分页打印表格', routerLink: { name: 'ComponentPrintPageTable' } },
              { title: '自定义模板', routerLink: { name: 'ComponentPrintPageTemplate' } }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'API',
    isExpand: true,
    children: []
  }
]
