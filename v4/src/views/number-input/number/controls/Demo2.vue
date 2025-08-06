<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="鼠标滚轮前后操作" :control-config="controlConfig"></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeNumberInputPropTypes } from 'vxe-pc-ui'

const val1 = ref(null)

const controlConfig = reactive<VxeNumberInputPropTypes.ControlConfig>({
  isWheel: true,
  isArrow: false
})
</script>
