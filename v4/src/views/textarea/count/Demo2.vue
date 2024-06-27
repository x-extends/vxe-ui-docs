<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="字数统计" maxlength="100"  :countMethod="countMethod" show-word-count></vxe-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTextareaPropTypes } from 'vxe-pc-ui'

const val1 = ref('')

const countMethod: VxeTextareaPropTypes.CountMethod = ({ value }) => {
  return value.length * 2
}
</script>
