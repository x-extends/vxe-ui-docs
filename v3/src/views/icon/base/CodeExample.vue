<template>
  <div>
    <CodeLight path="icon/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="字体图标">
          <div>支持通过组件方式渲染，也支持直接使用 class 方式</div>
        </vxe-tip>
      </template>
    </CodeLight>

    <div>
      <vxe-card class="icon-group-card" v-for="(group, gIndex) in groupList" :key="gIndex" :title="group.name" width="100%">
        <ul class="icon-group-list">
          <li class="icon-item" v-for="name in group.children" :key="name">
            <div class="icon-preview"  @click="copyEvent(`${prefixClass}${name}`)" title="点击复制内容">
              <vxe-icon :name="name"></vxe-icon>
            </div>
            <div class="icon-title">
              <vxe-button mode="text" status="info" size="mini" @click="copyEvent(name)" title="点击复制内容">{{ name }}</vxe-button>
            </div>
            <div class="icon-name">
              <vxe-button mode="text" status="info" size="mini" @click="copyEvent(`${prefixClass}${name}`)" title="点击复制内容">{{ prefixClass }}{{ name }}</vxe-button>
            </div>
          </li>
        </ul>
      </vxe-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeIconPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const iconList: VxeIconPropTypes.Name[] = [
      'add', 'add-sub', 'add-user', 'add-users', 'align-center', 'align-left', 'align-right', 'alipay', 'arrow-double-left', 'arrow-double-right', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrows-down', 'arrows-left', 'arrows-right', 'arrows-up', 'association-form', 'bell', 'bell-fill', 'calendar', 'caret-down', 'caret-left', 'caret-right', 'caret-up', 'carousel', 'chart-bar-x', 'chart-bar-y', 'chart-line', 'chart-pie', 'chart-radar', 'chat', 'chat-fill', 'check', 'checkbox-checked', 'checkbox-checked-fill', 'checkbox-indeterminate-fill', 'checkbox-unchecked', 'checkbox-unchecked-fill', 'click-button', 'close', 'cloud-download', 'cloud-upload', 'cloudy', 'comment', 'company', 'copy', 'custom-column', 'cut', 'delete', 'delete-fill', 'dot', 'download', 'drag-handle', 'dropper', 'edit', 'ellipsis-h', 'ellipsis-v', 'empty', 'end-page', 'envelope', 'envelope-fill', 'envelope-open', 'envelope-open-fill', 'error-circle', 'error-circle-fill', 'exclamation', 'eye-fill', 'eye-fill-close', 'feedback', 'file', 'file-excel', 'file-image', 'file-markdown', 'file-pdf', 'file-ppt', 'file-txt', 'file-word', 'file-zip', 'fixed-left', 'fixed-left-fill', 'fixed-right', 'fixed-right-fill', 'flag', 'flag-fill', 'flow-branch', 'folder', 'folder-open', 'fullscreen', 'funnel', 'funnel-clear', 'gitee-fill', 'github-fill', 'goods', 'goods-fill', 'grouping', 'heavy-rain', 'home', 'home-fill', 'home-page', 'indicator', 'info-circle', 'info-circle-fill', 'information', 'input', 'language-switch', 'layout', 'lightning', 'link', 'location', 'location-fill', 'lock', 'lock-fill', 'maximize', 'menu', 'menu-fold', 'menu-unfold', 'merge-cells', 'message-fill', 'microphone', 'microphone-fill', 'minimize', 'minus', 'mobile', 'moon', 'no-drop', 'notice-left-fill', 'notice-right-fill', 'num-list', 'number', 'paste', 'pc', 'pct-1-1', 'pct-full', 'picture', 'picture-fill', 'platform', 'print', 'print-batch', 'question', 'question-circle', 'question-circle-fill', 'radio-checked', 'radio-checked-fill', 'radio-unchecked', 'radio-unchecked-fill', 'recover', 'refresh', 'repeat', 'rich-text', 'rmb', 'rotate-left', 'rotate-right', 'row-col', 'save', 'search', 'search-zoom-in', 'search-zoom-out', 'select', 'send', 'send-fill', 'service', 'setting', 'setting-fill', 'share', 'share-fill', 'signature', 'slider', 'sort', 'sort-alpha-asc', 'sort-alpha-desc', 'sort-asc', 'sort-desc', 'sort-numeric-asc', 'sort-numeric-desc', 'spinner', 'square', 'square-caret-right', 'square-caret-right-fill', 'square-checked', 'square-checked-fill', 'square-close', 'square-close-fill', 'square-down', 'square-down-fill', 'square-fill', 'square-left', 'square-left-fill', 'square-minus', 'square-minus-fill', 'square-plus', 'square-plus-fill', 'square-plus-square', 'square-right', 'square-right-fill', 'square-square', 'square-up', 'square-up-fill', 'star', 'star-fill', 'star-half', 'subtable', 'success-circle', 'success-circle-fill', 'sunny', 'swap', 'swap-down', 'swap-left', 'swap-right', 'swap-up', 'switch', 'table', 'tabs', 'tag', 'text', 'textarea', 'time', 'top', 'tree-select', 'undo', 'unlock', 'unlock-fill', 'upload', 'usd', 'user', 'user-fill', 'values', 'voice', 'voice-fill', 'warning-circle', 'warning-circle-fill', 'warning-triangle', 'warning-triangle-fill', 'wechat', 'zoom-in', 'zoom-out'
    ]

    const groupList: { name: string, children: VxeIconPropTypes.Name[] }[] = [
      {
        name: '箭头',
        children: [
          'arrows-up', 'arrows-down', 'arrows-left', 'arrows-right',
          'caret-up', 'caret-down', 'caret-left', 'caret-right',
          'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right'
        ]
      },
      {
        name: '方向',
        children: [
          'swap-up', 'swap-down', 'swap-left', 'swap-right', 'swap',
          'arrow-double-left', 'arrow-double-right',
          'home-page', 'end-page',
          'top'
        ]
      },
      {
        name: '排序',
        children: [
          'sort',
          'sort-alpha-asc', 'sort-alpha-desc',
          'sort-asc', 'sort-desc',
          'sort-numeric-asc', 'sort-numeric-desc'
        ]
      },
      {
        name: '文件',
        children: [
          'file',
          'folder', 'folder-open',
          'file-excel', 'file-image', 'file-markdown', 'file-pdf', 'file-ppt', 'file-txt', 'file-word', 'file-zip',
          'download', 'upload', 'cloud-download', 'cloud-upload'
        ]
      },
      {
        name: '状态',
        children: [
          'check', 'close', 'exclamation',
          'question', 'question-circle', 'question-circle-fill',
          'information', 'info-circle', 'info-circle-fill',
          'warning-circle', 'warning-circle-fill',
          'warning-triangle', 'warning-triangle-fill',
          'success-circle', 'success-circle-fill', 'no-drop',
          'error-circle', 'error-circle-fill'
        ]
      },
      {
        name: '用户',
        children: [
          'add-user', 'add-users', 'service',
          'user', 'user-fill', 'click-button',
          'eye-fill', 'eye-fill-close'
        ]
      },
      {
        name: '消息',
        children: [
          'bell', 'bell-fill',
          'envelope', 'envelope-fill', 'envelope-open', 'envelope-open-fill'
        ]
      },
      {
        name: '标签',
        children: [
          'tag',
          'location', 'location-fill',
          'star', 'star-half', 'star-fill',
          'flag', 'flag-fill',
          'fixed-left', 'fixed-left-fill', 'fixed-right', 'fixed-right-fill',
          'lock', 'lock-fill', 'unlock', 'unlock-fill'
        ]
      },
      {
        name: '控件',
        children: [
          'calendar', 'time', 'input', 'textarea', 'rich-text', 'select', 'text', 'tree-select', 'tabs', 'table', 'switch', 'subtable', 'slider', 'values',
          'minus', 'num-list', 'number', 'row-col', 'voice', 'voice-fill', 'rmb', 'usd'
        ]
      },
      {
        name: '表单',
        children: [
          'checkbox-checked', 'checkbox-checked-fill', 'checkbox-unchecked-fill', 'checkbox-indeterminate-fill', 'checkbox-unchecked',
          'radio-checked', 'radio-checked-fill', 'radio-unchecked', 'radio-unchecked-fill',
          'square-checked-fill', 'square-checked', 'square-close-fill', 'square-close',
          'square-minus-fill', 'square-minus', 'square-plus-fill', 'square-plus',
          'square-down-fill', 'square-down', 'square-left-fill', 'square-left', 'square-up-fill', 'square-up', 'square-right-fill', 'square-right',
          'square-caret-right-fill', 'square-caret-right', 'square-fill', 'square',
          'square-plus-square'
        ]
      },
      {
        name: '操作',
        children: [
          'add', 'add-sub',
          'delete', 'delete-fill',
          'link',
          'search-zoom-in', 'search-zoom-out', 'search',
          'association-form', 'feedback', 'edit', 'signature',
          'copy', 'cut', 'paste', 'save',
          'print', 'print-batch',
          'repeat', 'indicator', 'refresh', 'undo',
          'rotate-left', 'rotate-right'
        ]
      }
    ]

    const keyMpas: Record<string, string> = {}
    groupList.forEach(group => {
      group.children.forEach(key => {
        keyMpas[key] = key
      })
    })
    groupList.push({
      name: '其他',
      children: iconList.filter(key => !keyMpas[key])
    })

    return {
      prefixClass: 'vxe-icon-',
      groupList
    }
  },
  methods: {
    copyEvent  (name: string) {
      if (VxeUI.clipboard.copy(name)) {
        VxeUI.modal.message({ content: `${name} 已复制到剪贴板！`, status: 'success' })
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.icon-group-card {
  margin: 1em 0;
}
.icon-group-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  border-top: 1px solid var(--vxe-ui-docs-layout-border-color);
  border-left: 1px solid var(--vxe-ui-docs-layout-border-color);
  overflow: hidden;
  margin: 0 auto;
  padding: 0;
  max-width: 1000px;
  &:after {
    content: "";
    clear: both;
  }
  .icon-item {
    display: flex;
    flex-direction: column;
    width: 14.15%;
    height: 120px;
    border-right: 1px solid var(--vxe-ui-docs-layout-border-color);
    border-bottom: 1px solid var(--vxe-ui-docs-layout-border-color);
    cursor: pointer;
    .icon-title,
    .icon-name {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    }
    .icon-name {
      padding-bottom: 6px;
    }
    .icon-preview {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      font-size: 34px;
    }
  }
}
</style>
