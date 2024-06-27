<template>
  <div>
    <vxe-input v-model="val1" placeholder="显示字数统计" :countMethod="countMethod" show-word-count></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeInputPropTypes } from 'vxe-pc-ui'

const val1 = ref('')

const countMethod: VxeInputPropTypes.CountMethod = ({ value }) => {
  return value.length * 2
}
</script>
