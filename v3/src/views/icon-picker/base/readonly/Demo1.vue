<template>
  <div>
    <vxe-switch v-model="isReadonly"></vxe-switch>
    <vxe-icon-picker v-model="val1" :readonly="isReadonly" clearable></vxe-icon-picker>

    <div>
      <span>查看：</span>
      <i :class="val1"></i>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      isReadonly: false
    }
  }
})
</script>
