<template>
  <div>
    <vxe-input v-model="val1" placeholder="时:分" type="time" value-format="HH:mm" clearable></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
