<template>
  <div>
    <vxe-textarea v-model="val1" readonly></vxe-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('只读内容')
</script>
