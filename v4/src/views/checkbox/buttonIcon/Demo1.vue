<template>
  <div>
    <vxe-checkbox-group v-model="val1">
      <vxe-checkbox-button checked-value="1" icon="vxe-icon-file-ppt"></vxe-checkbox-button>
      <vxe-checkbox-button checked-value="2" icon="vxe-icon-file-word"></vxe-checkbox-button>
      <vxe-checkbox-button checked-value="3" icon="vxe-icon-file-markdown"></vxe-checkbox-button>
    </vxe-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(['2'])
</script>
