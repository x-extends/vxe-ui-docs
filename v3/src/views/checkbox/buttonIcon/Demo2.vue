<template>
  <div>
    <vxe-checkbox-group v-model="val1">
      <vxe-checkbox-button checked-value="1" icon="vxe-icon-file-ppt" content="PPT"></vxe-checkbox-button>
      <vxe-checkbox-button checked-value="2" icon="vxe-icon-file-word" content="Word"></vxe-checkbox-button>
      <vxe-checkbox-button checked-value="3" icon="vxe-icon-file-markdown" content="Markdown"></vxe-checkbox-button>
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
