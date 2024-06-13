<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="按需加载">
          当只用得到部分组件时，只需两步，通过按需加载插件可以去掉未被使用的组件。
        </vxe-tip>
        <vxe-tip status="success" title="步骤 1. 插件配置"></vxe-tip>
      </template>

      <template #use>
        <div>
          如果您使用了 vite，借助插件 <vxe-link href="https://www.npmjs.com/package/vite-plugin-lazy-import" target="_blank">vite-plugin-lazy-import</vxe-link> 可以实现按需加载模块。
        </div>
        <pre>
          <pre-code class="shell">
            npm install vite-plugin-lazy-import -D
          </pre-code>
          <pre-code class="javascript">
            // vue.config.js

            // ...
            import { lazyImport, VxeResolver } from 'vite-plugin-lazy-import'

            export default defineConfig({
              plugins: [
                // ...,
                lazyImport({
                  resolvers: [
                    VxeResolver({
                      libraryName: 'vxe-table'
                    }),
                    VxeResolver({
                      libraryName: 'vxe-pc-ui'
                    })
                  ]
                })
                // ...
              ]
            })
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="Webpack 方式">
          如果您使用了 webpack，借助插件 <vxe-link  href="https://www.npmjs.com/package/babel-plugin-import" target="_blank">babel-plugin-import</vxe-link> 可以实现按需加载模块。
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="shell">
            npm install babel-plugin-import
          </pre-code>
          <pre-code class="javascript">
            // babel.config.js

            // ...
            plugins: [
              ['import', { libraryName: 'vxe-table', style: true }, 'vxe-table'],
              ['import', { libraryName: 'vxe-pc-ui', style: true }, 'vxe-pc-ui']
            ]
            // ...
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight>
      <template #tip>
        <vxe-tip status="success" title="步骤 2. 导入使用" content="根据需要选择引入就可以实现按需加载模块，减少文件体积，以下是全量的组件及模块安装列表。"></vxe-tip>
        <vxe-tip status="error" title="" content="组件按需加载是不带语言包和主题的，需要手动导入语言包和主题变量。"></vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            // ...
            import {
              VxeUI,

              VxeAnchor,
              VxeAnchorLink,
              VxeBreadcrumb,
              VxeBreadcrumbItem,
              VxeButton,
              VxeButtonGroup,
              VxeCalendar,
              VxeCard,
              VxeCheckbox,
              VxeCheckboxGroup,
              VxeCol,
              VxeCollapse,
              VxeCollapsePane,
              VxeDatePicker,
              VxeDrawer,
              VxeFlowDesign,
              VxeFlowView,
              VxeForm,
              VxeFormDesign,
              VxeFormGather,
              VxeFormItem,
              VxeFormView,
              VxeIcon,
              VxeInput,
              VxeLayoutAside,
              VxeLayoutBody,
              VxeLayoutContainer,
              VxeLayoutFooter,
              VxeLayoutHeader,
              VxeLink,
              VxeListDesign,
              VxeListView,
              VxeList,
              VxeLoading,
              VxeMenu,
              VxeModal,
              VxeNumberInput,
              VxeOptgroup,
              VxeOption,
              VxePager,
              VxePasswordInput,
              VxePrint,
              VxePulldown,
              VxeRadio,
              VxeRadioButton,
              VxeRadioGroup,
              VxeRow,
              VxeSelect,
              VxeSwitch,
              VxeTabPane,
              VxeTabs,
              VxeTextarea,
              VxeTip,
              VxeTooltip,
              VxeTree,
              VxeTreeSelect,
              VxeUpload,
            } from 'vxe-pc-ui'

            import {
              VxeTable,
              VxeColumn,
              VxeColgroup,
              VxeGrid,
              VxeToolbar
            } from 'vxe-table'

            // 导入主题变量，也可以重写主题变量
            import 'vxe-table/styles/cssvar.scss'
            import 'vxe-pc-ui/styles/cssvar.scss'

            // 导入默认的语言
            import zhCN from 'vxe-pc-ui/lib/language/zh-CN'

            VxeUI.setI18n('zh-CN', zhCN)
            VxeUI.setLanguage('zh-CN')

            function LazyVxeUI (app) {
              app.use(VxeAnchor)
              app.use(VxeAnchorLink)
              app.use(VxeBreadcrumb)
              app.use(VxeBreadcrumbItem)
              app.use(VxeButton)
              app.use(VxeButtonGroup)
              app.use(VxeCalendar)
              app.use(VxeCard)
              app.use(VxeCheckbox)
              app.use(VxeCheckboxGroup)
              app.use(VxeCol)
              app.use(VxeCollapse)
              app.use(VxeCollapsePane)
              app.use(VxeDatePicker)
              app.use(VxeDrawer)
              app.use(VxeFlowDesign)
              app.use(VxeFlowView)
              app.use(VxeForm)
              app.use(VxeFormDesign)
              app.use(VxeFormGather)
              app.use(VxeFormItem)
              app.use(VxeFormView)
              app.use(VxeIcon)
              app.use(VxeInput)
              app.use(VxeLayoutAside)
              app.use(VxeLayoutBody)
              app.use(VxeLayoutContainer)
              app.use(VxeLayoutFooter)
              app.use(VxeLayoutHeader)
              app.use(VxeLink)
              app.use(VxeListDesign)
              app.use(VxeListView)
              app.use(VxeList)
              app.use(VxeLoading)
              app.use(VxeMenu)
              app.use(VxeModal)
              app.use(VxeNumberInput)
              app.use(VxeOptgroup)
              app.use(VxeOption)
              app.use(VxePager)
              app.use(VxePasswordInput)
              app.use(VxePrint)
              app.use(VxePulldown)
              app.use(VxeRadio)
              app.use(VxeRadioButton)
              app.use(VxeRadioGroup)
              app.use(VxeRow)
              app.use(VxeSelect)
              app.use(VxeSwitch)
              app.use(VxeTabPane)
              app.use(VxeTabs)
              app.use(VxeTextarea)
              app.use(VxeTip)
              app.use(VxeTooltip)
              app.use(VxeTree)
              app.use(VxeTreeSelect)
              app.use(VxeUpload)
            }

            function LazyVxeTable (app) {
              app.use(VxeTable)
              app.use(VxeColumn)
              app.use(VxeColgroup)
              app.use(VxeGrid)
              app.use(VxeToolbar)
            }

            createApp(App).use(LazyVxeUI).use(LazyVxeTable).mount('#app')
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
