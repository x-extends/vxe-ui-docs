<template>
  <div>
    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" placeholder="年-月-日 时:分" type="datetime" value-format="yyyy-MM-dd HH:mm" label-format="yyyy-MM-dd HH:mm" clearable></vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const startDate = ref('')
const endDate = ref('')
</script>
