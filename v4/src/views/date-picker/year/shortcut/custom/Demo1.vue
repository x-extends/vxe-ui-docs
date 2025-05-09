<template>
  <div>
    <vxe-date-picker v-model="val1" type="year" :shortcut-config="shortcutConfig"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

const val1 = ref('')

const shortcutConfig = reactive<VxeDatePickerPropTypes.ShortcutConfig>({
  options: [
    {
      name: '1',
      content: '今年',
      clickMethod () {
        val1.value = XEUtils.toDateString(XEUtils.getWhatYear(new Date(), 0), 'yyyy-MM-dd')
      }
    },
    {
      name: '2',
      content: '去年',
      clickMethod () {
        val1.value = XEUtils.toDateString(XEUtils.getWhatYear(new Date(), -1), 'yyyy-MM-dd')
      }
    },
    {
      name: '3',
      content: '明年',
      clickMethod () {
        val1.value = XEUtils.toDateString(XEUtils.getWhatYear(new Date(), 1), 'yyyy-MM-dd')
      }
    }
  ]
})
</script>
