<template>
  <div>
    <vxe-color-picker v-model="val1" show-alpha clearable></vxe-color-picker>
    <div v-if="colorObj">
      <span>类型：{{ colorObj.type }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { VxeUI } from 'vxe-pc-ui'

const val1 = ref('#5467D6')

const colorObj = computed(() => {
  return VxeUI.color.parseColor(val1.value)
})
</script>
