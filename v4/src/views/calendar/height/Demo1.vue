<template>
  <div>
    <div style="margin-bottom: 8px;">
      width：
      <vxe-radio-group v-model="width">
        <vxe-radio-button :checked-value="400" content="400px"></vxe-radio-button>
        <vxe-radio-button :checked-value="600" content="600px"></vxe-radio-button>
        <vxe-radio-button :checked-value="800" content="800px"></vxe-radio-button>
      </vxe-radio-group>
      height：
      <vxe-radio-group v-model="height">
        <vxe-radio-button :checked-value="400" content="400px"></vxe-radio-button>
        <vxe-radio-button :checked-value="600" content="600px"></vxe-radio-button>
        <vxe-radio-button :checked-value="800" content="800px"></vxe-radio-button>
      </vxe-radio-group>
    </div>

    <vxe-calendar :height="height" :width="width"></vxe-calendar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const width = ref(400)
const height = ref(400)
</script>
