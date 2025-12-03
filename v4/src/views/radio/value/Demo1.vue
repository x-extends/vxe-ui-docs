<template>
  <div>
    <vxe-radio v-model="val1" checked-value="1">值1</vxe-radio>
    <vxe-radio v-model="val1" checked-value="2">值2</vxe-radio>
    <vxe-radio v-model="val1" checked-value="3">值3</vxe-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('2')
</script>
