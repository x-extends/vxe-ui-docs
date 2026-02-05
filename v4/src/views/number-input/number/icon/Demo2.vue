<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="自定义后缀图标" suffix-icon="vxe-icon-rmb"></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="自定义后缀图标" :suffix-config="suffixConfig"></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeNumberInputPropTypes } from 'vxe-pc-ui'

const val1 = ref(null)
const val2 = ref(null)
const suffixConfig = reactive<VxeNumberInputPropTypes.SuffixConfig>({
  icon: 'vxe-icon-rmb'
})
</script>
