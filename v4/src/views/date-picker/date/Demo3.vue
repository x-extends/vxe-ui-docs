<template>
  <div>
    <vxe-input v-model="val1" placeholder="禁用" clearable multiple disabled></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
