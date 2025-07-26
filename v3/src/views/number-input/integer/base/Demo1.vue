<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="整数类型" type="integer"></vxe-number-input>
    <vxe-number-input v-model="val2" type="integer"></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: null,
      val2: 123.67
    }
  }
})
</script>
