<template>
  <div>
    <vxe-date-picker v-model="val1" type="month" :shortcut-config="shortcutConfig"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('')

const shortcutConfig = reactive<VxeDatePickerPropTypes.ShortcutConfig>({
  options: [
    { code: 'now', content: '本月' },
    { code: 'prev', content: '前一月' },
    { code: 'next', content: '后一月' }
  ]
})
</script>
