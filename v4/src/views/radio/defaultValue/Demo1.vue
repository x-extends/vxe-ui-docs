<template>
  <div>
    <vxe-radio-group v-model="val1" :options="btnOptions" :default-config="defaultConfig"></vxe-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeRadioGroupPropTypes } from 'vxe-pc-ui'

const val1 = ref()

const defaultConfig = reactive<VxeRadioGroupPropTypes.DefaultConfig>({
  selectMode: 'first'
})

const btnOptions = [
  { value: '1', label: '按钮1' },
  { value: '2', label: '按钮2' },
  { value: '3', label: '按钮3' },
  { value: '4', label: '按钮4' }
]
</script>
