<template>
  <div>
    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" type="week" :shortcut-config="shortcutConfig"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeDateRangePickerPropTypes } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

const startDate = ref('')
const endDate = ref('')

const shortcutConfig = reactive<VxeDateRangePickerPropTypes.ShortcutConfig>({
  options: [
    {
      name: '1',
      content: '最近1周',
      clickMethod () {
        startDate.value = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -7), 'yyyy-MM-dd')
        endDate.value = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
      }
    },
    {
      name: '2',
      content: '最近2周',
      clickMethod () {
        startDate.value = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -14), 'yyyy-MM-dd')
        endDate.value = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
      }
    }
  ]
})
</script>
