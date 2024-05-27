<template>
  <div>
    <CodeLight>
      <template #tip>
        <VxeTips status="primary">
          通过调用 VxeUI.setI18n() 方法可以设置组件当前语言
        </VxeTips>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import { VxeUI } from 'vxe-pc-ui'

            import zhCN from '@vxe-ui/core/packages/language/zh-CN'
            // import zhHK from '@vxe-ui/core/packages/language/zh-HK'
            // import zhTW from '@vxe-ui/core/packages/language/zh-TW'
            // import zhMO from '@vxe-ui/core/packages/language/zh-MO'
            // import enUS from '@vxe-ui/core/packages/language/en-US'
            // import jaJP from '@vxe-ui/core/packages/language/ja-JP'
            // import esES from '@vxe-ui/core/packages/language/es-ES'
            // import ptBR from '@vxe-ui/core/packages/language/pt-BR'

            // 注册语言
            // VxeUI.setI18n('zh-CN', zhCN)
            // VxeUI.setI18n('zh-HK', zhHK)
            // VxeUI.setI18n('zh-TW', zhTW)
            // VxeUI.setI18n('zh-MO', zhMO)
            // VxeUI.setI18n('en-US', enUS)
            // VxeUI.setI18n('ja-JP', jaJP)
            // VxeUI.setI18n('es-ES', esES)
            // VxeUI.setI18n('pt-BR', ptBR)

            // 切换语言
            VxeUI.setLanguage('zh-CN')
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
