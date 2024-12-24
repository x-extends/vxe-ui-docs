<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="最小值" type="amount" min="5"></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="最大值" type="amount" max="50"></vxe-number-input>
    <vxe-number-input v-model="val3" placeholder="最小值与最大值" type="amount" min="10" max="100"></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
const val2 = ref(null)
const val3 = ref(null)
</script>
