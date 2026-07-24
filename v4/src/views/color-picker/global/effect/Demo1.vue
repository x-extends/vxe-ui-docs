<template>
  <div>
    <vxe-color-picker v-model="val1" clearable></vxe-color-picker>
    <div>
      <span :style="{background: val1}">{{ val1 }}</span>
      <vxe-icon name="arrow-double-right"></vxe-icon>
      <span :style="{background: txt1}">{{ txt1 }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { VxeUI } from 'vxe-pc-ui'

const val1 = ref('')

const txt1 = computed(() => {
  return VxeUI.color.lighten(val1.value, 10)
})
</script>
