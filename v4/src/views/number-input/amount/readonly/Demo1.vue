<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="禁止输入" type="amount" :editable="false"></vxe-number-input>
    <vxe-number-input v-model="val2" type="amount" readonly></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(123)
const val2 = ref(123)
</script>
