<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="自定义前缀图标" prefix-icon="vxe-icon-usd"></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="自定义前缀图标" :prefix-config="prefixConfig"></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeNumberInputPropTypes } from 'vxe-pc-ui'

const val1 = ref(null)
const val2 = ref(null)
const prefixConfig = reactive<VxeNumberInputPropTypes.PrefixConfig>({
  icon: 'vxe-icon-usd'
})
</script>
