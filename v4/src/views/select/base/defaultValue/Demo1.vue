<template>
  <div>
    <vxe-select v-model="val1" placeholder="默认第一条" :default-config="{selectMode: 'first'}">
      <vxe-option v-for="num in 15" :key="num" :value="num" :label="`选项${num}`"></vxe-option>
    </vxe-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref()
</script>
