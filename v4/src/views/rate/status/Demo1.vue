<template>
  <div>
    <div>
      <vxe-rate v-model="val1"></vxe-rate>
    </div>
    <div>
      <vxe-rate v-model="val2" status="primary"></vxe-rate>
    </div>
    <div>
      <vxe-rate v-model="val3" status="success"></vxe-rate>
    </div>
    <div>
      <vxe-rate v-model="val4" status="info"></vxe-rate>
    </div>
    <div>
      <vxe-rate v-model="val5" status="warning"></vxe-rate>
    </div>
    <div>
      <vxe-rate v-model="val6" status="error"></vxe-rate>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
const val2 = ref(1)
const val3 = ref(2)
const val4 = ref(3)
const val5 = ref(4)
const val6 = ref(5)
</script>
