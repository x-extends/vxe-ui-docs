<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="显示到左侧" type="amount" :control-config="controlConfig"></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeNumberInputPropTypes } from 'vxe-pc-ui'

const val1 = ref(null)

const controlConfig = reactive<VxeNumberInputPropTypes.ControlConfig>({
  layout: 'left'
})
</script>
