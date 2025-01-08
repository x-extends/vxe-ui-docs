<template>
  <div>
    <vxe-input v-model="val1"></vxe-input>
    <vxe-input v-model="val2" placeholder="自定义提示语"></vxe-input>
    <vxe-input v-model="val3" placeholder="去掉左右空格" trim></vxe-input>
    <vxe-input v-model="val4" placeholder="禁用" disabled></vxe-input>
    <vxe-input v-model="val5" disabled></vxe-input>
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
      val4: '',
      val5: 'xxx'
    }
  }
})
</script>
