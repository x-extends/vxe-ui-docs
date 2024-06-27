<template>
  <div>
    <vxe-select v-model="val1" placeholder="自定义某一行模板" :options="opts1" clearable>
      <template #opt3="{ option }">
        <span style="color: red">
          <i class="vxe-icon-question-circle-fill"></i>
          <span>{{ option.label }}</span>
        </span>
      </template>

      <template #opt4="{ option }">
        <span style="color: green">
          <i class="vxe-icon-question-circle-fill"></i>
          <span>{{ option.label }}</span>
        </span>
      </template>
    </vxe-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref()
const opts1 = ref([
  { label: '1111', value: '1' },
  { label: '2222', value: '2' },
  { label: '3333', value: '3', slots: { default: 'opt3' } },
  { label: '4444', value: '4', slots: { default: 'opt4' } },
  { label: '5555', value: '5' },
  { label: '6666', value: '6' }
])
</script>
