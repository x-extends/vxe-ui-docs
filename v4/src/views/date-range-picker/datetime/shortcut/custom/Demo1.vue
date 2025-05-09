<template>
  <div>
    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" type="datetime" :shortcut-config="shortcutConfig"></vxe-date-range-picker>
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
      content: '最近7天',
      clickMethod () {
        startDate.value = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -7), 'yyyy-MM-dd HH:mm:ss')
        endDate.value = XEUtils.toDateString(new Date(), 'yyyy-MM-dd HH:mm:ss')
      }
    },
    {
      name: '2',
      content: '最近30天',
      clickMethod () {
        startDate.value = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -30), 'yyyy-MM-dd HH:mm:ss')
        endDate.value = XEUtils.toDateString(new Date(), 'yyyy-MM-dd HH:mm:ss')
      }
    },
    {
      name: '3',
      content: '最近90天',
      clickMethod () {
        startDate.value = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -90), 'yyyy-MM-dd HH:mm:ss')
        endDate.value = XEUtils.toDateString(new Date(), 'yyyy-MM-dd HH:mm:ss')
      }
    }
  ]
})
</script>
