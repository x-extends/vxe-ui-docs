<template>
  <div>
    <vxe-input v-model="val1" placeholder="默认带控制按钮" type="float"></vxe-input>
    <vxe-input v-model="val2" placeholder="关闭控制按钮" type="float" :controls="false"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
const val2 = ref(null)
</script>
