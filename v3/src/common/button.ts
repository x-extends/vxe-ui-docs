import { NavVO, otherUrl } from './nav'

export const buttonNavConfig: NavVO = {
  // Button 按钮
  i18nKey: 'app.aside.menu.buttonTitle',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'button' } }, keywords: 'vxe-button' },
    // 尺寸大小
    { i18nKey: 'app.aside.menu.basicSize', routerLink: { name: 'ComponentButtonSize' } },
    // 状态颜色
    { i18nKey: 'app.aside.menu.basicStatusColor', routerLink: { name: 'ComponentButtonStatus' } },
    // 圆角
    { i18nKey: 'app.aside.menu.basicRound', routerLink: { name: 'ComponentButtonRound' } },
    // 圆形
    { i18nKey: 'app.aside.menu.basicCircle', routerLink: { name: 'ComponentButtonCircle' } },
    // 图标
    { i18nKey: 'app.aside.menu.basicIcon', routerLink: { name: 'ComponentButtonIcon' } },
    // 提示图标
    { i18nKey: 'app.aside.menu.basicTipIcon', routerLink: { name: 'ComponentButtonTipIcon' } },
    // 加载中
    { i18nKey: 'app.aside.menu.basicLoading', routerLink: { name: 'ComponentButtonLoading' } },
    // 路由模式
    { i18nKey: 'app.aside.menu.basicRouterMode', routerLink: { name: 'ComponentButtonRouter' } },
    // 按钮组
    { i18nKey: 'app.aside.menu.basicButtonGroup', routerLink: { name: 'ComponentButtonGroup' } },
    // 排版方式
    { i18nKey: 'app.aside.menu.basicLayoutMode', routerLink: { name: 'ComponentButtonVertical' } },
    {
      // 下拉按钮
      i18nKey: 'app.aside.menu.basicDropdownButton',
      children: [
        // 下拉按钮
        { i18nKey: 'app.aside.menu.basicDropdownButton', routerLink: { name: 'ComponentButtonDropdownOptions' } },
        // 状态颜色
        { i18nKey: 'app.aside.menu.basicStatusColor', routerLink: { name: 'ComponentButtonDropdownStatus' } },
        // 触发方式
        { i18nKey: 'app.aside.menu.basicTriggerMode', routerLink: { name: 'ComponentButtonDropdownTrigger' } },
        // 提示图标
        { i18nKey: 'app.aside.menu.basicTipIcon', routerLink: { name: 'ComponentButtonDropdownTipIcon' } },
        // 固定方向
        { i18nKey: 'app.aside.menu.basicFixedDirection', routerLink: { name: 'ComponentButtonDropdownPlacement' } },
        // 下拉面板挂载 Body
        { i18nKey: 'app.aside.menu.basicDropdownTeleportTo', routerLink: { name: 'ComponentButtonDropdownTeleportTo' } },
        // 自定义插槽模板
        { i18nKey: 'app.aside.menu.basicCustomSlotTemplate', routerLink: { name: 'ComponentButtonDropdownTemplate' } },
        // 权限码
        { i18nKey: 'app.aside.menu.basicPermissionCode', routerLink: { name: 'ComponentButtonDropdownPermissionCode' } }
      ]
    },
    // 禁用
    { i18nKey: 'app.aside.menu.basicDisabled', routerLink: { name: 'ComponentButtonDisabled' } },
    // 使用右键菜单
    { i18nKey: 'app.aside.menu.basicUseContextMenu', routerLink: { name: 'ComponentButtonMenu' } },
    // 权限码
    { i18nKey: 'app.aside.menu.basicPermissionCode', routerLink: { name: 'ComponentButtonPermissionCode' } },
    {
      // 渲染器（高阶复用）
      i18nKey: 'app.aside.menu.buttonGlobalRenderer',
      children: [
        { title: 'API', routerLink: { name: 'GlobalRendererButtonAPI' } },
        // 前缀图标
        { i18nKey: 'app.aside.menu.basicPrefixIcon', routerLink: { name: 'GlobalRendererButtonPrefix' } },
        // 后缀图标
        { i18nKey: 'app.aside.menu.basicSuffixIcon', routerLink: { name: 'GlobalRendererButtonSuffix' } }
      ]
    },
    // 使用第三方图标
    { i18nKey: 'app.aside.menu.basicUseThirdPartyIcon', isPlugin: true, linkUrl: `${otherUrl}#/other-iconfont/symbol/button/icon`, linkTarget: '_blank' }
  ]
}
