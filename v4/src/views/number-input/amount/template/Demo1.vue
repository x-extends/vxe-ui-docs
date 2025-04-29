<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="自定义前缀图标" type="amount">
      <template #prefix>
        <vxe-icon name="usd" status="success"></vxe-icon>
      </template>
    </vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
</script>
