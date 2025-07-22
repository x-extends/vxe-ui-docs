<template>
  <div>
    <div class="row-wrapper">
      <vxe-form-design ref="formDesignRef" :widgets="formDesignWidgets" :height="800">
        <template #title-prefix>
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
import { VxeFormDesignPropTypes, VxeFormDesignInstance } from 'vxe-design'

const formDesignRef = ref<VxeFormDesignInstance>()

const formDesignWidgets = ref<VxeFormDesignPropTypes.Widgets>([
  {
    group: 'base',
    children: [
      'VxeInput',
      'VxeTextarea',
      'VxeSelect',
      'VxeSwitch',
      'VxeRadioGroup',
      'VxeCheckboxGroup'
    ]
  }
])
</script>
