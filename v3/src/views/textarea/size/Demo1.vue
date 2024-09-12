<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="默认尺寸"></vxe-textarea>
    <vxe-textarea v-model="val2" size="medium" placeholder="中等尺寸"></vxe-textarea>
    <vxe-textarea v-model="val3" size="small" placeholder="小型尺寸"></vxe-textarea>
    <vxe-textarea v-model="val4" size="mini" placeholder="超小尺寸"></vxe-textarea>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      val2: '',
      val3: '',
      val4: ''
    }
  }
})
</script>
