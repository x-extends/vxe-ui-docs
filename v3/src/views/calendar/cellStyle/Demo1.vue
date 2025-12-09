<template>
  <div>
    <vxe-calendar v-model="val" :cell-style="cellStyle"></vxe-calendar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val: ''
    }
  },
  methods: {
    cellStyle (params) {
      const { date, viewType } = params
      if (viewType === 'date' || viewType === 'day') {
        if (date.getDate() === 15) {
          return {
            backgroundColor: '#cbf4d0'
          }
        }
        if (date.getDate() === 20) {
          return {
            backgroundColor: '#f4cbf3'
          }
        }
      }
    }
  }
})
</script>
