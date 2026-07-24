<template>
  <div>
    <vxe-color-picker v-model="val1" type="hex" show-alpha clearable></vxe-color-picker>
    <div>
      <span>{{ val1 }}</span>
      <vxe-icon name="arrow-double-right"></vxe-icon>
      <span>{{ txt1 }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { VxeUI } from 'vxe-pc-ui'

const val1 = ref('')

const txt1 = computed(() => {
  return VxeUI.color.toRgbString(val1.value)
})
</script>
