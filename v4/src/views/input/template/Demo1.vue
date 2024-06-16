<template>
  <div>
    <vxe-input v-model="val1" placeholder="自定义前缀模板">
      <template #prefix>
        <span>Http://</span>
      </template>
    </vxe-input>
    <vxe-input v-model="val2" placeholder="自定义后缀模板">
      <template #suffix>
        <vxe-switch v-model="val3"></vxe-switch>
      </template>
    </vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('')
const val3 = ref(false)
</script>
