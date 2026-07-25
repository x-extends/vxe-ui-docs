<template>
  <div>
    <vxe-color-picker v-model="val1" show-alpha clearable></vxe-color-picker>
    <div v-if="rgbObj">
      <span>R：{{ rgbObj.r }}，</span>
      <span>G：{{ rgbObj.g }}，</span>
      <span>B：{{ rgbObj.b }}，</span>
      <span>A：{{ rgbObj.a }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { VxeUI } from 'vxe-pc-ui'

const val1 = ref('#5467D6')

const rgbObj = computed(() => {
  return VxeUI.color.toRgb(val1.value)
})
</script>
