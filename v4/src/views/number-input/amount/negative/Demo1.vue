<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="可输入负数" type="amount" negative></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="禁止输入负数" type="amount" :negative="false"></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
const val2 = ref(null)
</script>
