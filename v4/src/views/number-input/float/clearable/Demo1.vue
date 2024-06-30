<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="可清除" type="float" clearable></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
</script>
