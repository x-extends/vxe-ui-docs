<template>
  <div>
    <div class="row-wrapper">
      <vxe-form-design :widgets="formDesignWidgets" :height="800" show-style-setting>
        <template #title-suffix>
          <vxe-button status="primary">按钮1</vxe-button>
          <vxe-button status="success">按钮2</vxe-button>
          <vxe-button status="error">按钮3</vxe-button>
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
