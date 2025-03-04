<template>
  <div>
    <vxe-color-picker v-model="val1" :colors="colorList" type="rgb" clearable></vxe-color-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      colorList: [
        'rgba(60,179,113,1)', 'rgba(255,20,147,1)', 'rgba(255,0,25,1)', 'rgba(153,50,204,1)', 'rgba(106,90,205,1)'
      ]
    }
  }
})
</script>
