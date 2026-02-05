<template>
  <div>
    <vxe-input v-model="val1" :prefix-config="prefixConfig" placeholder="自定义前缀文本"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeInputPropTypes } from 'vxe-pc-ui'

const val1 = ref('')
const prefixConfig = reactive<VxeInputPropTypes.PrefixConfig>({
  content: '￥'
})
</script>
