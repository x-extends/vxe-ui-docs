<template>
  <div>
    <vxe-color-picker v-model="val1" type="rgb" show-eye-dropper clearable></vxe-color-picker>
    <vxe-color-picker v-model="val2" :colors="colorList" type="hex" show-eye-dropper clearable></vxe-color-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      val2: '#FF00FF',
      colorList: [
        '#DC143C', '#FF1493', '#FF00FF', '#9932CC', '#6A5ACD',
        '#0000FF', '#00008B', '#778899', '#1E90FF', '#00BFFF',
        '#5F9EA0', '#00FFFF', '#008080', '#7FFFAA', '#3CB371',
        '#8FBC8F', '#008000', '#7CFC00', '#556B2F', '#FFFFE0',
        '#FFFF00', '#808000', '#EEE8AA', '#FFD700', '#FFA500',
        '#FF4500', '#FA8072', '#FF0000', '#800000', '#C0C0C0'
      ]
    }
  }
})
</script>
