<template>
  <div>
    <vxe-checkbox-group v-model="valGroup1">
      <vxe-checkbox checked-value="1" content="HTML"></vxe-checkbox>
      <vxe-checkbox checked-value="2" content="CSS"></vxe-checkbox>
      <vxe-checkbox checked-value="3" content="Javascript"></vxe-checkbox>
      <vxe-checkbox checked-value="4" content="SASS"></vxe-checkbox>
      <vxe-checkbox checked-value="5" content="LESS"></vxe-checkbox>
    </vxe-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const valGroup1 = ref<string[]>([])
</script>
