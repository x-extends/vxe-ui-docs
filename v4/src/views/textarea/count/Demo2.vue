<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="字数统计" max-length="100" :count-method="countMethod" show-word-count></vxe-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTextareaPropTypes } from 'vxe-pc-ui'

const val1 = ref('这是一段多行文本\n这是一段多行文本\n这是一段多行文本\n这是一段多行文本\n这是一段多行文本')

const countMethod: VxeTextareaPropTypes.CountMethod = ({ value }) => {
  return value.length * 2
}
</script>
