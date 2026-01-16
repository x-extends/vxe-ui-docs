<template>
  <div>
    <div class="row-wrapper">
      <vxe-form-design :widgets="formDesignWidgets" :height="800" show-style-setting>
        <template #header>
          <vxe-notice-bar speed="fast" content="vxe-table 企业级表格组件库、专业的表格库、高性能实现表格的复杂功能；vxe-pc-ui 企业级桌面端组件库，高性能的组件库；vxe-design 可视化设计器，功能强大表单、列表设计器；快速搭建低代码平台、后台管理系统等。"></vxe-notice-bar>
        </template>
      </vxe-form-design>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeFormDesignPropTypes } from 'vxe-design'

const formDesignWidgets = ref<VxeFormDesignPropTypes.Widgets>([
  {
    group: 'base',
    children: [
      'VxeInput'
    ]
  }
])
</script>
