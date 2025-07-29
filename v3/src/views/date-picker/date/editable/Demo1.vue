<template>
  <div>
    <vxe-switch v-model="isEditable"></vxe-switch>

    <vxe-date-picker v-model="val1" :editable="isEditable"></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      isEditable: true,
      val1: ''
    }
  }
})
</script>
