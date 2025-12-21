<template>
  <div>
    <div>
      <vxe-radio-group v-model="shortcutConfig.position">
        <vxe-radio-button checked-value="top" content="顶部"></vxe-radio-button>
        <vxe-radio-button checked-value="bottom" content="底部"></vxe-radio-button>
        <vxe-radio-button checked-value="left" content="左侧"></vxe-radio-button>
        <vxe-radio-button checked-value="right" content="右侧"></vxe-radio-button>
      </vxe-radio-group>
    </div>

    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" type="month" :shortcut-config="shortcutConfig"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeDateRangePickerPropTypes } from 'vxe-pc-ui'

const startDate = ref('')
const endDate = ref('')

const shortcutConfig = reactive<VxeDateRangePickerPropTypes.ShortcutConfig>({
  position: 'left',
  options: [
    { code: 'last1', content: '最近1个月' },
    { code: 'last3', content: '最近3个月' }
  ]
})
</script>
