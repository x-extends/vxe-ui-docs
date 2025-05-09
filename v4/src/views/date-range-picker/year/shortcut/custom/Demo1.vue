<template>
  <div>
    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" type="year" :shortcut-config="shortcutConfig"></vxe-date-range-picker>
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
      content: '最近1年',
      clickMethod () {
        startDate.value = XEUtils.toDateString(XEUtils.getWhatYear(new Date(), -1), 'yyyy-MM-dd')
        endDate.value = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
      }
    },
    {
      name: '2',
      content: '最近3年',
      clickMethod () {
        startDate.value = XEUtils.toDateString(XEUtils.getWhatYear(new Date(), -3), 'yyyy-MM-dd')
        endDate.value = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
      }
    },
    {
      name: '3',
      content: '最近5年',
      clickMethod () {
        startDate.value = XEUtils.toDateString(XEUtils.getWhatYear(new Date(), -5), 'yyyy-MM-dd')
        endDate.value = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
      }
    }
  ]
})
</script>
