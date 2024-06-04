<template>
  <div>
    <CodeLight>
      <template #tip>
        <VxeTips status="primary" title="Vite 方式">
          如果您使用了 vite，借助插件 <vxe-link href="https://www.npmjs.com/package/unplugin-vue-components" target="_blank">unplugin-vue-components</vxe-link> 可以实现按需加载模块。
        </VxeTips>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            // ...
            import Components from 'unplugin-vue-components/vite'
            import { VxeResolver } from '@vxecli/import-unplugin-vue-components'

            export default defineConfig({
              plugins: [
                // ...,
                Components({
                  resolvers: [
                    VxeResolver({
                      libraryName: 'vxe-pc-ui'
                      // importStyle: true
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
        <VxeTips status="primary" title="Webpack 方式">
          如果您使用了 webpack，借助插件 <vxe-link  href="https://www.npmjs.com/package/unplugin-vue-components" target="_blank">unplugin-vue-components</vxe-link> 可以实现按需加载模块。
        </VxeTips>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            // ...
            import Components from 'unplugin-vue-components/webpack'
            import { VxeResolver } from '@vxecli/import-unplugin-vue-components'

            export default defineConfig({
              plugins: [
                // ...,
                Components({
                  resolvers: [
                    VxeResolver({
                      libraryName: 'vxe-pc-ui'
                      // importStyle: true
                    }),
                    VxeResolver({
                      libraryName: 'vxe-pc-ui'
                      // importStyle: true
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
        <VxeTips status="success" title="全量组件" content="根据需要选择引入就可以实现按需加载模块，减少文件体积，以下是全量的组件及模块安装列表。"></VxeTips>
        <VxeTips status="error" title="" content="组件按需加载是不带语言包和主题的，需要手动导入语言包和主题变量。"></VxeTips>
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
              VxeDateInput,
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
              VxeTips,
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
            } from 'vxe-pc-ui'

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
              app.use(VxeDateInput)
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
              app.use(VxeTips)
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
