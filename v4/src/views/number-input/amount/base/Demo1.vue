<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="金额类型" type="amount"></vxe-number-input>
    <vxe-number-input v-model="val2" type="amount"></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
const val2 = ref(100000000.88)
</script>
