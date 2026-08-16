<template>
  <div>
    <vxe-date-range-picker v-model="val1" placeholder="默认尺寸"></vxe-date-range-picker>
    <vxe-date-range-picker v-model="val2" placeholder="中等尺寸" size="medium"></vxe-date-range-picker>
    <vxe-date-range-picker v-model="val3" placeholder="小型尺寸" size="small"></vxe-date-range-picker>
    <vxe-date-range-picker v-model="val4" placeholder="超小尺寸" size="mini"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('2026-08-15,2026-09-02')
const val2 = ref('2026-08-15,2026-09-02')
const val3 = ref('2026-08-15,2026-09-02')
const val4 = ref('2026-08-15,2026-09-02')
</script>
