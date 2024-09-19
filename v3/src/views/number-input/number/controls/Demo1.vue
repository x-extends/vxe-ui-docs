<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="默认带控制按钮" type="number"></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="关闭控制按钮" type="number" :controls="false"></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: null,
      val2: null
    }
  }
})
</script>
