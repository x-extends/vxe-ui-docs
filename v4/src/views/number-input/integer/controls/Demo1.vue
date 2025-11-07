<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="默认带控制按钮" type="integer"></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="关闭控制按钮" type="integer" :control-config="controlConfig"></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeNumberInputPropTypes } from 'vxe-pc-ui'

const val1 = ref(null)
const val2 = ref(null)

const controlConfig = reactive<VxeNumberInputPropTypes.ControlConfig>({
  enabled: false
})
</script>
