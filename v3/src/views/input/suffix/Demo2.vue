<template>
  <div>
    <vxe-input v-model="val1" :suffix-config="suffixConfig" placeholder="自定义后缀文本"></vxe-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeInputPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const suffixConfig: VxeInputPropTypes.SuffixConfig = {
      content: 'KG'
    }

    return {
      val1: '',
      suffixConfig
    }
  }
})
</script>
