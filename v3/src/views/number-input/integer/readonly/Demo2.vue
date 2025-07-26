<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="禁止输入" type="integer" :editable="isEdit"></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 123,
      isEdit: false
    }
  }
})
</script>
