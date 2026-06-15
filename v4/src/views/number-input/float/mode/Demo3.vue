<template>
  <div>
    <div>
      <vxe-switch v-model="isReadonly"></vxe-switch>
    </div>

    <vxe-number-input v-model="val1" placeholder="设置向上舍入" type="float" digits="2" rounding-mode="ceil" :readonly="isReadonly"></vxe-number-input>
    <br>
    <vxe-number-input v-model="val2" type="float" digits="2" rounding-mode="ceil" :readonly="isReadonly"></vxe-number-input>
    <br>
    <vxe-number-input v-model="val3" type="float" digits="2" rounding-mode="ceil" :readonly="isReadonly"></vxe-number-input>
    <br>
    <vxe-number-input v-model="val4" type="float" digits="2" rounding-mode="ceil" :readonly="isReadonly"></vxe-number-input>
    <br>
    <vxe-number-input v-model="val5" type="float" digits="2" rounding-mode="ceil" :readonly="isReadonly"></vxe-number-input>
    <br>
    <vxe-number-input v-model="val6" type="float" digits="2" rounding-mode="ceil" :readonly="isReadonly"></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isReadonly = ref(true)

const val1 = ref(3.154)
const val2 = ref(3.155)
const val3 = ref(3.156)
const val4 = ref(-3.154)
const val5 = ref(-3.155)
const val6 = ref(-3.156)
</script>
