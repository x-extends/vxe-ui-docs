<template>
  <div>
    <vxe-checkbox-group v-model="val1">
      <vxe-checkbox-button checked-value="1" icon="vxe-icon-file-ppt"></vxe-checkbox-button>
      <vxe-checkbox-button checked-value="2" icon="vxe-icon-file-word"></vxe-checkbox-button>
      <vxe-checkbox-button checked-value="3" icon="vxe-icon-file-markdown"></vxe-checkbox-button>
    </vxe-checkbox-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: ['2']
    }
  }
})
</script>
