<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-menu">
          <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-ui-plugins/tree/main/plugin-menu" target="_blank"></vxe-link> 该插件提供了在表格中提供便捷的右键菜单操作
        </vxe-tip>
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
  return `/resource/cdn/plugin-menu-v${docsVersion.value}.html?v=${import.meta.env.VITE_APP_DATE_NOW}`
})

fetch(cdnUrl.value).then(res => res.text()).then(html => {
  cdnCode.value = html
})
</script>
