<template>
  <div>
    <vxe-input v-model="val1" placeholder="显示字数统计" :countMethod="countMethod" show-word-count></vxe-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeInputPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const countMethod: VxeInputPropTypes.CountMethod = ({ value }) => {
      return value.length * 2
    }

    return {
      val1: '',
      countMethod
    }
  }
})
</script>
