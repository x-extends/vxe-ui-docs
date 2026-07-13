<template>
  <div>
    <vxe-number-input v-model="val1" size="xlarge" placeholder="特大尺寸"></vxe-number-input>
    <vxe-number-input v-model="val2" size="large" placeholder="大型尺寸"></vxe-number-input>
    <vxe-number-input v-model="val3" placeholder="默认尺寸"></vxe-number-input>
    <vxe-number-input v-model="val4" size="medium" placeholder="中等尺寸"></vxe-number-input>
    <vxe-number-input v-model="val5" size="small" placeholder="小型尺寸"></vxe-number-input>
    <vxe-number-input v-model="val6" size="mini" placeholder="超小尺寸"></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
const val2 = ref(null)
const val3 = ref(null)
const val4 = ref(null)
const val5 = ref(null)
const val6 = ref(null)
</script>
