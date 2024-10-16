<template>
  <div>
    <div>
      <vxe-rate v-model="val1"></vxe-rate>
    </div>
    <div>
      <vxe-rate v-model="val2" size="medium"></vxe-rate>
    </div>
    <div>
      <vxe-rate v-model="val3" size="small"></vxe-rate>
    </div>
    <div>
      <vxe-rate v-model="val4" size="mini"></vxe-rate>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(1)
const val2 = ref(2)
const val3 = ref(3)
const val4 = ref(4)
</script>
