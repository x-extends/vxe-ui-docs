<template>
  <div>
    <vxe-icon-picker v-model="val1" :icons="iconList" clearable></vxe-icon-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 'vxe-icon-comment',
      iconList: [
        'home',
        'company',
        'comment',
        'setting',
        'send',
        'envelope',
        'envelope-open'
      ]
    }
  }
})
</script>
