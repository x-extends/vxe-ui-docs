import { NavVO } from './nav'

export const treeSelectNavConfig: NavVO = {
  i18nKey: 'app.aside.menu.dataTreeSelectTitle',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tree-select' } } },
    {
      i18nKey: 'app.aside.menu.dataTreeSelectBase',
      children: [
        { i18nKey: 'app.aside.menu.dataTreeSelectSize', routerLink: { name: 'ComponentTreeSelectBaseSize' } },
        { i18nKey: 'app.aside.menu.dataTreeSelectLoading', routerLink: { name: 'ComponentTreeSelectBaseLoading' } },
        { i18nKey: 'app.aside.menu.dataTreeSelectHierarchy', routerLink: { name: 'ComponentTreeSelectBaseHierarchy' } },
        { i18nKey: 'app.aside.menu.dataTreeSelectLeveling', routerLink: { name: 'ComponentTreeSelectBaseLeveling' } },
        { i18nKey: 'app.aside.menu.dataTreeSelectMultiple', routerLink: { name: 'ComponentTreeSelectBaseMultiple' } },
        { i18nKey: 'app.aside.menu.dataTreeSelectCustomIcon', routerLink: { name: 'ComponentTreeSelectBaseIcon' } },
        { i18nKey: 'app.aside.menu.dataTreeSelectCustomField', routerLink: { name: 'ComponentTreeSelectBaseOptionProps' } },
        { i18nKey: 'app.aside.menu.dataTreeSelectFullLabel', routerLink: { name: 'ComponentTreeSelectBaseFullLabel' } },
        { i18nKey: 'app.aside.menu.dataTreeSelectPopupWH', routerLink: { name: 'ComponentTreeSelectBasePopupWH' } },
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
      // 连接线
      i18nKey: 'app.aside.menu.treeConnectionLine',
      children: [
        // 连接线
        { i18nKey: 'app.aside.menu.treeShowLine', routerLink: { name: 'ComponentTreeSelectLineShowLine' } },
        // 线类型
        { i18nKey: 'app.aside.menu.treeLineType', routerLink: { name: 'ComponentTreeSelectLineType' } }
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
}
