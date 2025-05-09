<template>
  <div>
    <vxe-date-picker v-model="val1" type="year" :shortcut-config="shortcutConfig"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('')

const shortcutConfig = reactive<VxeDatePickerPropTypes.ShortcutConfig>({
  options: [
    { code: 'now', content: '今年' },
    { code: 'prev', content: '前一年' },
    { code: 'next', content: '后一年' }
  ]
})
</script>
