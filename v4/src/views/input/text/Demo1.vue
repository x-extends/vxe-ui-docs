<template>
  <div>
    <vxe-input v-model="val1"></vxe-input>
    <vxe-input v-model="val2" placeholder="请输入"></vxe-input>
    <vxe-input v-model="val3" placeholder="禁用" disabled></vxe-input>
    <vxe-input v-model="val4" disabled></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('')
const val3 = ref('')
const val4 = ref('xxx')
</script>
