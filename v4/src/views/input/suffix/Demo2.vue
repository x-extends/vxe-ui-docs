<template>
  <div>
    <vxe-input v-model="val1" :suffix-config="suffixConfig" placeholder="自定义后缀文本"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeInputPropTypes } from 'vxe-pc-ui'

const val1 = ref('')
const suffixConfig = reactive<VxeInputPropTypes.SuffixConfig>({
  content: 'KG'
})
</script>
