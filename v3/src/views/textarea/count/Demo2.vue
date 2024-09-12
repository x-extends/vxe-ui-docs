<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="字数统计" max-length="100"  :countMethod="countMethod" show-word-count></vxe-textarea>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTextareaPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const countMethod: VxeTextareaPropTypes.CountMethod = ({ value }) => {
      return value.length * 2
    }

    return {
      val1: '',
      countMethod
    }
  }
})
</script>
