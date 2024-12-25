<template>
  <div>
    <vxe-calendar v-model="val" @change="changeEvent" @view-change="viewChangeEvent"></vxe-calendar>
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
    changeEvent ({ value }) {
      console.log('change', value)
    },
    viewChangeEvent  ({ viewType }) {
      console.log('view-change', viewType)
    }
  }
})
</script>
