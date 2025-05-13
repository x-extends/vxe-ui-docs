<template>
  <div>
    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" clearable>
      <template #suffix>
        <vxe-icon name="lock-fill" status="error"></vxe-icon>
      </template>
    </vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const startDate = ref('')
const endDate = ref('')
</script>
