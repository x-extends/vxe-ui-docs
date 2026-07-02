<template>
  <div>
    <vxe-radio-group v-model="val1">
      <vxe-radio-button checked-value="1" icon="vxe-icon-align-left"></vxe-radio-button>
      <vxe-radio-button checked-value="2" icon="vxe-icon-align-center"></vxe-radio-button>
      <vxe-radio-button checked-value="3" icon="vxe-icon-align-right"></vxe-radio-button>
    </vxe-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('2')
</script>
