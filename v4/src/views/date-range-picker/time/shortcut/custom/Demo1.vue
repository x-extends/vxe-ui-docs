<template>
  <div>
    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" type="time" :shortcut-config="shortcutConfig"></vxe-date-range-picker>
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
      content: '最近1小时',
      clickMethod () {
        startDate.value = XEUtils.toDateString(new Date(Date.now() - 1000 * 60 * 60), 'HH:mm:ss')
        endDate.value = XEUtils.toDateString(new Date(), 'HH:mm:ss')
      }
    },
    {
      name: '2',
      content: '最近3小时',
      clickMethod () {
        startDate.value = XEUtils.toDateString(new Date(Date.now() - 1000 * 60 * 60 * 3), 'HH:mm:ss')
        endDate.value = XEUtils.toDateString(new Date(), 'HH:mm:ss')
      }
    },
    {
      name: '3',
      content: '最近6小时',
      clickMethod () {
        startDate.value = XEUtils.toDateString(new Date(Date.now() - 1000 * 60 * 60 * 6), 'HH:mm:ss')
        endDate.value = XEUtils.toDateString(new Date(), 'HH:mm:ss')
      }
    }
  ]
})
</script>
