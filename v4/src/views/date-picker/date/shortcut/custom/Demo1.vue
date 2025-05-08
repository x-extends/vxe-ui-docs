<template>
  <div>
    <vxe-date-picker v-model="val1" :shortcut-config="shortcutConfig"></vxe-date-picker>
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
      content: '今天',
      clickMethod () {
        val1.value = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
      }
    },
    {
      name: '2',
      content: '上一天',
      clickMethod () {
        val1.value = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -1), 'yyyy-MM-dd')
      }
    },
    {
      name: '3',
      content: '下一天',
      clickMethod () {
        val1.value = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), 1), 'yyyy-MM-dd')
      }
    }
  ]
})
</script>
