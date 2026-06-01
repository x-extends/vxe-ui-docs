<template>
  <div>
    <vxe-switch v-model="isDisabled"></vxe-switch>
    <vxe-textarea v-model="val1" placeholder="禁用" :disabled="isDisabled"></vxe-textarea>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '这是一段多行文本\n这是一段多行文本\n这是一段多行文本\n这是一段多行文本\n这是一段多行文本',
      isDisabled: true
    }
  }
})
</script>
