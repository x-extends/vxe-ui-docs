<template>
  <div>
    <vxe-switch v-model="isReadonly"></vxe-switch>
    <vxe-icon-picker v-model="val1" :readonly="isReadonly" clearable></vxe-icon-picker>

    <div>
      <span>查看：</span>
      <i :class="val1"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isReadonly = ref(false)
const val1 = ref('')
</script>
