<template>
  <div>
    <vxe-input v-model="val1"></vxe-input>
    <vxe-input v-model="val2" placeholder="请输入"></vxe-input>
    <vxe-input v-model="val3" placeholder="禁用" disabled></vxe-input>
    <vxe-input v-model="val4" disabled></vxe-input>
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
      val4: 'xxx'
    }
  }
})
</script>
