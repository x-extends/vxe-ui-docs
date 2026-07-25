<template>
  <div>
    <vxe-color-picker v-model="val1" show-alpha clearable></vxe-color-picker>
    <div v-if="hsvObj">
      <span>H：{{ hsvObj.h }}，</span>
      <span>S：{{ hsvObj.s }}，</span>
      <span>V：{{ hsvObj.v }}，</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { VxeUI } from 'vxe-pc-ui'

const val1 = ref('#5467D6')

const hsvObj = computed(() => {
  return VxeUI.color.toHsv(val1.value)
})
</script>
