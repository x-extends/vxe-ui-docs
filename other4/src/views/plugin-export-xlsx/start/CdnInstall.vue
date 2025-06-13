<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-export-xlsx">
          <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-ui-plugins/tree/v3/plugin-export-xlsx" target="_blank"></vxe-link> 该插件用于支持在表格中导出导入导出 XLSX 文件，基于 <vxe-link href="https://github.com/exceljs/exceljs" target="_blank">exceljs</vxe-link> 实现
        </vxe-tip>
        <vxe-tip status="error">该导出插件基于 <vxe-link href="https://github.com/exceljs/exceljs" target="_blank">exceljs</vxe-link> 库实现，具体开源协议请自行去查看对应的库</vxe-tip>
      </template>

      <template #use>
        <vxe-tip status="primary" title="使用 CDN 安装"></vxe-tip>
        <vxe-tip status="error" title="">
          <div>不建议将不受信任的第三方 CDN 用于正式环境，如确实需要使用第三方 CDN 链接记得锁定版本号，锁定版本的方法请查看第三方的说明。</div>
        </vxe-tip>

        <pre>
          <iframe :src="cdnUrl" style="display: block;width: 100%;height: 680px;border: 1px solid #000;"></iframe>
          <code-render language="html" :code="cdnCode"></code-render>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const docsVersion = computed(() => appStore.docsVersion)

const cdnCode = ref('')

const cdnUrl = computed(() => {
  return `/resource/cdn/plugin-export-xlsx-v${docsVersion.value}.html?v=${process.env.VUE_APP_DATE_NOW}`
})

fetch(cdnUrl.value).then(res => res.text()).then(html => {
  cdnCode.value = html
})
</script>
