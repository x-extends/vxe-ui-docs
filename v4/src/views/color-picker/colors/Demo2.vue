<template>
  <div>
    <vxe-color-picker v-model="val1" :colors="colorList" type="rgb" clearable></vxe-color-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const colorList = ref([
  'rgb(60,179,113)', 'rgb(255,20,147)', 'rgb(255,0,25)', 'rgba(153,50,204,1)', 'rgba(106,90,205,1)'
])
</script>
