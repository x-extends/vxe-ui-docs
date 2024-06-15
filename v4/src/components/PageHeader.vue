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
      <vxe-pulldown v-model="showSystemMenu">
        <vxe-button class="system-menu-btn" status="primary" mode="text" @click="showSystemMenu = !showSystemMenu">
          <span style="padding-right: 8px;">{{ $t('app.header.moreProducts') }}</span>
          <vxe-icon name="arrow-down"></vxe-icon>
        </vxe-button>

        <template #dropdown>
          <ul class="system-menu-wrapper">
            <li v-for="(item, index) in systemMenuList" :key="index">
              <vxe-link v-bind="item" target="_blank"></vxe-link>
              <span v-if="item.isEnterprise" class="enterprise">{{ $t('app.header.enterpriseVersion') }}</span>
            </li>
          </ul>
        </template>
      </vxe-pulldown>
      <vxe-switch
        class="link switch-theme"
        v-model="currTheme"
        size="mini"
        open-value="light"
        :open-label="$t('app.base.light')"
        close-value="dark"
        :close-label="$t('app.base.dark')">
      </vxe-switch>
      <vxe-radio-group v-model="currLang" class="switch-lang" type="button" size="mini" :options="langOptions"></vxe-radio-group>
      <vxe-select v-model="currVersion" class="switch-version" size="mini" :options="versionOptions"></vxe-select>
      <vxe-link class="free-donation" status="success" :router-link="{name: 'FreeDonation'}" :content="$t('app.header.supportUs')"></vxe-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/store/app'
import i18n from '@/i18n'

const siteBaseUrl = computed(() => appStore.siteBaseUrl)

const appStore = useAppStore()

const showSystemMenu = ref(false)
const systemMenuList = ref<any[]>()

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
  { value: 'en-US', label: 'English' }
])

const currLang = computed({
  get () {
    return appStore.language
  },
  set (lang) {
    appStore.setLanguage(lang)
  }
})

const versionOptions = computed(() => {
  return [
    { value: '4', label: i18n.global.t('app.version.v4') },
    { value: '3', label: i18n.global.t('app.version.v3'), disabled: true }
  ]
})

const currVersion = computed({
  get () {
    return appStore.docsVersion
  },
  set (value) {

  }
})

fetch(`${siteBaseUrl.value}component-api/system-list.json`).then(res => {
  res.json().then(data => {
    systemMenuList.value = data
  })
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
    margin-right: 20px;
  }
  .system-menu-btn,
  .switch-theme,
  .switch-lang,
  .switch-version,
  .free-donation {
    flex-shrink: 0;
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
.system-menu-wrapper {
  padding: 8px 0;
  margin: 0;
  list-style: none;
  width: 280px;
  border: 1px solid var(--vxe-ui-docs-layout-border-color);
  & > li {
    position: relative;
    line-height: 28px;
    padding: 0 16px;
    font-size: 14px;
    .enterprise {
      display: inline-block;
      height: 22px;
      line-height: 22px;
      background-color: #f6ca9d;
      border-radius: 10px;
      font-size: 12px;
      padding: 0 8px;
      color: #606266;
      transform: scale(0.8);
    }
  }
}
</style>
