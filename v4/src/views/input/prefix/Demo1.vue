<template>
  <div>
    <vxe-input v-model="val1" prefix-icon="vxe-icon-user-fill" placeholder="自定义前缀图标"></vxe-input>
    <vxe-input v-model="val2" :prefix-config="prefixConfig" placeholder="自定义前缀图标"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeInputPropTypes } from 'vxe-pc-ui'

const val1 = ref('')
const val2 = ref('')
const prefixConfig = reactive<VxeInputPropTypes.PrefixConfig>({
  icon: 'vxe-icon-user-fill'
})
</script>
