<template>
  <div>
    <div>
      <vxe-radio-group v-model="shortcutConfig.position">
        <vxe-radio-button checked-value="top" content="顶部"></vxe-radio-button>
        <vxe-radio-button checked-value="bottom" content="底部"></vxe-radio-button>
        <vxe-radio-button checked-value="left" content="左侧"></vxe-radio-button>
        <vxe-radio-button checked-value="right" content="右侧"></vxe-radio-button>
      </vxe-radio-group>
    </div>

    <vxe-date-picker v-model="val1" type="month" :shortcut-config="shortcutConfig"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('')

const shortcutConfig = reactive<VxeDatePickerPropTypes.ShortcutConfig>({
  position: 'left',
  options: [
    { code: 'now', content: '本月' },
    { code: 'prev', content: '前一月' },
    { code: 'next', content: '后一月' }
  ]
})
</script>
