<template>
  <div class="page-header">
    <div class="header-left">
      <a class="logo" :href="siteBaseUrl">
        <img :src="`${siteBaseUrl}logo.png`">
        <span class="title">Vxe UI</span>
      </a>
      <a href='https://gitee.com/x-extends/vxe-pc-ui/stargazers'>
        <img src='https://gitee.com/x-extends/vxe-pc-ui/badge/star.svg?theme=gvp' alt='star'>
      </a>
      <a href="http://npm-stat.com/charts.html?package=vxe-pc-ui">
        <img src="https://img.shields.io/npm/dm/vxe-pc-ui.svg">
      </a>
      <a href="https://github.com/x-extends/vxe-pc-ui/stargazers">
        <img src="https://img.shields.io/github/stars/x-extends/vxe-pc-ui.svg">
      </a>
    </div>
    <div class="header-middle"></div>
    <div class="header-right">
      <vxe-switch
        class="link switch-theme"
        v-model="currTheme"
        size="mini"
        open-value="light"
        open-label="白天"
        close-value="dark"
        close-label="夜间">
      </vxe-switch>
      <vxe-select v-model="currLang" class="switch-lang" size="mini" :options="langOptions"></vxe-select>
      <vxe-select v-model="currVersion" class="switch-version" size="mini" :options="versionOptions"></vxe-select>
      <vxe-link class="free-donation" status="success" :router-link="{name: 'FreeDonation'}">支持我们</vxe-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/store/app'
const siteBaseUrl = computed(() => appStore.siteBaseUrl)

const appStore = useAppStore()

const currTheme = computed({
  get () {
    return appStore.theme
  },
  set (name) {
    appStore.setTheme(name)
  }
})

const langOptions = ref([
  { value: 'zh-CN', label: '中文' },
  { value: 'en-US', label: '英文' }
])

const currLang = computed({
  get () {
    return appStore.language
  },
  set (lang) {
    appStore.setLanguage(lang)
  }
})

const versionOptions = ref([
  { value: '4', label: 'v4.x (vue 3.x 稳定版)' },
  { value: '3', label: 'v3.x (vue 2.6+ 长期维护版)', disabled: true }
])

const currVersion = computed({
  get () {
    return appStore.docsVersion
  },
  set (value) {

  }
})
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 50px;
  border-bottom: 1px solid var(--vxe-ui-docs-layout-border-color);
  .header-left,
  .header-right {
    flex-shrink: 0;
  }
  .header-middle {
    flex-grow: 1;
  }
  .switch-lang {
    width: 80px;
    margin-right: 20px;
  }
  .switch-theme,
  .switch-lang,
  .switch-version,
  .free-donation {
    margin-right: 20px;
  }
}
.header-left {
  padding: 0 16px;
  .logo {
    text-decoration: none;
    color: var(--vxe-ui-docs-font-color);
    padding: 0 0.4em;
    font-weight: 700;
    font-size: 18px;
    padding: 0 8px;
    cursor: pointer;
    img {
      height: 20px;
      margin-right: 16px;
    }
    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
