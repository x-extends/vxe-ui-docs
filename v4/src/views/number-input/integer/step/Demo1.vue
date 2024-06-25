<template>
  <div>
    <vxe-input v-model="val1" placeholder="设置步数" type="integer" step="5"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
</script>
