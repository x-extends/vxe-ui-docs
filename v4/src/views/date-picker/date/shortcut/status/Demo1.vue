<template>
  <div>
    <vxe-date-picker v-model="val1" :shortcut-config="shortcutConfig"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('')

const shortcutConfig = reactive<VxeDatePickerPropTypes.ShortcutConfig>({
  options: [
    { code: 'now', content: '今天', status: 'primary' },
    { code: 'prev', content: '前一天', status: 'success' },
    { code: 'next', content: '后一天', status: 'error' }
  ]
})
</script>
