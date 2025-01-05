<template>
  <div>
    <div>
      <vxe-radio-group v-model="shortcutConfig.position">
        <vxe-radio-button label="top" content="顶部"></vxe-radio-button>
        <vxe-radio-button label="bottom" content="底部"></vxe-radio-button>
        <vxe-radio-button label="left" content="左侧"></vxe-radio-button>
        <vxe-radio-button label="right" content="右侧"></vxe-radio-button>
      </vxe-radio-group>
    </div>

    <vxe-date-picker v-model="val1" type="quarter" :shortcut-config="shortcutConfig"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

const val1 = ref('')

const shortcutConfig = reactive<VxeDatePickerPropTypes.ShortcutConfig>({
  position: 'left',
  options: [
    {
      name: '1',
      content: '当前季度',
      clickMethod () {
        val1.value = XEUtils.toDateString(XEUtils.getWhatQuarter(new Date(), 0), 'yyyy-MM-dd')
      }
    },
    {
      name: '2',
      content: '上一季度',
      clickMethod () {
        val1.value = XEUtils.toDateString(XEUtils.getWhatQuarter(new Date(), -1), 'yyyy-MM-dd')
      }
    },
    {
      name: '3',
      content: '下一季度',
      clickMethod () {
        val1.value = XEUtils.toDateString(XEUtils.getWhatQuarter(new Date(), 1), 'yyyy-MM-dd')
      }
    }
  ]
})
</script>
