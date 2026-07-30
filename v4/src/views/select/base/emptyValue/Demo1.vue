<template>
  <div>
    <div>
      <vxe-select v-model="val1" placeholder="默认 null" clearable>
        <vxe-option v-for="num in 15" :key="num" :value="num" :label="`选项${num}`"></vxe-option>
      </vxe-select>
      <span>{{ '' + val1 }}</span>
    </div>
    <div>
      <vxe-select v-model="val2" placeholder="自定义 ''" empty-value="" clearable>
        <vxe-option v-for="num in 15" :key="num" :value="num" :label="`选项${num}`"></vxe-option>
      </vxe-select>
      <span>{{ '' + val2 }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
const val2 = ref('')
</script>
