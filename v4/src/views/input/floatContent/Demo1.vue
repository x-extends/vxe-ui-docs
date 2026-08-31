<template>
  <div>
    <vxe-input v-model="val1" placeholder="显示浮动标签" float-content="万" clearable></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
