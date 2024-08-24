<template>
  <div>
    <vxe-countdown v-model="val1" format="倒计时：HH:mm:ss 秒后结束"></vxe-countdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(400000)
</script>
