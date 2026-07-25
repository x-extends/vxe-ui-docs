<template>
  <div>
    <vxe-color-picker v-model="val1" show-alpha clearable></vxe-color-picker>
    <div v-if="hslObj">
      <span>H：{{ hslObj.h }}，</span>
      <span>S：{{ hslObj.s }}，</span>
      <span>L：{{ hslObj.l }}，</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { VxeUI } from 'vxe-pc-ui'

const val1 = ref('#5467D6')

const hslObj = computed(() => {
  return VxeUI.color.toHsl(val1.value)
})
</script>
