<template>
  <div>
    <vxe-switch v-model="isEdit"></vxe-switch>
    <vxe-password-input v-model="val1" placeholder="禁止输入" :editable="isEdit"></vxe-password-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      isEdit: false,
      val1: 'abc123456'
    }
  }
})
</script>
