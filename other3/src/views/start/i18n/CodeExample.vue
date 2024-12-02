<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="国际化语言">
          通过调用 VxeUI.setLanguage('zh-CN') 方法可以切换组件语言
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import { VxeUI } from 'vxe-pc-ui'

            import zhCN from 'vxe-pc-ui/lib/language/zh-CN'
            // import zhHK from 'vxe-pc-ui/lib/language/zh-HK'
            // import zhTW from 'vxe-pc-ui/lib/language/zh-TW'
            // import zhMO from 'vxe-pc-ui/lib/language/zh-MO'
            // import arEG from 'vxe-pc-ui/lib/language/ar-EG'
            // import deDE from 'vxe-pc-ui/lib/language/de-DE'
            import enUS from 'vxe-pc-ui/lib/language/en-US'
            // import esES from 'vxe-pc-ui/lib/language/es-ES'
            // import frFR from 'vxe-pc-ui/lib/language/fr-FR'
            // import huHU from 'vxe-pc-ui/lib/language/hu-HU'
            // import hyAM from 'vxe-pc-ui/lib/language/hy-AM'
            // import jaJP from 'vxe-pc-ui/lib/language/ja-JP'
            // import koKR from 'vxe-pc-ui/lib/language/ko-KR'
            // import nbNO from 'vxe-pc-ui/lib/language/nb-NO'
            // import ptBR from 'vxe-pc-ui/lib/language/pt-BR'
            // import ruRU from 'vxe-pc-ui/lib/language/ru-RU'
            // import ugCN from 'vxe-pc-ui/lib/language/ug-CN'
            // import ukUA from 'vxe-pc-ui/lib/language/uk-UA'
            // import viVN from 'vxe-pc-ui/lib/language/vi-VN'

            // 注册语言
            VxeUI.setI18n('zh-CN', zhCN)
            // VxeUI.setI18n('zh-HK', zhHK)
            // VxeUI.setI18n('zh-TW', zhTW)
            // VxeUI.setI18n('zh-MO', zhMO)
            // VxeUI.setI18n('arEG', arEG)
            // VxeUI.setI18n('deDE', deDE)
            VxeUI.setI18n('en-US', enUS)
            // VxeUI.setI18n('es-ES', esES)
            // VxeUI.setI18n('fr-FR', frFR)
            // VxeUI.setI18n('huH-U', huHU)
            // VxeUI.setI18n('ja-JP', jaJP)
            // VxeUI.setI18n('ko-KR', koKR)
            // VxeUI.setI18n('nb-NO', nbNO)
            // VxeUI.setI18n('pt-BR', ptBR)
            // VxeUI.setI18n('ru-RU', ruRU)
            // VxeUI.setI18n('ug-CN', ugCN)
            // VxeUI.setI18n('ukU-A', ukUA)
            // VxeUI.setI18n('vi-VN', viVN)

            // 切换语言
            VxeUI.setLanguage('zh-CN')

            // 获取当前使用的语言
            VxeUI.getLanguage()
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
