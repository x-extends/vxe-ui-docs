<template>
  <div>
    <div>
      <vxe-radio v-model="val1" label="1" content="选项一" disabled></vxe-radio>
      <vxe-radio v-model="val1" label="2" content="选项二" disabled></vxe-radio>
      <vxe-radio v-model="val1" label="3" content="选项三" disabled></vxe-radio>
    </div>
    <div>
      <vxe-radio v-model="val2" label="1" content="选项一" disabled></vxe-radio>
      <vxe-radio v-model="val2" label="2" content="选项二" disabled></vxe-radio>
      <vxe-radio v-model="val2" label="3" content="选项三" disabled></vxe-radio>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
const val2 = ref('2')
</script>
