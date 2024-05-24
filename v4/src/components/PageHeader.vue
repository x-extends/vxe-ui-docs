<template>
  <div class="page-header">
    <div class="header-left">
      <a class="logo" :href="siteBaseUrl">
        <img :src="`${siteBaseUrl}logo.png`">
        <span class="title">Vxe UI</span>
      </a>
    </div>
    <div class="header-middle"></div>
    <div class="header-right">
      <vxe-switch
        class="link theme"
        v-model="currTheme"
        open-value="light"
        open-label="白天"
        close-value="dark"
        close-label="夜间">
      </vxe-switch>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
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
