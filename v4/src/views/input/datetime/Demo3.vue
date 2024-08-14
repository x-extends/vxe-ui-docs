<template>
  <div>
    <vxe-input v-model="val1" placeholder="年-月-日 时:分" type="datetime" value-format="yyyy-MM-dd HH:mm" clearable></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
