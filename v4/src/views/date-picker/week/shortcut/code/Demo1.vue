<template>
  <div>
    <vxe-date-picker v-model="val1" type="week" :shortcut-config="shortcutConfig"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('')

const shortcutConfig = reactive<VxeDatePickerPropTypes.ShortcutConfig>({
  options: [
    { code: 'now', content: '本周' },
    { code: 'prev', content: '前一周' },
    { code: 'next', content: '后一周' }
  ]
})
</script>
